# Portfolio Website - Md Arifur Rahman Anik

A modern, responsive portfolio website built with Django and Tailwind CSS showcasing professional experience, projects, skills, and education.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Project Showcase**: Filterable projects by category (ML/AI, DevOps, Web Dev, Data Processing, API)
- **CV Download**: Direct download of PDF CV
- **Contact Form**: Functional contact form with message storage
- **Admin Panel**: Easy content management through Django admin
- **SEO Friendly**: Proper meta tags and semantic HTML

## Pages

- **Home**: Hero section with overview and featured projects
- **About**: Detailed professional background and approach
- **Experience**: Timeline view of work history
- **Projects**: Filterable project showcase with pagination
- **Skills**: Technical skills organized by categories with proficiency levels
- **Education**: Academic background and achievements
- **Contact**: Contact form and information

## Technology Stack

- **Backend**: Django 3.2
- **Frontend**: Tailwind CSS (CDN)
- **Database**: SQLite (default)
- **Icons**: Font Awesome
- **Python**: 3.10+

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations**
   ```bash
   python manage.py migrate
   ```

4. **Populate database with CV data**
   ```bash
   python manage.py populate_data
   ```

5. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run development server**
   ```bash
   python manage.py runserver
   ```

7. **Access the website**
   - Website: http://localhost:8000
   - Admin Panel: http://localhost:8000/admin

## Project Structure

```
Portfolio/
├── portfolio_project/          # Django project settings
├── portfolio/                  # Main Django app
│   ├── models.py              # Database models
│   ├── views.py               # View functions
│   ├── admin.py               # Admin configuration
│   ├── urls.py                # URL routing
│   ├── templates/portfolio/   # HTML templates
│   └── management/commands/   # Custom management commands
├── static/                    # Static files (CSS, JS, images)
├── Md Arifur Rahman Anik.pdf  # CV file for download
├── requirements.txt           # Python dependencies
└── README.md                  # This file
```

## Key Features

### CV Download
- Direct PDF download from navigation and key pages
- Serves the actual CV file with proper headers

### Project Categories
- **Machine Learning/AI**: ML models, NLP, computer vision projects
- **DevOps & Infrastructure**: Docker, Kubernetes, CI/CD projects
- **Web Development**: Django, API development projects
- **Data Processing**: Web scraping, ETL, data pipeline projects
- **API Development**: REST APIs, microservices projects

### Admin Management
Access the admin panel to:
- Add/edit projects
- Update experience information
- Manage skills and proficiency levels
- View contact form submissions
- Update education details

### Responsive Design
- Mobile-first approach
- Collapsible navigation for mobile
- Optimized layouts for all screen sizes
- Touch-friendly interface

## Customization

### Adding New Projects
1. Access admin panel: `/admin`
2. Go to Projects section
3. Add new project with category, description, and technologies
4. Mark as featured to show on homepage

### Updating Skills
1. Access admin panel: `/admin`
2. Go to Skills section
3. Add skills with categories and proficiency levels

### Modifying Content
- Edit templates in `portfolio/templates/portfolio/`
- Update static content directly in HTML files
- Modify styling using Tailwind CSS classes

## Deployment

### Local Development
```bash
python manage.py runserver
```

### Production Deployment
1. Set `DEBUG = False` in settings.py
2. Configure `ALLOWED_HOSTS`
3. Set up static file serving
4. Use production database (PostgreSQL recommended)
5. Configure web server (Nginx + Gunicorn)

## Contact Information

- **Email**: aniklpu01@gmail.com
- **Phone**: +8801627220072
- **Location**: Nikunja 2, Dhaka, Bangladesh
- **GitHub**: https://github.com/anik007-code
- **LinkedIn**: https://www.linkedin.com/in/md-arifur-rahman-anik-a32232172/
- **Portfolio**: https://aniklpu.cloud/

## License

This project is for personal portfolio use.
