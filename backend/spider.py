import argparse
import requests
import bs4
from queue import Queue

class Link:
    def __init__(self, base):
        self.base_url = base

def spider(start_url, max_pages):
    start = Link(start_url)
    print(type(start))
    # Queue of Links
    q = Queue()
    q.put(start)
    # Set of strings
    crawled_urls = set()
    crawled_js_urls = set()

    while not q.empty():
        link = q.get()
        print(link.base_url)
        try:
            resp = requests.get(link.base_url, timeout=3)
            soup = bs4.BeautifulSoup(resp.text, features="html.parser")
            crawled_urls.add(link.base_url)
            print(len(crawled_urls))
            if(len(crawled_urls) >= max_pages):
                print('reached max')
                break
            # Crawl href links
            for url in soup.find_all('a', href=True):
                if url['href'].startswith('http://') or url['href'].startswith('https://'):
                    q.put(Link(url['href']))
                else:
                    q.put(Link(link.base_url + url['href']))
            # Crawl .js links
            for url in soup.find_all('script', src=True):
                if url['src'].startswith('http://') or url['src'].startswith('https://'):
                    crawled_js_urls.add(url['src'])
                else:
                    crawled_js_urls.add(link.base_url + url['src'])
        except:
            pass
            #print('failed:')
            #print(link.base_url)

    writeToFiles(crawled_urls, crawled_js_urls)
    print(crawled_urls)
    print(crawled_js_urls)

def writeToFiles(urls, js_urls):
    url_txt = open("spider_urls.txt","w")
    for line in urls:
        url_txt.write(line + '\n')
    url_txt.close()

    js_url_txt = open("spider_js_urls.txt", "w")
    for line in js_urls:
        js_url_txt.write(line + '\n')
    js_url_txt.close()




if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", help="the url to begin crawling at", default="https://www.cs.utexas.edu/people/faculty-researchers/chris-prosise")
    parser.add_argument("--pages", help="the max number of pages to crawl", type=int, default=50)
    args = parser.parse_args()
    spider(args.url, args.pages)