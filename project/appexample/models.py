from django.db import models
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
    
    # info for the database, us
    created_at = models.DateTimeField(auto_now_add=True)
