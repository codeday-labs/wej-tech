from django.shortcuts import render
from django.views.generic.base import View


# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'index.html')
