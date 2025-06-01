# Deployment Guide

## GitHub Repository Setup

Your portfolio is ready to be pushed to: https://github.com/anik007-code1/varcel_portfolio.git

### Steps to Push to GitHub:

1. **Authenticate with GitHub** (choose one method):

   **Option A: Personal Access Token (Recommended)**
   ```bash
   # Generate a Personal Access Token from GitHub Settings > Developer settings > Personal access tokens
   # Use the token as password when prompted
   git push -u origin main
   ```

   **Option B: SSH Key**
   ```bash
   # If you have SSH key set up
   git remote set-url origin git@github.com:anik007-code1/varcel_portfolio.git
   git push -u origin main
   ```

   **Option C: GitHub CLI**
   ```bash
   # If you have GitHub CLI installed
   gh auth login
   git push -u origin main
   ```

2. **Manual Push Commands** (if needed):
   ```bash
   # Check current status
   git status
   
   # Add any new changes
   git add .
   git commit -m "Update portfolio"
   
   # Push to GitHub
   git push origin main
   ```

## Vercel Deployment

Once your code is on GitHub, you can deploy to Vercel:

### Option 1: Vercel Dashboard
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository: `anik007-code1/varcel_portfolio`
5. Configure build settings:
   - **Framework Preset**: Other
   - **Build Command**: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
   - **Output Directory**: Leave empty
   - **Install Command**: `pip install -r requirements.txt`

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Environment Variables for Vercel

Add these environment variables in Vercel dashboard:

```
DJANGO_SETTINGS_MODULE=portfolio_project.settings
DEBUG=False
ALLOWED_HOSTS=your-domain.vercel.app,localhost,127.0.0.1
SECRET_KEY=your-secret-key-here
```

## Alternative Deployment Options

### Heroku
1. Create `Procfile`:
   ```
   web: gunicorn portfolio_project.wsgi
   ```

2. Add to requirements.txt:
   ```
   gunicorn
   whitenoise
   ```

3. Deploy:
   ```bash
   heroku create your-portfolio-app
   git push heroku main
   ```

### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### PythonAnywhere
1. Upload code via Git or file manager
2. Configure WSGI file
3. Set up static files

## Production Settings

For production deployment, create `portfolio_project/production_settings.py`:

```python
from .settings import *

DEBUG = False
ALLOWED_HOSTS = ['your-domain.com', 'your-domain.vercel.app']

# Database for production (if needed)
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'your_db_name',
#         'USER': 'your_db_user',
#         'PASSWORD': 'your_db_password',
#         'HOST': 'your_db_host',
#         'PORT': '5432',
#     }
# }

# Static files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Security settings
SECURE_SSL_REDIRECT = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
```

## Current Repository Status

✅ Git repository initialized
✅ All files committed
✅ Remote origin added: https://github.com/anik007-code1/varcel_portfolio.git
⏳ Ready to push (authentication required)

## Files Included

- Complete Django portfolio website
- All templates with responsive design
- CV download functionality
- Database models and admin setup
- Static files and styling
- Requirements.txt for dependencies
- README.md with documentation
- .gitignore for clean repository

## Next Steps

1. Push to GitHub using one of the authentication methods above
2. Deploy to Vercel or your preferred platform
3. Configure domain and SSL (if needed)
4. Test all functionality in production
5. Set up monitoring and analytics (optional)

Your portfolio is production-ready! 🚀
