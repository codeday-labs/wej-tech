from django.urls import path
from .views import placeholder

urlpatterns = [
    path('', placeholder)
]