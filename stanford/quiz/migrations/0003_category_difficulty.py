# Generated by Django 2.0.1 on 2018-07-10 05:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_auto_20180621_0517'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='difficulty',
            field=models.CharField(choices=[('Novice', 'Novice'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')], default='Novice', max_length=20),
        ),
    ]
