from django.contrib import admin
from .models import Influencer, Brand

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