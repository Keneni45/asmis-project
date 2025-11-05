from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Influencer, Brand, KeynoteSpeaker, Partner, Subscription, FeaturedImage
from .forms import SubscriptionForm

def index(request):
    speakers = KeynoteSpeaker.objects.all()
    partners = Partner.objects.all()
    featured_image = FeaturedImage.objects.last()
    if request.method == 'POST':
        form = SubscriptionForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'index.html', {'speakers': speakers, 'partners': partners, 'subscribe_success': True, 'featured_image': featured_image})
        else:
            return render(request, 'index.html', {'speakers': speakers, 'partners': partners, 'subscribe_error': True, 'form': form, 'featured_image': featured_image})

    return render(request, 'index.html', {'speakers': speakers, 'partners': partners, 'featured_image': featured_image})

def influencer_registration(request):
    if request.method == 'POST':
        try:
            influencer = Influencer.objects.create(
                full_name=request.POST.get('full_name'),
                email=request.POST.get('email'),
                social_media_handle=request.POST.get('social_media_handle'),
                primary_platform=request.POST.get('primary_platform'),
                follower_count=request.POST.get('follower_count'),
                content_niche=request.POST.get('content_niche'),
                about=request.POST.get('about')
            )
            return redirect('index')
        except Exception as e:
            return JsonResponse({'message': str(e), 'status': 'error'})
    return redirect('index')

def brand_registration(request):
    if request.method == 'POST':
        try:
            brand = Brand.objects.create(
                company_name=request.POST.get('company_name'),
                contact_person=request.POST.get('contact_person'),
                email=request.POST.get('email'),
                phone_number=request.POST.get('phone_number'),
                industry=request.POST.get('industry'),
                campaign_budget=request.POST.get('campaign_budget'),
                about=request.POST.get('about')
            )
            return redirect('index')
        except Exception as e:
            return JsonResponse({'message': str(e), 'status': 'error'})
    return redirect('index')