# Generated by Django 3.1.7 on 2021-03-23 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_uz', '0002_auto_20210323_1056'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menmodel',
            name='Price',
            field=models.PositiveIntegerField(help_text='UZS'),
        ),
    ]