from django.urls import path
from .views import flight_search

urlpatterns = [
    path('flight-search/', flight_search, name='flight-search'),
]
