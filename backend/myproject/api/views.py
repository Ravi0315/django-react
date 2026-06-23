from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User 
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.serializers import Serializer
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.hashers import make_password
from api.serializer import *
import json
import io
from .models import *
from  django.db.models import Q

# Create your views here.


@csrf_exempt
@api_view(["POST"])
def register(request):
    if request.method == "POST":
        byt = request.body
        stream = io.BytesIO(byt)
        py_data = JSONParser().parse(stream)
        try :
            data = User.objects.get(username=py_data['username'])
            return Response({'msg':'Username already exist'})
        except:
            des_data = RegisterSerializer(data=py_data)
            if des_data.is_valid():
                des_data.save()
                return Response({'msg':'Registered successfully'})
        return Response({'error':'inner error'})


@csrf_exempt
@api_view(['POST'])
def login_(request):
    byt=request.body
    stream = io.BytesIO(byt)
    py_data = JSONParser().parse(stream)
    data = authenticate(
        username=py_data['username'],
        password=py_data['password']
        )
    if data:
        login(request,data)
        return Response({'msg':"Login Successfully..!",'id':data.id})
    else:
        return Response({'error':'username or password invalid'})



@api_view(['GET','PUT'])
def profile(request,id):
 try:
        model_instance = User.objects.get(id=id)
 except:
        return Response({'error':'Username not found'})
 
 if request.method == "GET":   
    ser_data = RegisterSerializer(model_instance)
    py_data = ser_data.data
    print(py_data)
    return Response(py_data)
 
 if request.method == "PUT":
     data=request.body
     stream = io.BytesIO(data)
     py_data = JSONParser().parse(stream)
     print(py_data)
     des_data = RegisterSerializer(model_instance,data=py_data)
     if des_data.is_valid():
         des_data.save()
         return Response({'msg':'Data Updated Suucessfully'})
     return Response({'error':'fill proper data'})

@csrf_exempt
@api_view(['GET'])
def logout_(request):
    logout(request)
    return Response('user Logout')

@csrf_exempt
@api_view(['POST'])
def forgot(request):
    byt = request.body
    stream = io.BytesIO(byt)
    py_data = JSONParser().parse(stream)
    py_data['password'] = make_password(py_data['password'])
    try:
         data = User.objects.get(username=py_data['username'])
         if data.check_password(py_data['password']):
             return Response({'error':'both password matched'})
         else:
             des_data = RegisterSerializer(data,data=py_data)
             if des_data.is_valid():
                 des_data.save()
                 return Response({'msg':'Forgot Password successfully'})
             return Response({'error':'Both password same'})
    except: 
            return Response({'error':"username doesn't exist"})

  

# @api_view(['POST'])
# def udata(request):
#     byt=request.body
#     stream = io.BytesIO(byt)
#     py_data = JSONParser().parse(stream)
#     des_data = DataSerializer(data=py_data)
#     print(des_data)
#     if des_data.is_valid():
#         des_data.save()
#         return Response({'msg':'success'})
#     return Response({'error':'error'})


@csrf_exempt
@api_view(['POST','GET'])
def shoping(request):
    if request.method == "GET":
            model_instance = Products.objects.all()
            ser_data = ProductSerializer(model_instance,many=True)
            py_data = ser_data.data
            return Response(py_data)
    else:
      if  request.method == 'POST':
        byt = request.body
        stream = io.BytesIO(byt)
        py_data = JSONParser().parse(stream)
        if py_data['search'] == 'trending':
            model = Products.objects.filter(trending=True)
            ser_data = ProductSerializer(model,many=True)
            py_data = ser_data.data
            return Response(py_data)
        if py_data['search'] == 'offer':
            model = Products.objects.filter(offer=True)
            ser_data = ProductSerializer(model,many=True)
            py_data = ser_data.data
            return Response(py_data)
        else:
            return Response({'error':"Product not found"})


        



@csrf_exempt
@api_view(['POST'])
def search(request):
    if request.method == "POST":
        byt = request.body
        stream = io.BytesIO(byt)
        py_data = JSONParser().parse(stream)
        try : 
            model_insatnce = Products.objects.filter(Q(pname__icontains=py_data['search']) | Q(category__icontains=py_data['search']))
            if model_insatnce:
                ser_data = ProductSerializer(model_insatnce,many=True)
                py_data = ser_data.data
                return Response(py_data)
            else:
                return Response({'error':'product dose not found !'})
        except:
            return Response({"error":"Product Not Found"})

@csrf_exempt       
@api_view(['GET','POST'])
def category(request):
    if request.method == "GET":
        data = Products.objects.all()
        category=[]
        for i in data:
            if i.category not in category:
                category.append(i.category)   
        return Response(category)
    
    if request.method == "POST":
        byt = request.body
        stream = io.BytesIO(byt)
        py_data = JSONParser().parse(stream)
        model = Products.objects.filter(category=py_data['category'])
        if model:
            ser_data = ProductSerializer(model,many=True)
            py_data = ser_data.data
            return Response(py_data)
        else:
            return Response({'error':'product not found'})
        

@api_view(['GET'])
def productDetails(request,id):
    model = Products.objects.get(id=id)
    ser_data = ProductSerializer(model)
    py_data = ser_data.data
    return Response(py_data)    


@csrf_exempt
@api_view(['PUT'])
def orderdetails(request):
    if request.method == "PUT":
        byt = request.body
        stream = io.BytesIO(byt)
        py_data = JSONParser().parse(stream)
        py_data['total'] =  str(int(py_data['quantity']) * int(py_data['price'] ))
        try :
            check = Order_details.objects.get(product_id=py_data['product_id'],user_id=py_data['user_id'])
            ser_data = OrderDetailsSerializer(check)
            new_data = ser_data.data
            new_data['quantity'] = int(py_data['quantity']) + int(new_data['quantity'])
            des_data = OrderDetailsSerializer(check,data=new_data)
            if des_data.is_valid():
                des_data.save()
                return Response({'msg':'Your Order Accepted'})
        except:
            des_data = OrderDetailsSerializer(data=py_data)
            if des_data.is_valid():
                des_data.save()
                return Response({'msg':'Your Order Accepted'})
            else:
                return Response({'error':'please fill Information'})


@csrf_exempt       
@api_view(['GET','PUT'])
def order(request,id):
  if request.method == "GET":
    model = Order_details.objects.filter(user_id=id)
    if model:
        ser_data = OrderDetailsSerializer(model,many=True)
        py_data = ser_data.data
        return Response(py_data)
    else:
        return Response({'error':'Order Not Found ..!'})
    
  if request.method == "PUT":
      byt = request.body
      stream = io.BytesIO(byt)
      old_data = JSONParser().parse(stream)
      model = Order_details.objects.get(Q(user_id=old_data['user_id']) & Q(product_id=old_data['product_id']))
      ser_data = OrderDetailsSerializer(model)
      py_data = ser_data.data
      if old_data['action'] == 'plus':
                py_data['quantity']+=1
                des_data = OrderDetailsSerializer(model,data=py_data)
                if des_data.is_valid():
                    des_data.save()
                    return Response({'quantity':py_data['quantity']})

      if  old_data['action'] == 'minus':
            if  py_data['quantity'] <= 1:
                model.delete()
                return Response({'delete':'order cancle'})
            else:
                py_data['quantity']-=1
                des_data = OrderDetailsSerializer(model,data=py_data)
                if des_data.is_valid():
                    des_data.save()
                    return Response({'quantity':py_data['quantity']})
                
      if  old_data['action'] == 'delete':
          model.delete()
          return Response({'delete':'order cancle'})
