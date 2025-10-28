from django.shortcuts import render
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')
def influencer(request):
    return render(request, 'contact.html')
def brand(request):
    return render(request, 'contact.html')

# Create your views here.
