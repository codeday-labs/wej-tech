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
from .models import ImageHost
from PIL import Image
import colorsys

from rest_framework.permissions import AllowAny

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
    permission_classes=[AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CreateUserView(APIView):
    permission_classes=[AllowAny]
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


class ImageUploadView(APIView):
    permission_classes=[AllowAny]
    serializer_class = CreateImageSerializer
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, format=None):
        if ImageHost.objects.all().exists():
            images = ImageHost.objects.all()
            serializer = ImageSerializer(images, many=True)

            return Response(
                {'images': serializer.data},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {'error': 'No images found'},
                status=status.HTTP_404_NOT_FOUND
            )

    def post(self, request, format=None):
        images_serializer = CreateImageSerializer(data=request.data)
        if images_serializer.is_valid():
            title = images_serializer.data.get('title')
            # import pdb
            # pdb.set_trace()
            file = request.FILES['image_file']
            uploader = images_serializer.data.get('uploader')

            newImage = ImageHost(title=title, image_file=file, uploader=uploader)

            newImage.save()
            #obj = images_serializer.instance
            return Response(ImageSerializer(newImage).data, status=status.HTTP_201_CREATED)
        # else:
        #     print('error', images_serializer.errors)
        #     return Response(images_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
    queryset = ImageHost.objects.all()  # returns all user objects
    # then we convert them in a format defined by serializer
    serializer_class = ImageSerializer

class ListImageView(generics.ListAPIView):
    queryset = ImageHost.objects.all()
    serializer_class = ImageSerializer

