from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('signup', index),
    path('login', index),
    path('calculate', index),
]