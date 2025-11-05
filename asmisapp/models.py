from django.db import models

class Influencer(models.Model):
    PLATFORM_CHOICES = [
        ('instagram', 'Instagram'),
        ('tiktok', 'TikTok'),
        ('youtube', 'YouTube'),
        ('twitter', 'Twitter'),
    ]

    NICHE_CHOICES = [
        ('fashion', 'Fashion & Beauty'),
        ('tech', 'Technology'),
        ('food', 'Food & Lifestyle'),
        ('business', 'Business & Entrepreneurship'),
        ('entertainment', 'Entertainment'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    social_media_handle = models.CharField(max_length=100)
    primary_platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    follower_count = models.IntegerField()
    content_niche = models.CharField(max_length=20, choices=NICHE_CHOICES)
    about = models.TextField()

    def __str__(self):
        return self.full_name

class Brand(models.Model):
    INDUSTRY_CHOICES = [
        ('tech', 'Technology'),
        ('fashion', 'Fashion & Beauty'),
        ('food', 'Food & Beverage'),
        ('finance', 'Finance'),
        ('entertainment', 'Entertainment'),
        ('other', 'Other'),
    ]

    BUDGET_CHOICES = [
        ('small', '$1,000 - $5,000'),
        ('medium', '$5,000 - $15,000'),
        ('large', '$15,000 - $50,000'),
        ('enterprise', '$50,000+'),
    ]

    company_name = models.CharField(max_length=100)
    contact_person = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    industry = models.CharField(max_length=20, choices=INDUSTRY_CHOICES)
    campaign_budget = models.CharField(max_length=20, choices=BUDGET_CHOICES)
    about = models.TextField()

    def __str__(self):
        return self.company_name

class KeynoteSpeaker(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='speakers/')
    followers = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Partner(models.Model):
    CATEGORY_CHOICES = [
        ('tech', 'Technology'),
        ('fashion', 'Fashion'),
        ('food', 'Food & Beverage'),
        ('finance', 'Finance'),
    ]
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='partners/')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name