from django.db import models
<<<<<<< Updated upstream

# Create your models here.
=======
# from email.headerregistry import Address
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

<<<<<<< Updated upstream
# Create your models here.

=======
>>>>>>> Stashed changes

class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name)

        user.set_password(password)
        user.save()
        return user


<<<<<<< Updated upstream
=======
# Create your models here.
>>>>>>> Stashed changes
class User(AbstractBaseUser, PermissionsMixin):
    # user info
    email = models.EmailField(max_length=254, default='', unique=True)
    user_name = models.CharField(max_length=20, default='')
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
<<<<<<< Updated upstream
    telephone = models.IntegerField()
    password = models.CharField(max_length=24, default='')
=======
    email = models.EmailField(max_length=254, default='', unique=True)
    telephone = models.IntegerField(null=True)

    # info from auth tut
>>>>>>> Stashed changes
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

    # info for the database, us
    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    # add password and other fields as necessary
    REQUIRED_FIELDS = ['first_name']

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======

    # info for the database, us
    created_at = models.DateTimeField(auto_now_add=True)


class Image(models.Model):

    # user info
    # null = true -> optional to put username here
    name = models.ForeignKey(null=False,)
    # should we store user_name? -> so it will associate with every image which gets uploaded
    image = models.ImageField(upload_to='post_images',
                              null=False)  # for image upload

    # info for the database, us
    # created_at = models.DateTimeField(auto_now_add=True)
# if you want to print a user in the console for debugging, then you need this line
    def __str__(self):
        return self.name
>>>>>>> Stashed changes
