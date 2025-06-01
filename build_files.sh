#!/bin/bash

# Build script for Vercel deployment
echo "Building the project..."

# Install dependencies
pip install -r requirements.txt

# Collect static files
python3.9 manage.py collectstatic --noinput --clear

# Run migrations
python3.9 manage.py migrate

# Populate database with CV data
python3.9 manage.py populate_data
