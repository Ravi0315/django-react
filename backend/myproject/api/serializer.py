from rest_framework import serializers
from  django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .models import *


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','first_name','last_name','email','password','username']
    
    def create(self, validated_data):
         validated_data['password'] = make_password(
             validated_data['password']
         )
         return User.objects.create(**validated_data)
    

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'


class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_details
        fields = ['pname','user_id', 'product_id','price','quantity','total','address','mobile','name','state','city','country','pincode','instruction']


        


# class DataSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=UserData
#         fields = '__all__' 

#     def create(self, validated_data):
#         validated_data['password'] = make_password(
#             validated_data['password']
#         )
#         return UserData.objects.create(**validated_data)

        
  
        
    

