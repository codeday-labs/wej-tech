from lib2to3.pytree import Base
from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    # password = None -> because if pass nothing, then default it's none.
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Please include an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        # hash's the password that user inputs
        # built in django function
        user.set_password(password)
        # saves ths user
        user.save()

        return user



# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    # user info
    user_name = models.CharField(max_length=20, default='')
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
    email = models.EmailField(max_length=254, default='', unique=True)
    telephone = models.IntegerField(null=True)

    #info from auth tut
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name']

    def get_user_name(self):
        return self.user_name

    def __str__(self):
        return self.email
    
    # info for the database, us
    created_at = models.DateTimeField(auto_now_add=True)
