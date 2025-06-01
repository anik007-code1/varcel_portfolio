// Portfolio data
const portfolioData = {
    experiences: [
        {
            company: "Jobdesk Bangladesh",
            position: "Python Developer",
            location: "Uttara, Dhaka",
            startDate: "Oct 2023",
            endDate: "Present",
            isCurrent: true,
            description: `Key Projects and Accomplishments:

1. Deployed Ollama(LLAMA2) model in NGINX - Deployed a Ollama based ML model in production which is responsible for recreating job descriptions.

2. Application Deployment and Optimization - Led the deployment of over 50 applications across Nginx, Apache, Kubernetes, and Ingress. Optimized configurations to enhance reliability, load balancing, and fault tolerance.

3. Geolocation and Travel-Time Query Service - Installed and configured Nominatim and Isochrone services, enabling precise geographical data handling and travel-time-based querying.

4. Scalable Web Scraping Engine - Developed and deployed a scalable web scraping engine using Scrapy on Nginx, processing structured and unstructured data from over 500 websites.

5. Containerized Deployments and CI/CD Integration - Established CI/CD pipelines using Jenkins and Docker, automating build and deployment processes.

6. Redis Caching for High-Traffic Applications - Integrated Redis caching in high-traffic applications, significantly improving response times.

7. Advanced NLP and Machine Learning Solutions - Developed NLP solutions using LLM and BERT embeddings for text classification.

8. Job Post Refactoring and Location Extraction API - Engineered a tool to clean and structure job post data, integrating Nominatim with PostgreSQL.

9. Document Processing API Suite - Designed and deployed a suite of APIs for document processing, including PDF merger, PDF image extractor, and PDF text extractor.

10. Human Face Detector - Designed and developed an API using Dlib for human face detection that returns a boolean value for face presence.`
        },
        {
            company: "JobXprss Limited",
            position: "Junior Machine Learning Engineer",
            location: "Gulshan-1, Dhaka",
            startDate: "Nov 2022",
            endDate: "May 2023",
            isCurrent: false,
            description: `• Automated an e-commerce platform by scraping 15,000 product listings from Startech and seamlessly uploading the data to a WordPress localhost.

• Implemented robust data scraping workflows using Selenium, Scrapy, and API integration to automate job data extraction from diverse websites.

• Managed end-to-end data scraping projects, ensuring quality control and timely delivery of accurate data.

• Enhanced data retrieval processes, improving efficiency and accuracy, contributing directly to maintaining up-to-date listings on the platform.`
        },
        {
            company: "Ishraaq Solutions Limited",
            position: "Junior Machine Learning Engineer (Intern)",
            location: "Gulshan-1, Dhaka",
            startDate: "Nov 2021",
            endDate: "May 2023",
            isCurrent: false,
            description: `• Gained hands-on experience in computer vision, focusing on training and fine-tuning machine learning models for tasks such as image detection and processing.

• Developed image detection models that enhanced object recognition accuracy, laying a foundation for real-world applications in automated visual inspection.

• Worked collaboratively with a team of experienced engineers, gaining insights into model optimization and deployment processes for scalable production-grade applications.`
        }
    ],
    
    projects: [
        {
            title: "Ollama LLAMA2 Model Deployment",
            category: "ml",
            description: "Deployed a production-ready Ollama based ML model using LLAMA2 in NGINX environment. The model is responsible for recreating and optimizing job descriptions with high accuracy and performance.",
            technologies: ["Python", "TensorFlow", "Nginx"],
            isFeatured: true,
            githubUrl: "",
            demoUrl: ""
        },
        {
            title: "Scalable Web Scraping Engine",
            category: "data",
            description: "Developed and deployed a scalable web scraping engine using Scrapy on Nginx, processing structured and unstructured data from over 500 websites. Integrated Selenium for dynamic data extraction.",
            technologies: ["Python", "Scrapy", "Nginx"],
            isFeatured: true,
            githubUrl: "",
            demoUrl: ""
        },
        {
            title: "CI/CD Pipeline with Docker & Kubernetes",
            category: "devops",
            description: "Established comprehensive CI/CD pipelines using Jenkins and Docker, automating build and deployment processes. Managed Kubernetes clusters for scalable and resilient application updates.",
            technologies: ["Docker", "Kubernetes", "Jenkins"],
            isFeatured: true,
            githubUrl: "",
            demoUrl: ""
        },
        {
            title: "Document Processing API Suite",
            category: "api",
            description: "Designed and deployed a comprehensive suite of APIs for document processing, including PDF merger, PDF image extractor, and PDF text extractor. Enhanced productivity in production environments.",
            technologies: ["Python", "Django"],
            isFeatured: false,
            githubUrl: "",
            demoUrl: ""
        },
        {
            title: "Human Face Detection API",
            category: "ml",
            description: "Developed an API using Dlib for human face detection that returns boolean values for face presence. Used in production to ensure single-face images for profile pictures in CVs.",
            technologies: ["Python", "Dlib"],
            isFeatured: false,
            githubUrl: "",
            demoUrl: ""
        },
        {
            title: "Geolocation Query Service",
            category: "api",
            description: "Installed and configured Nominatim and Isochrone services for precise geographical data handling and travel-time-based querying. Enhanced mapping and location-based capabilities.",
            technologies: ["PostgreSQL", "Python"],
            isFeatured: false,
            githubUrl: "",
            demoUrl: ""
        }
    ],
    
    skills: {
        programming: [
            { name: "Python", proficiency: 95 },
            { name: "Django", proficiency: 90 },
            { name: "Go", proficiency: 60 },
            { name: "HTML", proficiency: 85 },
            { name: "HCL", proficiency: 75 }
        ],
        frameworks: [
            { name: "TensorFlow", proficiency: 85 },
            { name: "Keras", proficiency: 80 },
            { name: "PyTorch", proficiency: 80 },
            { name: "Scikit-Learn", proficiency: 90 },
            { name: "BERT", proficiency: 75 },
            { name: "OpenCV", proficiency: 80 },
            { name: "Selenium", proficiency: 90 },
            { name: "Scrapy", proficiency: 95 },
            { name: "Django REST Framework", proficiency: 90 },
            { name: "FastAPI", proficiency: 85 },
            { name: "Flask", proficiency: 80 },
            { name: "Streamlit", proficiency: 75 }
        ],
        ml: [
            { name: "LLMs", proficiency: 80 },
            { name: "NLP", proficiency: 85 },
            { name: "Predictive Analytics", proficiency: 80 },
            { name: "Text Classification", proficiency: 90 },
            { name: "Data Preprocessing", proficiency: 90 },
            { name: "Feature Engineering", proficiency: 85 },
            { name: "Model Evaluation", proficiency: 85 }
        ],
        devops: [
            { name: "Docker", proficiency: 90 },
            { name: "Kubernetes", proficiency: 85 },
            { name: "Nginx", proficiency: 90 },
            { name: "CI/CD", proficiency: 85 },
            { name: "Jenkins", proficiency: 80 },
            { name: "ArgoCD", proficiency: 75 },
            { name: "Terraform", proficiency: 70 },
            { name: "Git", proficiency: 95 },
            { name: "Load Balancing", proficiency: 80 }
        ],
        databases: [
            { name: "PostgreSQL", proficiency: 85 },
            { name: "Elasticsearch", proficiency: 75 },
            { name: "Redis", proficiency: 80 }
        ],
        tools: [
            { name: "Tailwind CSS", proficiency: 85 },
            { name: "Nominatim", proficiency: 80 },
            { name: "Dlib", proficiency: 75 }
        ]
    },
    
    education: [
        {
            institution: "Lovely Professional University",
            degree: "Bachelor of Technology",
            fieldOfStudy: "Computer Science and Engineering - Machine Learning",
            location: "Punjab, India",
            startYear: 2018,
            endYear: 2022,
            grade: "71% CGPA",
            description: "Specialized in Machine Learning with 160 total credits. Focused on AI, data science, and software engineering."
        },
        {
            institution: "Cantonment Public School and College",
            degree: "Higher Secondary Certificate",
            fieldOfStudy: "Science",
            location: "Mymensingh, Bangladesh",
            startYear: 2015,
            endYear: 2017,
            grade: "GPA 4.67",
            description: "Completed higher secondary education with focus on Science subjects including Physics, Chemistry, Mathematics, and Biology."
        },
        {
            institution: "Kendua Joy Hari Spry Govt. High School",
            degree: "Secondary School Certificate",
            fieldOfStudy: "Science",
            location: "Bangladesh",
            startYear: 2013,
            endYear: 2015,
            grade: "GPA 4.72",
            description: "Completed secondary education with excellent academic performance in Science stream."
        }
    ]
};

