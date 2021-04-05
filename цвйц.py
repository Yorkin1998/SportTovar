# import json
# with open('kutubxona.json','r',encoding="utf8") as file:
#     data = json.load(file)
#     for i in data['data']:
#         print(i['name'])
#
#АДАПТИВНАЯ
import requests
r=requests.get('https://api.namanganmonomarkaz.cf/api/v1/bot/telegram/book/kutubxona/users',verify=False)
a=set()
for i,j in r.json().items():
    for x in j:
        if 'tg_id' in x:
            if 'tg_id'!='':
                a.add(x['tg_id'])
print(a)
# for i,j in r.json().items():
#     if j==[]:
#         print("Bunaqa kitob topomadik")
#     else:
#         print("SIZ QIDIRVOTGAN KITOBLA SHU BOSA KERE\n")
#         for key in j:
#             print(key['name'])
# print(r.json())
# if r.json() is not None:
#     print("BU KITOB BOR! MANMCHA SIZ MAMBULANI QIDIRVOSZ!\n")
#     for key,value in r.json().items():
#         for i in value:
#             print(i['name'])

# json_data=r.json()
# print(json_data)