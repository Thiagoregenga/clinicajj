from django.db import models

class CustomUser(models.Model):
    name = models.CharField(max_length=255)
    cpf = models.CharField(max_length=11, unique=True)
    phone = models.CharField(max_length=20)
    birthdate = models.DateField()
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255) 
