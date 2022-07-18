from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # id is automatically created, even though not created in the model itself
        # django creates it by itself.
        fields = ('id', 'first_name', 'last_name', 'email', 'telephone', 'password', 'created_at')

# makes sure data thats being sent in POST request is valid to create a new user
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'telephone', 'password')
