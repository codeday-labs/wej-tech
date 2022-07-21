from django.db import models
# from email.headerregistry import Address

# Create your models here.
# class User(models.Model):
#     # user info
#     user_name = models.CharField(max_length=20, default='')
#     first_name = models.CharField(max_length=20, default='')
#     last_name = models.CharField(max_length=20, default='')
#     email = models.EmailField(max_length=254, default='')
#     telephone = models.IntegerField()
#     password = models.CharField(max_length=24, default='')
    
#     # info for the database, us
#     created_at = models.DateTimeField(auto_now_add=True)

from django.db import models
# from email.headerregistry import Address
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name)

        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    # user info
    email = models.EmailField(max_length=254, default='', unique=True)
    user_name = models.CharField(max_length=20, default='')
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
    telephone = models.IntegerField()
    password = models.CharField(max_length=24, default='')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    # info for the database, us
    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name'] # add password and other fields as necessary

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email