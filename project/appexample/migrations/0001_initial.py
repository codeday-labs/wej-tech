# Generated by Django 4.0.6 on 2022-07-15 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='', max_length=20)),
                ('last_name', models.CharField(default='', max_length=20)),
                ('address', models.CharField(default='', max_length=120)),
                ('email', models.EmailField(default='', max_length=254)),
                ('password', models.CharField(default='', max_length=24)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
