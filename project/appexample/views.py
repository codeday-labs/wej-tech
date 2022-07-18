from django.shortcuts import render

# for placeholder
from django.http import HttpResponse

# for first two UserViews
from rest_framework import generics
from .serializers import UserSerializer
from .models import User

from rest_framework.views import APIView # generic API view, override default methods
from rest_framework.response import Response # so we can send custom response from view
from rest_framework import status # gives access to HTTP codes
from .serializers import CreateUserSerializer 

# Create your views here.
# def placeholder(request):
#     return HttpResponse("You are in the view of appexample")

# create and view the recently created user
class UserView(generics.CreateAPIView):
    queryset = User.objects.all() # returns all user objects
    serializer_class = UserSerializer # then we convert them in a format defined by serializer

# view and list all user models
class ListUserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data) # take all data and return python representation,
        if serializer.is_valid(): # if the fields in CreateUserSerializer are valid
            first_name = serializer.data.get('first_name')
            last_name = serializer.data.get('last_name')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            telephone = serializer.data.get('telephone')
        
            # create a new user with these attributes from serializer
            user = User(first_name=first_name, last_name=last_name, email=email, telephone=telephone, password=password)
            user.save()

            # return response saying its valid/saved
            # returns json data and status code
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


