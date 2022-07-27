from django.db import models
#from current_user import get_current_user

# from email.headerregistry import Address

# Create your models here.
class User(models.Model):
    # user info
    user_name = models.CharField(max_length=20, default='')
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
    email = models.EmailField(max_length=254, default='')
    telephone = models.IntegerField()
    password = models.CharField(max_length=24, default='')
    #image = models.ImageField(upload_to='post_images', null=True) #for image upload

    # info for the database, us
    created_at = models.DateTimeField(auto_now_add=True)

    #if you want to print a user in the console for debugging, then you need this line
    def __str__(self):
        return self.user_name

class Image(models.Model):
    # user info
    # uploader is to answer the question "which user created that image?"
    uploader = models.ForeignKey(User, null=False, on_delete=models.CASCADE) #"User" because we need the info from another class
    #user_name = models.CharField(max_length=20, null=True, default='') #null = true -> optional to put username here
    #should we store user_name? -> so it will associate with every image which gets uploaded
    image = models.ImageField(upload_to='post_images', null=False) #for image upload

    # info for the database, us
    #created_at = models.DateTimeField(auto_now_add=True)

    #if you want to print a user in the console for debugging, then you need this line
    def __str__(self):
        return self.uploader
