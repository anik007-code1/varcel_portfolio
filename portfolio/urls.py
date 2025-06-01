from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('experience/', views.experience, name='experience'),
    path('projects/', views.projects, name='projects'),
    path('skills/', views.skills, name='skills'),
    path('education/', views.education, name='education'),
    path('contact/', views.contact, name='contact'),
    path('download-cv/', views.download_cv, name='download_cv'),
]
