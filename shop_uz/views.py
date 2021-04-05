from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import MenModel, PicturesOfClothes, Brand, Order, OrderItem, ShippingAddress
from django.views.generic import ListView, DetailView
from django.views.generic.base import View
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
import json
import datetime

from .utils import cartData, guestOrder

asd = []


class MainView(ListView):
    model = MenModel
    queryset = MenModel.objects.all()
    template_name = 'situations/main.html'
    paginate_by = 9


class MainDetailView(DetailView):
    slug_field = 'slug'
    model = MenModel
    template_name = 'secondmain.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['object_list'] = MenModel.objects.all()
        context['img_list'] = PicturesOfClothes.objects.all()
        return context


class KiyimlaBrendBoyicha(DetailView):
    slug_field = 'slug'
    model = MenModel
    template_name = 'brands/NIKE.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['object_list'] = MenModel.objects.all()
        return context


class OyoqKiymlaErkelaga(View):
    def get(self, request, slug):
        if str(slug) == 'man':
            p_q = MenModel.objects.filter(type="MAN", Category__style__in=['SNEAKERS'])
            return render(request, 'brands/FOOTWEAR_MAN.html', context={'nihao': p_q})
        elif str(slug) == 'women':
            p_q = MenModel.objects.filter(type="WOMAN", Category__style='SNEAKERS')
            return render(request, 'brands/FOOTWEAR_MAN.html', context={'nihao': p_q})
        elif str(slug) == 'nike_footers':
            p_q = MenModel.objects.filter(Category__style__in=['SNEAKERS'], Brand__brand='NIKE')
            return render(request, 'brands/FOOTWEAR_MAN.html', context={'nihao': p_q})
        elif str(slug) == 'adidas_footers':
            p_q = MenModel.objects.filter(Category__style__in=['SNEAKERS'], Brand__brand='ADIDAS')
            return render(request, 'brands/FOOTWEAR_MAN.html', context={'nihao': p_q})
        elif str(slug) == 'puma_footers':
            p_q = MenModel.objects.filter(Category__style__in=['SNEAKERS'], Brand__brand='PUMA')
            return render(request, 'brands/FOOTWEAR_MAN.html', context={'nihao': p_q})
        elif str(slug) == 'snaekers' or str(slug) == "all":
            p_q = MenModel.objects.filter(Category__style__in=['SNEAKERS'])
            return render(request, 'brands/FOOTWEAR_MAN.html', context={'nihao': p_q})
        elif str(slug) == 'lacoste':
            p_q = MenModel.objects.filter(Brand__brand='LACOSTE')
            return render(request, 'brands/FOOTWEAR_MAN.html', context={'nihao': p_q})
        # elif str(slug)=='north_face':
        #     p_q=MenModel.objects.filter(Brand__brand='NorthFace')
        #     return render(request,'brands/FOOTWEAR_MAN.html',context={'nihao':p_q})

    # paginate_by = 3
    # model = MenModel
    # queryset = MenModel.objects.filter(Category__style="SNEAKERS", type="MAN")
    # template_name = 'brands/FOOTWEAR_MAN.html'


class BrandView(View):
    def get(self, request, slug):
        brand_query = MenModel.objects.filter(Brand__url=slug)
        aaa = Brand.objects.get(url=slug)
        return render(request, 'brands/NIKE.html', context={'aaa': aaa, 'brand': brand_query})


class Jackets_for_all(ListView):
    paginate_by = 6
    model = MenModel
    queryset = MenModel.objects.filter(Brand__brand='NorthFace')
    template_name = 'brands/jackets.html'

class Tshirts_for_all(ListView):
    paginate_by = 6
    model = MenModel
    queryset = MenModel.objects.filter(Category__style='T-shirts')
    template_name = 'brands/jackets.html'
    # def get(self,request,slug):
    #     if slug=='t-shirts':
    #         queryset = MenModel.objects.filter(Category__style='T-shirts')
    #         return render(request,'brands/jackets.html',context={'object_list':queryset})
    #     elif slug=='Longsleeves':
    #         queryset = MenModel.objects.filter(Category__style='Longsleeves')
    #         return render(request, 'brands/jackets.html', context={'object_list': queryset})

def listing(request,slug):
    if slug=='t-shirts':
        queryset = MenModel.objects.filter(Category__style='T-shirts')
        paginator = Paginator(queryset, 6) # Show 6 contacts per page.
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)
        return render(request, 'brands/jackets.html', {'object_list': queryset,'page_obj': page_obj,'paginator':paginator})
    elif slug=='Longsleeves':
        queryset = MenModel.objects.filter(Category__style='Longsleeves')
        paginator = Paginator(queryset, 6)  # Show 6 contacts per page.
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)
        return render(request, 'brands/jackets.html',
                      {'object_list': queryset, 'page_obj': page_obj, 'paginator': paginator})


def checkout(request):
    data = cartData(request)

    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items': items, 'order': order, 'cartItems': cartItems}
    return render(request, 'buy/checkout.html', context)


def cart(request):
    data = cartData(request)

    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items': items, 'order': order, 'cartItems': cartItems}
    return render(request, 'buy/cart.html', context)


def updateItem(request):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']
    print('Action:', action)
    print('Product:', productId)

    customer = request.user.customer
    product = MenModel.objects.get(id=productId)
    order, created = Order.objects.get_or_create(customer=customer, complete=False)

    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

    if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)

    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()

    return JsonResponse('Item was added', safe=False)


def processOrder(request):
    transaction_id = datetime.datetime.now().timestamp()
    data = json.loads(request.body)

    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
    else:
        customer, order = guestOrder(request, data)

    total = float(data['form']['total'])
    order.transaction_id = transaction_id

    if total == order.get_cart_total:
        order.complete = True
    order.save()

    if order.shipping == True:
        ShippingAddress.objects.create(
            customer=customer,
            order=order,
            address=data['shipping']['address'],
            city=data['shipping']['city'],
            state=data['shipping']['state'],
            zipcode=data['shipping']['zipcode'],
        )

    return JsonResponse('Payment submitted..', safe=False)
