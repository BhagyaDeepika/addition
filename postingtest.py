import requests
def logoupload(files):
    url = 'https://api-vision.test.data2insights.ai/api.data2insights.ai/v1/bird/163/$2y$10$AS0oZoClDUT/Uq/mEEEJRe64ljMRJh5eQZxSYcymt.qpDD071a7GS/keluru@aadhya-analytics.com'
    response=data2InsightsResponse()
    raw_responses = requests.post(url, files=files,verify=False)
    response.add_raw_response(raw_responses)
    return response
response =logoupload(files={'file': open('age.jpg', 'rb')})
print(response.json())		

		
		
		