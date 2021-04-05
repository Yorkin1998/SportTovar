from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User


class Style(models.Model):
    """STYLE"""
    style = models.CharField(verbose_name='STYLE', max_length=255, help_text='СТИЛЬ')
    url = models.SlugField(max_length=255, default='')

    def __str__(self):
        return self.style


class Brand(models.Model):
    """Brand"""
    brand = models.CharField(unique=True, verbose_name='BRANDS', max_length=255, help_text="БРЕНДЫ")
    url = models.SlugField(max_length=255, default='')
    img = models.ImageField(upload_to='meida/', null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.brand


class MenModel(models.Model):
    """Men Model"""
    Brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='Brand')
    Category = models.ForeignKey(Style, on_delete=models.CASCADE, related_name='Style')
    name = models.CharField(max_length=300, db_index=True, null=True)
    Size = models.CharField(max_length=255)
    Price = models.PositiveIntegerField(help_text='UZS')
    img = models.ImageField(upload_to='media/', null=True)
    slug = models.SlugField(max_length=255)
    digital=models.BooleanField(default=False,null=True,blank=True)
    CHOISE = (
        ("MAN", "MAN"),
        ("WOMAN", "WOMAN"),
        ("KIDS", "KIDS")
    )
    type = models.CharField(choices=CHOISE, max_length=255, null=True)

    @property
    def imageURL(self):
        try:
            url = self.img.url
        except:
            url = ''
        return url

    def __str__(self):
        return f"{self.Brand.brand}-->{self.Category}-->{self.name}-->{self.slug}"

    # f"{self.Brand}-->{self.Category}-->{self.name}"
    def get_absolute_url(self):
        return reverse("detail_view", kwargs={"slug": self.slug})


class PicturesOfClothes(models.Model):
    """ Kiyimlarning rasmlari """
    name = models.ForeignKey(MenModel, on_delete=models.CASCADE, null=True, related_name='NAME')
    image = models.ImageField("Image", upload_to='media/')

    def __str__(self):
        return f"{self.name.name}-->{self.name}"

    class Meta:
        verbose_name = "Pictures of clothes"


# class Kadr(models.Model):
#     category=models.ForeignKey(MenModel.)


class Customer(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)
    transaction_id = models.CharField(max_length=100, null=True)

    def __str__(self):
        return str(self.id)

    @property
    def shipping(self):
        shipping = False
        orderitems = self.orderitem_set.all()
        for i in orderitems:
            if i.product.digital == False:
                shipping = True
        return shipping

    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        return total

    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])
        return total


class OrderItem(models.Model):
    product = models.ForeignKey(MenModel, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

    @property
    def get_total(self):
        total = self.product.Price * self.quantity
        return total


class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    address = models.CharField(max_length=200, null=False)
    city = models.CharField(max_length=200, null=False)
    state = models.CharField(max_length=200, null=False)
    zipcode = models.CharField(max_length=200, null=False)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address