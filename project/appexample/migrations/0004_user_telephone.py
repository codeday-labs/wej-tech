# Generated by Django 4.0.6 on 2022-07-18 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appexample', '0003_remove_user_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='telephone',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]