from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def placeholder(request):
    return HttpResponse("You are in the view of appexample")