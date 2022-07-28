#Serializers is a way to convert Python data to API JSON format and vice-versa.
from rest_framework import serializers
from .models import User, Image

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # id is automatically created, even though not created in the model itself
        # django creates it by itself.
        #fields = ('id', 'first_name', 'last_name', 'email', 'telephone', 'password', 'created_at')
        #model in class Meta just specifies the model to use, while fields can be a tuple or list holding the individual fields in the model, or takes in __all__ to just serialize all fields.
        fields = '__all__'

# makes sure data thats being sent in POST request is valid to create a new user
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'telephone', 'password')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        # id is automatically created, even though not created in the model itself
        # django creates it by itself.
        #fields = ('id', 'first_name', 'last_name', 'email', 'telephone', 'password', 'created_at')
        #model in class Meta just specifies the model to use, while fields can be a tuple or list holding the individual fields in the model, or takes in __all__ to just serialize all fields.
        fields = '__all__'
        
# makes sure data thats being sent in POST request is valid to create a new user
class CreateImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('uploader', 'image')

