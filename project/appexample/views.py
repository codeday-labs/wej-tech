from django.shortcuts import render
from django.http import HttpResponse

<<<<<<< Updated upstream
# Create your views here.
def placeholder(request):
    return HttpResponse("You are in the view of appexample")
=======
# for first two UserViews
from rest_framework import generics
from .serializers import UserSerializer
from .models import User

# generic API view, override default methods
from rest_framework.views import APIView
# so we can send custom response from view
from rest_framework.response import Response
from rest_framework import status  # gives access to HTTP codes
from .serializers import UserCreateSerializer

# Create your views here.
# def placeholder(request):
#     return HttpResponse("You are in the view of appexample")

# create and view the recently created user


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()  # returns all user objects
    # then we convert them in a format defined by serializer
    serializer_class = UserSerializer

# view and list all user models


class ListUserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CreateUserView(APIView):
    serializer_class = UserCreateSerializer

    def post(self, request, format=None):
        # take all data and return python representation,
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():  # if the fields in CreateUserSerializer are valid
            first_name = serializer.data.get('first_name')
            last_name = serializer.data.get('last_name')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            telephone = serializer.data.get('telephone')

            # create a new user with these attributes from serializer
            user = User(first_name=first_name, last_name=last_name,
                        email=email, telephone=telephone, password=password)
            user.save()

            # return response saying its valid/saved
            # returns json data and status code
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
>>>>>>> Stashed changes
