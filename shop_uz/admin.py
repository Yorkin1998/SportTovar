from django.contrib import admin
from .models import *

admin.site.register(Style)
admin.site.register(Brand)

class MenModelAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['name']}

admin.site.register(MenModel, MenModelAdmin)
admin.site.register(PicturesOfClothes)

admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)