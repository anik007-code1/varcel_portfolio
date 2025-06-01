from django.contrib import admin
from .models import Experience, Skill, Project, Education, Contact


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['position', 'company', 'start_date', 'end_date', 'is_current']
    list_filter = ['is_current', 'start_date']
    ordering = ['-start_date']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'proficiency', 'order']
    list_filter = ['category']
    ordering = ['category', 'order']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'created_at']
    list_filter = ['category', 'is_featured', 'created_at']
    filter_horizontal = ['technologies']
    ordering = ['order', '-created_at']


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'institution', 'end_year', 'grade']
    ordering = ['-end_year']


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
