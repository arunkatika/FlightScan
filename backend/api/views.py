import os
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def flight_search(request):
    # Retrieve query parameters
    origin = request.query_params.get('origin')
    destination = request.query_params.get('destination')
    departure_date = request.query_params.get('departureDate')

    if not all([origin, destination, departure_date]):
        return Response({'error': 'Missing required parameters.'}, status=400)

    # Sky-Scrapper API URL and headers
    url = "https://sky-scrapper.p.rapidapi.com/flight-search"
    headers = {
        'X-RapidAPI-Key': os.environ.get('RAPIDAPI_KEY'),
        'X-RapidAPI-Host': "sky-scrapper.p.rapidapi.com"
    }
    params = {
        'origin': origin,
        'destination': destination,
        'departureDate': departure_date,
        # Include additional parameters as needed.
    }

    try:
        external_response = requests.get(url, headers=headers, params=params)
        external_response.raise_for_status()  # Raise exception for HTTP errors
    except requests.RequestException as e:
        return Response(
            {'error': 'Error fetching data from Sky-Scrapper API', 'details': str(e)},
            status=500
        )

    # Return the external API response directly (adjust parsing as needed)
    return Response(external_response.json())
