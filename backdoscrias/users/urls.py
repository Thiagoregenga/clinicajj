from django.urls import path
from .views import register_user, login_user
from users.views import welcome  # Import the welcome view
from django.contrib import admin

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_user, name='login_user'),
    path('', welcome, name='welcome'),  # Add this line
    path('admin/', admin.site.urls),
]


    
