from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate
from .models import CustomUser
from .serializers import CustomUserSerializer

@api_view(['POST'])
def register_user(request):
    # Check if email or CPF already exist
    email = request.data.get('email')
    cpf = request.data.get('cpf')
    if CustomUser.objects.filter(email=email).exists() or CustomUser.objects.filter(cpf=cpf).exists():
        return Response({"message": "email ou cpf já cadastrado"}, status=status.HTTP_400_BAD_REQUEST)
    
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        # Here, you should hash the password before saving
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    try:
        user = CustomUser.objects.get(email=email)
        if user.password == password:  # NOTE: This is not secure as we're comparing plaintext passwords.
            return Response({"message": "Login bem-sucedido"}, status=status.HTTP_200_OK)
    except CustomUser.DoesNotExist:
        pass

    return Response({"message": "email ou senha não cadastrado"}, status=status.HTTP_400_BAD_REQUEST)

from django.http import HttpResponse

def welcome(request):
    return HttpResponse("Welcome to the backend!")