from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import date
from portfolio.models import Experience, Skill, Project, Education


class Command(BaseCommand):
    help = 'Populate database with CV data'

    def handle(self, *args, **options):
        self.stdout.write('Populating database with CV data...')
        
        # Clear existing data
        Experience.objects.all().delete()
        Skill.objects.all().delete()
        Project.objects.all().delete()
        Education.objects.all().delete()
        
        # Create Skills
        skills_data = [
            # Programming Languages
            ('Python', 'programming', 95),
            ('Django', 'programming', 90),
            ('Go', 'programming', 60),
            ('HTML', 'programming', 85),
            ('HCL', 'programming', 75),
            
            # Frameworks/Libraries
            ('TensorFlow', 'frameworks', 85),
            ('Keras', 'frameworks', 80),
            ('PyTorch', 'frameworks', 80),
            ('Scikit-Learn', 'frameworks', 90),
            ('BERT', 'frameworks', 75),
            ('OpenCV', 'frameworks', 80),
            ('Selenium', 'frameworks', 90),
            ('Scrapy', 'frameworks', 95),
            ('Django REST Framework', 'frameworks', 90),
            ('FastAPI', 'frameworks', 85),
            ('Flask', 'frameworks', 80),
            ('Streamlit', 'frameworks', 75),
            
            # ML/AI Technologies
            ('LLMs', 'ml', 80),
            ('NLP', 'ml', 85),
            ('Predictive Analytics', 'ml', 80),
            ('Text Classification', 'ml', 90),
            ('Data Preprocessing', 'ml', 90),
            ('Feature Engineering', 'ml', 85),
            ('Model Evaluation', 'ml', 85),
            
            # DevOps & Infrastructure
            ('Docker', 'devops', 90),
            ('Kubernetes', 'devops', 85),
            ('Nginx', 'devops', 90),
            ('CI/CD', 'devops', 85),
            ('Jenkins', 'devops', 80),
            ('ArgoCD', 'devops', 75),
            ('Terraform', 'devops', 70),
            ('Git', 'devops', 95),
            ('Load Balancing', 'devops', 80),
            
            # Databases
            ('PostgreSQL', 'databases', 85),
            ('Elasticsearch', 'databases', 75),
            ('Redis', 'databases', 80),
            
            # Tools
            ('Tailwind CSS', 'tools', 85),
            ('Nominatim', 'tools', 80),
            ('Dlib', 'tools', 75),
        ]
        
        for name, category, proficiency in skills_data:
            Skill.objects.create(
                name=name,
                category=category,
                proficiency=proficiency
            )
        
        # Create Experiences
        experiences_data = [
            {
                'company': 'Jobdesk Bangladesh',
                'position': 'Python Developer',
                'location': 'Uttara, Dhaka',
                'start_date': date(2023, 10, 1),
                'end_date': None,
                'is_current': True,
                'description': '''Key Projects and Accomplishments:

1. Deployed Ollama(LLAMA2) model in NGINX - Deployed a Ollama based ML model in production which is responsible for recreating job descriptions.

2. Application Deployment and Optimization - Led the deployment of over 50 applications across Nginx, Apache, Kubernetes, and Ingress. Optimized configurations to enhance reliability, load balancing, and fault tolerance.

3. Geolocation and Travel-Time Query Service - Installed and configured Nominatim and Isochrone services, enabling precise geographical data handling and travel-time-based querying.

4. Scalable Web Scraping Engine - Developed and deployed a scalable web scraping engine using Scrapy on Nginx, processing structured and unstructured data from over 500 websites.

5. Containerized Deployments and CI/CD Integration - Established CI/CD pipelines using Jenkins and Docker, automating build and deployment processes.

6. Redis Caching for High-Traffic Applications - Integrated Redis caching in high-traffic applications, significantly improving response times.

7. Advanced NLP and Machine Learning Solutions - Developed NLP solutions using LLM and BERT embeddings for text classification.

8. Job Post Refactoring and Location Extraction API - Engineered a tool to clean and structure job post data, integrating Nominatim with PostgreSQL.

9. Document Processing API Suite - Designed and deployed a suite of APIs for document processing, including PDF merger, PDF image extractor, and PDF text extractor.

10. Human Face Detector - Designed and developed an API using Dlib for human face detection that returns a boolean value for face presence.'''
            },
            {
                'company': 'JobXprss Limited',
                'position': 'Junior Machine Learning Engineer',
                'location': 'Gulshan-1, Dhaka',
                'start_date': date(2022, 11, 1),
                'end_date': date(2023, 5, 31),
                'is_current': False,
                'description': '''• Automated an e-commerce platform by scraping 15,000 product listings from Startech and seamlessly uploading the data to a WordPress localhost.

• Implemented robust data scraping workflows using Selenium, Scrapy, and API integration to automate job data extraction from diverse websites.

• Managed end-to-end data scraping projects, ensuring quality control and timely delivery of accurate data.

• Enhanced data retrieval processes, improving efficiency and accuracy, contributing directly to maintaining up-to-date listings on the platform.'''
            },
            {
                'company': 'Ishraaq Solutions Limited',
                'position': 'Junior Machine Learning Engineer (Intern)',
                'location': 'Gulshan-1, Dhaka',
                'start_date': date(2021, 11, 1),
                'end_date': date(2023, 5, 31),
                'is_current': False,
                'description': '''• Gained hands-on experience in computer vision, focusing on training and fine-tuning machine learning models for tasks such as image detection and processing.

• Developed image detection models that enhanced object recognition accuracy, laying a foundation for real-world applications in automated visual inspection.

• Worked collaboratively with a team of experienced engineers, gaining insights into model optimization and deployment processes for scalable production-grade applications.'''
            }
        ]
        
        for exp_data in experiences_data:
            Experience.objects.create(**exp_data)
        
        # Create Education
        education_data = [
            {
                'institution': 'Lovely Professional University',
                'degree': 'Bachelor of Technology',
                'field_of_study': 'Computer Science and Engineering - Machine Learning',
                'location': 'Punjab, India',
                'start_year': 2018,
                'end_year': 2022,
                'grade': '71% CGPA',
                'description': 'Specialized in Machine Learning with 160 total credits. Focused on AI, data science, and software engineering.'
            },
            {
                'institution': 'Cantonment Public School and College',
                'degree': 'Higher Secondary Certificate',
                'field_of_study': 'Science',
                'location': 'Mymensingh, Bangladesh',
                'start_year': 2015,
                'end_year': 2017,
                'grade': 'GPA 4.67',
                'description': 'Completed higher secondary education with focus on Science subjects including Physics, Chemistry, Mathematics, and Biology.'
            },
            {
                'institution': 'Kendua Joy Hari Spry Govt. High School',
                'degree': 'Secondary School Certificate',
                'field_of_study': 'Science',
                'location': 'Bangladesh',
                'start_year': 2013,
                'end_year': 2015,
                'grade': 'GPA 4.72',
                'description': 'Completed secondary education with excellent academic performance in Science stream.'
            }
        ]
        
        for edu_data in education_data:
            Education.objects.create(**edu_data)
        
        self.stdout.write('Creating projects...')
        
        # Get skills for projects
        python_skill = Skill.objects.get(name='Python')
        django_skill = Skill.objects.get(name='Django')
        tensorflow_skill = Skill.objects.get(name='TensorFlow')
        docker_skill = Skill.objects.get(name='Docker')
        scrapy_skill = Skill.objects.get(name='Scrapy')
        nginx_skill = Skill.objects.get(name='Nginx')
        kubernetes_skill = Skill.objects.get(name='Kubernetes')
        postgresql_skill = Skill.objects.get(name='PostgreSQL')
        
        # Create Projects
        projects_data = [
            {
                'title': 'Ollama LLAMA2 Model Deployment',
                'category': 'ml',
                'description': 'Deployed a production-ready Ollama based ML model using LLAMA2 in NGINX environment. The model is responsible for recreating and optimizing job descriptions with high accuracy and performance.',
                'technologies': [python_skill, tensorflow_skill, nginx_skill],
                'is_featured': True
            },
            {
                'title': 'Scalable Web Scraping Engine',
                'category': 'data',
                'description': 'Developed and deployed a scalable web scraping engine using Scrapy on Nginx, processing structured and unstructured data from over 500 websites. Integrated Selenium for dynamic data extraction.',
                'technologies': [python_skill, scrapy_skill, nginx_skill],
                'is_featured': True
            },
            {
                'title': 'CI/CD Pipeline with Docker & Kubernetes',
                'category': 'devops',
                'description': 'Established comprehensive CI/CD pipelines using Jenkins and Docker, automating build and deployment processes. Managed Kubernetes clusters for scalable and resilient application updates.',
                'technologies': [docker_skill, kubernetes_skill],
                'is_featured': True
            },
            {
                'title': 'Document Processing API Suite',
                'category': 'api',
                'description': 'Designed and deployed a comprehensive suite of APIs for document processing, including PDF merger, PDF image extractor, and PDF text extractor. Enhanced productivity in production environments.',
                'technologies': [python_skill, django_skill],
                'is_featured': False
            },
            {
                'title': 'Human Face Detection API',
                'category': 'ml',
                'description': 'Developed an API using Dlib for human face detection that returns boolean values for face presence. Used in production to ensure single-face images for profile pictures in CVs.',
                'technologies': [python_skill],
                'is_featured': False
            },
            {
                'title': 'Geolocation Query Service',
                'category': 'api',
                'description': 'Installed and configured Nominatim and Isochrone services for precise geographical data handling and travel-time-based querying. Enhanced mapping and location-based capabilities.',
                'technologies': [postgresql_skill, python_skill],
                'is_featured': False
            }
        ]
        
        for project_data in projects_data:
            technologies = project_data.pop('technologies')
            project = Project.objects.create(**project_data)
            project.technologies.set(technologies)
        
        self.stdout.write(self.style.SUCCESS('Successfully populated database with CV data!'))
