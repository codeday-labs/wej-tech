# Generated by Django 4.0.6 on 2022-08-08 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appexample', '0012_rename_image_imagehost'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='imagehost',
            name='image',
        ),
        migrations.AddField(
            model_name='imagehost',
            name='image_file',
            field=models.ImageField(blank=True, upload_to='post_images'),
        ),
        migrations.AlterField(
            model_name='imagehost',
            name='title',
            field=models.CharField(default='Test', max_length=100),
        ),
        migrations.AlterField(
            model_name='imagehost',
            name='uploader',
            field=models.CharField(default=1, max_length=20),
        ),
    ]
