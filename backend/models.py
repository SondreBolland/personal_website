from django.db import models

# Create your models here.
class Message(models.Model):
    text = models.CharField(max_length=500, null=True, blank=True)