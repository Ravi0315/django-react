from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Products(models.Model):
    pname = models.CharField(max_length=100)
    pdesc = models.CharField(max_length=100)
    price = models.CharField()
    category = models.CharField(max_length=100)
    trending = models.BooleanField(default=False)
    offer = models.BooleanField(default=False)
    pimg = models.ImageField(upload_to='uploads/',default='default.webp')

class Order_details(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    product_id = models.CharField(max_length=20)
    is_delete = models.BooleanField(default=False)
    pname = models.CharField(max_length=100)
    price = models.IntegerField()
    name = models.CharField(max_length=20)
    mobile = models.IntegerField()
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=10)
    country = models.CharField(max_length=20)
    quantity = models.PositiveIntegerField()
    total = models.IntegerField()
    instruction = models.CharField(max_length=100)


# {"user_id": "11",
#  "product_id": "1",
# "is_delete":"False",
#  "pname": "Wireless Bluetooth Earbuds",
#  "price": "2499",
#  "name": "Sunt voluptas delect",
#  "mobile": "9333312320",
# "address": "Distinctio Exceptur",
#  "city": "Deserunt esse a duis",
#  "state": "Ut tempora ipsum re",
#  "pincode": "123432",
#  "country": "india",
#  "quantity": "11",
#  "instruction": "Modi consequatur imp",
#  "total": "27489"}