// Navigation functionality
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Close mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Load sections dynamically
    loadExperienceSection();
    loadProjectsSection();
    loadSkillsSection();
    loadEducationSection();
    loadContactSection();
});

// Load sections with data
function loadExperienceSection() {
    // Experience section is already loaded in HTML
}

function loadProjectsSection() {
    renderProjects();
}

function loadSkillsSection() {
    renderSkills();
}

function loadEducationSection() {
    renderEducation();
}

function loadContactSection() {
    // Contact section is already loaded in HTML
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}

// Project filtering
let currentProjectCategory = 'all';

function filterProjects(category) {
    currentProjectCategory = category;
    renderProjects();
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`[onclick="filterProjects('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let filteredProjects = portfolioData.projects;
    if (currentProjectCategory !== 'all') {
        filteredProjects = portfolioData.projects.filter(project => project.category === currentProjectCategory);
    }

    container.innerHTML = filteredProjects.map(project => `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="p-6">
                <!-- Project Header -->
                <div class="flex items-center justify-between mb-4">
                    <span class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ${getCategoryDisplay(project.category)}
                    </span>
                    <div class="flex space-x-2">
                        ${project.githubUrl ? `
                            <a href="${project.githubUrl}" target="_blank"
                               class="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                <i class="fab fa-github text-xl"></i>
                            </a>
                        ` : ''}
                        ${project.demoUrl ? `
                            <a href="${project.demoUrl}" target="_blank"
                               class="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                                <i class="fas fa-external-link-alt text-lg"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>

                <!-- Project Title -->
                <h3 class="text-xl font-bold mb-3 text-gray-900">${project.title}</h3>

                <!-- Project Description -->
                <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>

                <!-- Technologies Used -->
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `
                            <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Project Actions -->
                <div class="flex space-x-3 pt-4 border-t border-gray-100">
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank"
                           class="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium">
                            <i class="fab fa-github mr-2"></i>Code
                        </a>
                    ` : ''}
                    ${project.demoUrl ? `
                        <a href="${project.demoUrl}" target="_blank"
                           class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium">
                            <i class="fas fa-eye mr-2"></i>Demo
                        </a>
                    ` : ''}
                    ${!project.githubUrl && !project.demoUrl ? `
                        <div class="flex-1 bg-gray-300 text-gray-500 text-center py-2 px-4 rounded-lg text-sm font-medium">
                            <i class="fas fa-lock mr-2"></i>Private
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryDisplay(category) {
    const categoryMap = {
        'ml': 'Machine Learning/AI',
        'devops': 'DevOps & Infrastructure',
        'web': 'Web Development',
        'data': 'Data Processing',
        'api': 'API Development'
    };
    return categoryMap[category] || category;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const categoryNames = {
        'programming': 'Programming Languages',
        'frameworks': 'Frameworks & Libraries',
        'ml': 'ML/AI Technologies',
        'devops': 'DevOps & Infrastructure',
        'databases': 'Databases',
        'tools': 'Tools & Others'
    };

    const categoryIcons = {
        'programming': 'fas fa-code text-blue-600',
        'frameworks': 'fas fa-layer-group text-green-600',
        'ml': 'fas fa-brain text-purple-600',
        'devops': 'fas fa-cogs text-red-600',
        'databases': 'fas fa-database text-yellow-600',
        'tools': 'fas fa-tools text-gray-600'
    };

    container.innerHTML = Object.entries(portfolioData.skills).map(([category, skills]) => `
        <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">
                    <i class="${categoryIcons[category]} mr-3"></i>${categoryNames[category]}
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${skills.map(skill => `
                    <div class="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-lg font-semibold text-gray-900">${skill.name}</h3>
                            <span class="text-sm font-medium text-gray-600">${skill.proficiency}%</span>
                        </div>

                        <!-- Proficiency Bar -->
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="h-2 rounded-full transition-all duration-500 ease-out ${getProficiencyColor(skill.proficiency)}"
                                style="width: ${skill.proficiency}%">
                            </div>
                        </div>

                        <!-- Proficiency Level -->
                        <div class="mt-2 text-right">
                            <span class="text-xs font-medium ${getProficiencyTextColor(skill.proficiency)}">
                                ${getProficiencyLevel(skill.proficiency)}
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function getProficiencyColor(proficiency) {
    if (proficiency >= 90) return 'bg-green-500';
    if (proficiency >= 75) return 'bg-blue-500';
    if (proficiency >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
}

function getProficiencyTextColor(proficiency) {
    if (proficiency >= 90) return 'text-green-600';
    if (proficiency >= 75) return 'text-blue-600';
    if (proficiency >= 60) return 'text-yellow-600';
    return 'text-red-600';
}

function getProficiencyLevel(proficiency) {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 75) return 'Advanced';
    if (proficiency >= 60) return 'Intermediate';
    return 'Beginner';
}

function renderEducation() {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = `
        <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>

            ${portfolioData.education.map((edu, index) => {
                const colors = ['blue', 'green', 'purple'];
                const color = colors[index % colors.length];

                return `
                    <div class="relative mb-12 ml-16">
                        <div class="absolute -left-10 top-6 w-4 h-4 bg-${color}-600 rounded-full border-4 border-white shadow-lg"></div>
                        <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">${edu.degree}</h3>
                                    <h4 class="text-xl text-${color}-600 font-semibold mb-1">${edu.institution}</h4>
                                    <p class="text-gray-600 mb-2">${edu.fieldOfStudy}</p>
                                    <p class="text-gray-600">${edu.location}</p>
                                </div>
                                <div class="mt-4 md:mt-0 text-right">
                                    <span class="inline-block bg-${color}-100 text-${color}-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                                        ${edu.startYear} - ${edu.endYear}
                                    </span>
                                    <div class="text-lg font-semibold text-green-600">
                                        Grade: ${edu.grade}
                                    </div>
                                </div>
                            </div>
                            <div class="text-gray-700 leading-relaxed">
                                <p>${edu.description}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}
