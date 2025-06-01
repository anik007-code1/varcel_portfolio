from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.paginator import Paginator
from django.http import HttpResponse, Http404
from django.conf import settings
import os
from .models import Experience, Skill, Project, Education, Contact


def home(request):
    """Home page view with hero section and overview"""
    featured_projects = Project.objects.filter(is_featured=True)[:3]
    recent_experience = Experience.objects.first()
    skills_by_category = {}

    for skill in Skill.objects.all():
        if skill.category not in skills_by_category:
            skills_by_category[skill.category] = []
        skills_by_category[skill.category].append(skill)

    context = {
        'featured_projects': featured_projects,
        'recent_experience': recent_experience,
        'skills_by_category': skills_by_category,
    }
    return render(request, 'portfolio/home.html', context)


def about(request):
    """About page with detailed information"""
    return render(request, 'portfolio/about.html')


def experience(request):
    """Experience page with work history"""
    experiences = Experience.objects.all()
    context = {
        'experiences': experiences,
    }
    return render(request, 'portfolio/experience.html', context)


def projects(request):
    """Projects page with filtering"""
    category = request.GET.get('category', 'all')

    if category == 'all':
        projects_list = Project.objects.all()
    else:
        projects_list = Project.objects.filter(category=category)

    paginator = Paginator(projects_list, 6)  # Show 6 projects per page
    page_number = request.GET.get('page')
    projects_page = paginator.get_page(page_number)

    # Get all categories for filter buttons
    categories = Project.CATEGORY_CHOICES

    context = {
        'projects': projects_page,
        'categories': categories,
        'current_category': category,
    }
    return render(request, 'portfolio/projects.html', context)


def skills(request):
    """Skills page organized by categories"""
    skills_by_category = {}

    for skill in Skill.objects.all():
        if skill.category not in skills_by_category:
            skills_by_category[skill.category] = []
        skills_by_category[skill.category].append(skill)

    context = {
        'skills_by_category': skills_by_category,
        'category_choices': Skill.CATEGORY_CHOICES,
    }
    return render(request, 'portfolio/skills.html', context)


def education(request):
    """Education page with academic background"""
    educations = Education.objects.all()
    context = {
        'educations': educations,
    }
    return render(request, 'portfolio/education.html', context)


def contact(request):
    """Contact page with form"""
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        if name and email and subject and message:
            Contact.objects.create(
                name=name,
                email=email,
                subject=subject,
                message=message
            )
            messages.success(request, 'Thank you for your message! I will get back to you soon.')
            return redirect('contact')
        else:
            messages.error(request, 'Please fill in all fields.')

    return render(request, 'portfolio/contact.html')


def download_cv(request):
    """Download CV PDF file"""
    cv_path = os.path.join(settings.BASE_DIR, 'Md Arifur Rahman Anik.pdf')

    if os.path.exists(cv_path):
        with open(cv_path, 'rb') as cv_file:
            response = HttpResponse(cv_file.read(), content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="Md_Arifur_Rahman_Anik_CV.pdf"'
            return response
    else:
        raise Http404("CV file not found")
