# Generated by Django 5.1.4 on 2024-12-27 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nssapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(choices=[(1, 'admin'), (2, 'nsuser')], default=1, max_length=50),
        ),
    ]
