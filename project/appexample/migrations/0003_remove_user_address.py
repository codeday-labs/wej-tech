# Generated by Django 4.0.6 on 2022-07-18 18:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appexample', '0002_user_user_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='address',
        ),
    ]