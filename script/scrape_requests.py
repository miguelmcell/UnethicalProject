import requests

FETCH_START = 'fetch("'
FETCH_END = ').then'
URL_END = ',{'
POST =  'method:"post"'
PARAMS_START = 'URLSearchParams({'

urls = ['http://35.193.127.102/MaintainancePortalRegistration']
scripts = ['http://35.193.127.102/static/js/main.d47e4756.chunk.js']

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
                        data.append(name + ':' + arg)
                    else:
                        data.append(name + ':blah')
                        params.append(name)
                posts.append((url, data, params))
            else:
                gets.append(url)
    except:
        pass
    

