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
            for url in soup.find_all('a', href=True):
                if url['href'].startswith('http://') or url['href'].startswith('https://'):
                    q.put(Link(url['href']))
                else:
                    q.put(Link(link.base_url + url['href']))
        except:
            pass
            #print('failed:')
            #print(link.base_url)
    print(crawled_urls)




if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", help="the url to begin crawling at", default="https://www.cs.utexas.edu/people/faculty-researchers/chris-prosise")
    parser.add_argument("--pages", help="the ,ax number of pages to crawl", type=int, default=50)
    args = parser.parse_args()
    spider(args.url, args.pages)