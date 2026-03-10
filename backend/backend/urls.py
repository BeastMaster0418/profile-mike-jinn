"""
URL configuration for backend project.
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sections/', views.sections_list),
]
