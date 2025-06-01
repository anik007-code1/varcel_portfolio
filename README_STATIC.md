# Static Portfolio Website - Md Arifur Rahman Anik

A modern, responsive static portfolio website built with HTML, Tailwind CSS, and JavaScript showcasing professional experience, projects, skills, and education.

## Features

- **Fully Static**: No backend dependencies, easy to deploy anywhere
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Single Page Application**: Smooth navigation between sections
- **Project Showcase**: Filterable projects by category (ML/AI, DevOps, Web Dev, Data Processing, API)
- **CV Download**: Direct download of PDF CV
- **Contact Form**: Client-side form validation
- **Interactive Skills**: Visual proficiency bars and categorized skills
- **Timeline Views**: Professional experience and education timelines

## Pages/Sections

- **Home**: Hero section with overview and featured projects
- **About**: Detailed professional background and approach
- **Experience**: Timeline view of work history
- **Projects**: Filterable project showcase
- **Skills**: Technical skills organized by categories with proficiency levels
- **Education**: Academic background and achievements
- **Contact**: Contact form and information

## Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **No Backend**: Completely static

## File Structure

```
Portfolio/
├── index.html              # Main HTML file with all sections
├── js/
│   └── main.js             # JavaScript for navigation and data
├── static/
│   └── favicon.ico         # Favicon
├── Md Arifur Rahman Anik.pdf  # CV file for download
└── README_STATIC.md        # This file
```

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source: Deploy from a branch
4. Select branch: main
5. Your site will be available at: `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: (leave empty or set to root)
4. Deploy automatically

### Vercel
1. Import your GitHub repository
2. Framework preset: Other
3. Build command: (leave empty)
4. Output directory: (leave empty)
5. Deploy

### Any Static Hosting
Simply upload all files to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront
- Surge.sh
- Render (Static Sites)

## Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

3. **Access the website**
   - Direct: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## Customization

### Adding New Projects
Edit the `portfolioData.projects` array in `js/main.js`:

```javascript
{
    title: "Your Project Title",
    category: "ml", // ml, devops, web, data, api
    description: "Project description...",
    technologies: ["Python", "Django", "etc"],
    isFeatured: true,
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo-url.com"
}
```

### Updating Skills
Edit the `portfolioData.skills` object in `js/main.js`:

```javascript
programming: [
    { name: "Python", proficiency: 95 },
    // Add more skills...
]
```

### Modifying Content
- **Personal Info**: Update contact details in HTML and JavaScript
- **Experience**: Edit `portfolioData.experiences` array
- **Education**: Edit `portfolioData.education` array
- **Styling**: Modify Tailwind classes in HTML or add custom CSS

### Replacing CV
Replace `Md Arifur Rahman Anik.pdf` with your own CV file and update the filename in HTML links.

## Key Features

### CV Download
- Direct PDF download from navigation and key pages
- No server required - uses browser's download functionality

### Project Filtering
- Filter projects by category: All, ML/AI, DevOps, Data Processing, API
- Smooth transitions and animations

### Responsive Navigation
- Desktop: Horizontal navigation with CV download button
- Mobile: Collapsible hamburger menu

### Contact Form
- Client-side validation
- Form submission shows success message
- No backend required (can be enhanced with services like Formspree)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- **Fast Loading**: No server-side processing
- **CDN Assets**: Tailwind CSS and Font Awesome from CDN
- **Optimized Images**: Minimal image usage
- **Smooth Animations**: CSS transitions and transforms

## Contact Information

- **Email**: aniklpu01@gmail.com
- **Phone**: +8801627220072
- **Location**: Nikunja 2, Dhaka, Bangladesh
- **GitHub**: https://github.com/anik007-code
- **LinkedIn**: https://www.linkedin.com/in/md-arifur-rahman-anik-a32232172/
- **Portfolio**: https://aniklpu.cloud/

## License

This project is for personal portfolio use.

---

**Note**: This is a completely static version that eliminates all backend dependencies and deployment issues. It can be hosted on any static hosting service without any configuration.
