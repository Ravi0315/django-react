from django.urls import path
from .views import *

urlpatterns = [
    path('login/',login_),
    path('register/',register),
    path('profile/<int:id>',profile),
    path('logout/',logout_),
    path('forgot/',forgot),

    path('shoping/',shoping),
    path('search/',search),
    path('category/',category),

    path('productdetails/<int:id>',productDetails),
    path('orderdetails/',orderdetails),

    path('order/<int:id>',order),
]
