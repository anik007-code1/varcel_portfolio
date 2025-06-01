from django.db import models
from django.utils import timezone


class Experience(models.Model):
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.position} at {self.company}"


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('programming', 'Programming Languages'),
        ('frameworks', 'Frameworks/Libraries'),
        ('ml', 'ML/AI Technologies'),
        ('devops', 'DevOps & Infrastructure'),
        ('databases', 'Databases'),
        ('tools', 'Tools & Others'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    proficiency = models.IntegerField(default=80)  # 1-100
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['category', 'order']

    def __str__(self):
        return self.name


class Project(models.Model):
    CATEGORY_CHOICES = [
        ('ml', 'Machine Learning/AI'),
        ('devops', 'DevOps & Infrastructure'),
        ('web', 'Web Development'),
        ('data', 'Data Processing'),
        ('api', 'API Development'),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    description = models.TextField()
    technologies = models.ManyToManyField(Skill, blank=True)
    github_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title


class Education(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    field_of_study = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    start_year = models.IntegerField()
    end_year = models.IntegerField()
    grade = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['-end_year']

    def __str__(self):
        return f"{self.degree} from {self.institution}"


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"
