# Generated by Django 4.0.6 on 2022-08-09 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appexample', '0014_merge_20220809_2224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagehost',
            name='title',
            field=models.CharField(default='Me', max_length=100),
        ),
        migrations.AlterField(
            model_name='imagehost',
            name='uploader',
            field=models.CharField(default=1, max_length=20),
        ),
    ]
