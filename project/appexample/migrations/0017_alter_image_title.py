# Generated by Django 4.0.6 on 2022-08-02 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appexample', '0016_alter_image_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='title',
            field=models.CharField(default='Test', max_length=100),
        ),
    ]
