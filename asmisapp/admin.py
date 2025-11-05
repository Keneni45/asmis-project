from django.contrib import admin
from .models import Influencer, Brand, KeynoteSpeaker, Partner

@admin.register(Influencer)
class InfluencerAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'primary_platform', 'follower_count', 'content_niche')
    search_fields = ('full_name', 'email', 'social_media_handle')
    list_filter = ('primary_platform', 'content_niche')

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'contact_person', 'email', 'industry', 'campaign_budget')
    search_fields = ('company_name', 'contact_person', 'email')
    list_filter = ('industry', 'campaign_budget')

@admin.register(KeynoteSpeaker)
class KeynoteSpeakerAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'followers')
    search_fields = ('name', 'title')

@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ('name', 'category')
    search_fields = ('name',)
    list_filter = ('category',)