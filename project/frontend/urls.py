from django.urls import path
from .views import index
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('', index),
    path('signup', index),
    path('login', index),
    path('reset-password', index),
    path('password/reset/confirm/<str:uid>/<str:token>', index),
    path('activate/<str:uid>/<str:token>', index),
    path('community', index),
    path('calculate', index)
]