# Generated by Django 4.0.6 on 2022-08-04 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appexample', '0024_alter_image_uploader'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='uploader',
            field=models.CharField(default=1, max_length=20, null=True),
        ),
    ]