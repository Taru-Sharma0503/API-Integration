import requests
try:
    city="Ghaziabad"
    api_key='7dbb2a18fb9855d1804d6fe0c74fd651'
    url=f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
    content=requests.get(url)
    data=content.json()
    print("City:", data['name'])
    print("Weather condition:", data['weather'][0]['main'])
    print("Weather Description:", data['weather'][0]['description'])
    print("Temperature(in Kelvin):", data['main']['temp'])
    print("Temperature feels like:", data['main']['feels_like'])
    print("Minimum Temperature:", data['main']['temp_min'])
    print("Maximum Temperature:", data['main']['temp_max'])
    print("Pressure:", data['main']['pressure'])
    print("Humidity:", data['main']['humidity'])
except Exception as e:
    print(f'{e} Error has occured while fetching the API data.')