class UploadImageView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = CreateImageSerializer

    def get(self, request, format=None):
        images = ImageHost.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        # imagedb means the image in the database
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            uploader = serializer.data.get('uploader')
            file = request.FILES['image_file']

            image = ImageHost(uploader=uploader, image_file=file)
            image.save()
            return Response(ImageSerializer(image).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class CalculateView(APIView):
    def post(self, request, format=None):
        imagedb = ImageHost(uploader=null, image_file=request.FILES['image_file']) #keywords to search: django get image from request
        imagedb.save()

        #figure out the code to put here to analyze the image
        countPixel = 0
        oxygenPerPixel = 0.00208

        def getWH(imageSubmitted):     #get width and height of the image
            im = Image.open(imageSubmitted)
            width, height = im.size
            return width, height

        def isGreen(r, b, g):    #boolean function to determine if that pixel is green
            # return ((r == 0, g == 128, b == 0) or (r == 152, g == 251, b == 152) or (r == 144, g == 238, b == 144) or (r == 143, g == 188, b == 143) or (r == 173, g == 255, b == 47) or
            #     (r == 0, g == 255, b == 0) or (r == 0, g == 255, b == 127) or (r == 127, g == 255, b == 0) or (r == 50, g == 205, b == 50) or(r == 0, g == 250, b == 154) or
            #     (r == 124, g == 252, b == 0) or (r == 60, g == 179, b == 113) or (r == 46, g == 139, b == 87) or (r == 34, g == 139, b == 34) or (r == 0, g == 100, b == 0) or
            #     (r == 233, g == 255, b == 219) or (r == 208, g == 240, b == 192) or (r == 236, g == 235, b == 189) or (r == 216, g == 228, b == 188) or (r == 152, g == 255, b == 152) or
            #     (r == 152, g == 251, b == 152) or (r == 172, g == 225, b == 175) or (r == 173, g == 223, b == 173) or (r == 168, g == 228, b == 160) or (r == 144, g == 238, b == 144) or
            #     (r == 118, g == 255, b == 122) or (r == 163, g == 193, b == 173) or (r == 197, g == 227, b == 132) or (r == 201, g == 220, b == 135) or (r == 119, g == 221, b == 119) or 
            #     (r == 169, g == 186, b == 157) or (r == 143, g == 188, b == 143) or (r == 178, g == 236, b == 93) or (r == 221, g == 226, b == 106) or (r == 208, g == 219, b == 97) or 
            #     (r == 147, g == 197, b == 114) or (r == 158, g == 253, b == 56) or (r == 217, g == 230, b == 80) or (r == 189, g == 218, b == 87) or (r == 173, g == 255, b == 47) or 
            #     (r == 116, g == 195, b == 101) or (r == 133, g == 187, b == 101) or (r == 123, g == 182, b == 97) or (r == 80, g == 200, b == 120) or (r == 135, g == 169, b == 107) or 
            #     (r == 208, g == 255, b == 20) or (r == 209, g == 226, b == 49) or (r == 57, g == 255, b == 20) or (r == 143, g == 151, b == 121) or (r == 60, g == 208, b == 112) or 
            #     (r == 0, g == 255, b == 127) or (r == 102, g == 255, b == 0) or (r == 127, g == 255, b == 0) or (r == 154, g == 205, b == 50) or (r == 191, g == 255, b == 0) or 
            #     (r == 204, g == 255, b == 0) or (r == 206, g == 255, b == 0) or (r == 50, g == 205, b == 50) or (r == 63, g == 255, b == 0) or (r == 0, g == 250, b == 154) or 
            #     (r == 103, g == 146, b == 103) or (r == 115, g == 134, b == 120) or (r == 124, g == 252, b == 0) or (r == 167, g == 252, b == 0) or (r == 120, g == 134, b == 107) or 
            #     (r == 60, g == 179, b == 113) or (r == 202, g == 224, b == 13) or (r == 11, g == 218, b == 81) or (r == 102, g == 176, b == 50) or (r == 166, g == 214, b == 8) or 
            #     (r == 139, g == 190, b == 27) or (r == 143, g == 212, b == 0) or (r == 76, g == 187, b == 23) or (r == 157, g == 194, b == 9) or (r == 28, g == 172, b == 120) or 
            #     (r == 3, g == 192, b == 60) or (r == 79, g == 121, b == 66) or (r == 141, g == 182, b == 0) or (r == 46, g == 139, b == 87) or (r == 59, g == 122, b == 87) or 
            #     (r == 0, g == 171, b == 102) or (r == 34, g == 139, b == 34) or (r == 0, g == 168, b == 119) or (r == 77, g == 93, b == 83) or (r == 80, g == 125, b == 42) or 
            #     (r == 0, g == 165, b == 80) or (r == 0, g == 158, b == 96) or (r == 0, g == 159, b == 107) or (r == 0, g == 153, b == 0) or (r == 5, g == 144, b == 51) or 
            #     (r == 53, g == 94, b == 59) or (r == 0, g == 145, b == 80) or (r == 19, g == 136, b == 8) or (r == 48, g == 96, b == 48) or (r == 23, g == 114, b == 69) or 
            #     (r == 86, g == 130, b == 3) or (r == 0, g == 127, b == 102) or (r == 0, g == 127, b == 92) or (r == 0, g == 128, b == 0) or (r == 42, g == 128, b == 0) or 
            #     (r == 69, g == 77, b == 50) or (r == 8, g == 120, b == 48) or (r == 0, g == 112, b == 60) or (r == 0, g == 106, b == 78) or (r == 0, g == 107, b == 60) or 
            #     (r == 30, g == 77, b == 43) or (r == 0, g == 102, b == 0) or (r == 27, g == 77, b == 62) or (r == 33, g == 66, b == 30) or (r == 24, g == 69, b == 59) or
            #     (r == 25, g == 89, b == 5) or (r == 0, g == 86, b == 63) or (r == 28, g == 53, b == 45) or (r == 1, g == 68, b == 33) or (r == 18, g == 53, b == 36) or
            #     (r == 0, g == 66, b == 37) or (r == 1, g == 50, b == 32))
            #covert rgb to hls 
            #if this number is within this range of [80,150]:
            #   then this pixel is green
            #return boolean
            hlscolor = colorsys.rgb_to_hls(r, g, b)
            return (73 <= hlscolor <= 154)

        def countGreenPixel(imageSubmitted):      #count pixels
            width, height = getWH(imageSubmitted)
            for row in range(0, height):
                for col in range(0, width):
                    if isGreen(imageSubmitted[row, col]): #imageSubmitted[row, col] : https://www.geeksforgeeks.org/python-pil-getpixel-method/
                        countPixel = countPixel + 1
            return countPixel

        def calculateO2():
            greenPixel = countGreenPixel(imageSubmitted)
            resOxygen = greenPixel * oxygenPerPixel
            return resOxygen
            
        print(request)
        return Response(calculateO2())
