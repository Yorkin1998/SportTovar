# Generated by Django 3.1.7 on 2021-03-31 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_uz', '0006_auto_20210331_1702'),
    ]

    operations = [
        migrations.AddField(
            model_name='style',
            name='url',
            field=models.SlugField(default='', max_length=255),
        ),
    ]
