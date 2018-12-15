import json
import urllib3
http = urllib3.PoolManager()
URL = 'http://www.thebluealliance.com/api/v3/events/2017'
PARAMS = {'X-TBA-Auth-Key':  'lHqQTfGJ1B6WbSYAMLXRrjbB3ylOb26VnKWC7nNIeyZH7cobjTgQ1K43YDADulep'}
file = open('output.txt', 'w')


def get_tba():
    request = http.request('GET', URL, PARAMS)
    data = json.loads(request.data.decode('utf-8'))
    with open('output.txt', 'w') as outfile:
        for i in data:
            if i['country'] == 'USA':
                json.dump(
                    {
                        "type": "Feature",
                        "properties": {
                            "name": i['name'],
                            "marker-symbol": "circle",
                            "marker-size": "medium",
                            "marker-color": "#357e7e",
                            "key": i['key'],
                            "address": i["address"],
                            "city": i["city"],
                            "state_prov": i["state_prov"]
                        },
                        "geometry": {
                            "coordinates": [
                                i["lng"],
                                i["lat"]
                            ],
                            "type": "Point"
                        },
                    }, outfile, indent=1
                )

    print()


get_tba()
