from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('influencer-registration/', views.influencer_registration, name='influencer_registration'),
    path('brand-registration/', views.brand_registration, name='brand_registration'),
]