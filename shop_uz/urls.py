from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.MainView.as_view(), name='main_page'),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name="checkout"),
    path('update_item/', views.updateItem, name="update_item"),
    path('process_order/', views.processOrder, name="process_order"),
    path('<slug:slug>/', views.MainDetailView.as_view(), name='detail_view'),
    path('brands/<slug:slug>/', views.BrandView.as_view(), name='nike_brands'),
    path('footwear/<slug:slug>/', views.OyoqKiymlaErkelaga.as_view(), name='footwear_man'),
    path('jackets/<slug:slug>/', views.Jackets_for_all.as_view(), name='Jackets_for_all'),
    path('apparel/<slug:slug>/', views.listing, name='Tshirts_for_all'),
]
