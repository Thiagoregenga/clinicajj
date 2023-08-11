from django.contrib.auth.hashers import make_password, check_password
from django.db import models

class CustomUser(models.Model):
    name = models.CharField(max_length=255)
    cpf = models.CharField(max_length=11, unique=True)
    phone = models.CharField(max_length=20)
    birthdate = models.DateField()
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        # If the password isn't hashed, hash it
        # if not self.password.startswith(('pbkdf2_sha256$', 'bcrypt')):
        #     self.password = make_password(self.password)
        super(CustomUser, self).save(*args, **kwargs)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    class Meta:
        verbose_name = 'Custom User'
        verbose_name_plural = 'Custom Users'

    def __str__(self):
        return self.name