from django.shortcuts import render

# for placeholder
from django.http import HttpResponse

# for first two UserViews
from rest_framework import generics
from .serializers import UserSerializer, ImageSerializer
from .models import User

# generic API view, override default methods
from rest_framework.views import APIView
# so we can send custom response from view
from rest_framework.response import Response
from rest_framework import status  # gives access to HTTP codes
from .serializers import CreateUserSerializer, CreateImageSerializer

# these below 6 lines are for image upload, but there are some overlapping so they're commented out
#from .serializers import UserSerializer
#from .models import User
#from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
#from rest_framework.response import Response
#from rest_framework import status
from .models import Image

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
    parser_classes = (MultiPartParser, FormParser)

    serializer_class = CreateUserSerializer

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

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

# For images


# class ImageView(generics.CreateAPIView):
#     queryset = Image.objects.all()  # returns all user objects
#     # then we convert them in a format defined by serializer
#     serializer_class = ImageSerializer

# view and list all image models
# class ImageView(APIView):
#     parser_classes = (MultiPartParser, FormParser)

#     def get(self, request, *args, **kwargs):
#         images = Image.objects.all()
#         serializer = ImageSerializer(images, many=True)
#         return Response(serializer.data)

#     def post(self, request, *args, **kwargs):
#         images_serializer = ImageSerializer(data=request.data)
#         if images_serializer.is_valid():
#             images_serializer.save()
#             return Response(images_serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             print('error', images_serializer.errors)
#             return Response(images_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ImageView(generics.CreateAPIView):
    queryset = Image.objects.all()  # returns all user objects
    # then we convert them in a format defined by serializer
    serializer_class = ImageSerializer


class ListImageView(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class CalculateView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = CreateImageSerializer

    def get(self, request, format=None):
        images = Image.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        # imagedb means the image in the database
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            uploader = serializer.data.get('uploader')
            image = serializer.data.get('image')

            image = Image(uploader=uploader, image=image)
            image.save()
            return Response(ImageSerializer(image).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

        # imagedb = Image(uploader=null, image=request.FILES['image']) #keywords to search: django get image from request
        # imagedb.save()

        # #figure out the code to put here to analyze the image
        # countPixel = 0
        # def getWH():     #get width and height of the image
        # {

        # }

        # def isGreen():    #boolean function to determine if that pixel is green

        # def countP():      #count pixels
        # for row in range(0, height):
        #     for col in range(0, width):
        #         if isGreen(getWH(row,col)):
        #             countPixel = countPixel + 1

        # def calculateO2():
        #formula and stuff
        # print(request)
        # return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
