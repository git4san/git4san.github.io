// Global variables
let projects = [];
let currentFilter = 'all';

// Sample project data - this would typically come from a CMS or API
const projectsData = [
    {
        id: 1,
        title: "AI-Driven Threat Detection VANETs",
        description: "Enhancing VANET security through advanced machine learning algorithms for real-time threat detection and response in vehicular networks.",
        fullDescription: "This project develops an innovative framework for securing Vehicular Ad-Hoc Networks (VANETs) using advanced machine learning techniques. We focus on real-time threat detection, response mechanisms, and privacy preservation in vehicular communications.",
        category: "machine-learning",
        tags: ["AI", "VANETs", "Security", "Deep Learning"],
        image: "🚗",
        year: 2025,
        status: "active",
        duration: "36 months",
        funding: "ARC Discovery Grant",
        fundingAmount: "$580,000",
        collaborators: ["Monash University", "CSIRO", "University of Melbourne"],
        technologies: ["Python", "TensorFlow", "PyTorch", "NS-3", "SUMO"],
        objectives: [
            "Develop novel deep learning algorithms for VANET threat detection",
            "Create real-time response mechanisms for cyber attacks",
            "Ensure privacy preservation in vehicular communications",
            "Validate solutions through comprehensive simulations"
        ],
        methodology: "We employ a multi-layered approach combining deep reinforcement learning with federated learning techniques to create distributed threat detection systems that can operate efficiently in dynamic vehicular environments.",
        results: "Achieved 95% accuracy in threat detection with less than 100ms response time. Successfully demonstrated privacy-preserving capabilities while maintaining network performance.",
        publications: [
            {
                title: "Deep Reinforcement Learning for Autonomous VANET Security",
                authors: "Dr. Academic Researcher, A. Smith, B. Johnson",
                venue: "IEEE Transactions on Vehicular Technology, 2025",
                link: "#"
            }
        ]
    },
    {
        id: 2,
        title: "Data Analytics for Edge Computing",
        description: "Advanced analytics capabilities for distributed IoT environments with real-time processing and decision-making at the network edge.",
        fullDescription: "This project focuses on developing comprehensive analytics frameworks for edge computing environments, enabling real-time data processing and intelligent decision-making in distributed IoT systems.",
        category: "iot-iiot",
        tags: ["Edge Computing", "Analytics", "IoT", "Real-time"],
        image: "📊",
        year: 2024,
        status: "completed",
        duration: "24 months",
        funding: "Industry Partnership",
        fundingAmount: "$450,000",
        collaborators: ["Siemens", "University of Melbourne IoT Lab"],
        technologies: ["Apache Kafka", "TensorFlow Lite", "Docker", "Kubernetes", "InfluxDB"],
        objectives: [
            "Design efficient edge analytics architectures",
            "Implement real-time data processing pipelines",
            "Optimize resource utilization at edge nodes",
            "Develop predictive maintenance algorithms"
        ],
        methodology: "We utilize distributed computing principles combined with machine learning optimization to create efficient edge analytics platforms that can process large-scale IoT data streams with minimal latency.",
        results: "Reduced data processing latency by 78% compared to cloud-based solutions. Achieved 99.5% uptime in industrial deployment scenarios.",
        publications: [
            {
                title: "Edge Computing Analytics for Industrial IoT: A Comprehensive Framework",
                authors: "Dr. Academic Researcher, M. Zhang, K. Patel",
                venue: "IEEE Internet of Things Journal, 2024",
                link: "#"
            }
        ]
    },
    {
        id: 3,
        title: "LLM-Powered Cyber Defence",
        description: "Leveraging large language models for advanced threat intelligence and automated cyber defense mechanisms.",
        fullDescription: "This project explores the application of large language models in cybersecurity, focusing on automated threat analysis, intelligent response systems, and natural language processing for security operations.",
        category: "security-privacy",
        tags: ["LLM", "Cyber Defense", "AI", "Threat Intelligence"],
        image: "🛡️",
        year: 2025,
        status: "active",
        duration: "30 months",
        funding: "Industry Partnership",
        fundingAmount: "$750,000",
        collaborators: ["Microsoft Security Research", "Australian Cyber Security Centre"],
        technologies: ["GPT-4", "BERT", "Transformers", "Python", "Azure OpenAI"],
        objectives: [
            "Develop LLM-based threat intelligence systems",
            "Create automated incident response frameworks",
            "Implement natural language security operations",
            "Build explainable AI for cybersecurity decisions"
        ],
        methodology: "We combine state-of-the-art language models with cybersecurity domain knowledge to create intelligent systems capable of understanding, analyzing, and responding to cyber threats using natural language processing.",
        results: "Achieved 92% accuracy in threat classification and reduced incident response time by 65%. Successfully deployed in two enterprise environments.",
        publications: [
            {
                title: "Large Language Models for Cyber Threat Intelligence",
                authors: "Dr. Academic Researcher, C. Davis, D. Wilson",
                venue: "ACM Conference on Computer and Communications Security (CCS), 2024",
                link: "#"
            }
        ]
    },
    {
        id: 4,
        title: "Quantum-Resilient Cryptography",
        description: "Developing post-quantum cryptographic solutions to protect against future quantum computing threats in critical infrastructure.",
        fullDescription: "This project addresses the imminent threat posed by quantum computers to current cryptographic systems by developing and implementing post-quantum cryptographic algorithms for critical infrastructure protection.",
        category: "security-privacy",
        tags: ["Quantum", "Cryptography", "Post-Quantum", "Security"],
        image: "🔐",
        year: 2024,
        status: "active",
        duration: "42 months",
        funding: "DSTG Grant",
        fundingAmount: "$850,000",
        collaborators: ["NIST", "Australian Signals Directorate", "University of Sydney"],
        technologies: ["CRYSTALS-Kyber", "CRYSTALS-Dilithium", "SPHINCS+", "C++", "OpenSSL"],
        objectives: [
            "Implement NIST-approved post-quantum algorithms",
            "Evaluate performance in critical infrastructure",
            "Develop migration strategies from classical cryptography",
            "Create quantum-safe communication protocols"
        ],
        methodology: "We focus on implementing and optimizing NIST-standardized post-quantum cryptographic algorithms, conducting comprehensive performance analysis, and developing practical deployment strategies for critical infrastructure systems.",
        results: "Successfully implemented three post-quantum algorithms with less than 15% performance overhead. Completed security analysis showing resistance to known quantum attacks.",
        publications: [
            {
                title: "Post-Quantum Cryptography for Critical Infrastructure: Implementation and Performance Analysis",
                authors: "Dr. Academic Researcher, J. Martinez, P. Singh",
                venue: "IEEE Transactions on Information Forensics and Security, 2025",
                link: "#"
            }
        ]
    },
    {
        id: 5,
        title: "Secure ITS for Smart Cities",
        description: "Implementation of secure intelligent transportation systems with focus on privacy preservation and data protection in urban environments.",
        category: "systems-security",
        tags: ["ITS", "Smart Cities", "Privacy", "Transportation"],
        image: "🏙️",
        year: 2024,
        status: "completed"
    },
    {
        id: 6,
        title: "Next-Generation Fuzzing",
        description: "Advanced fuzzing techniques using machine learning to discover vulnerabilities in complex software systems and IoT devices.",
        category: "fuzzing",
        tags: ["Fuzzing", "ML", "Vulnerability", "Testing"],
        image: "🔍",
        year: 2025,
        status: "active"
    },
    {
        id: 7,
        title: "Privacy-Preserving ML",
        description: "Federated learning approaches for privacy-preserving machine learning in distributed healthcare and financial systems.",
        category: "machine-learning",
        tags: ["Privacy", "Federated Learning", "Healthcare", "Finance"],
        image: "🔒",
        year: 2024,
        status: "active"
    },
    {
        id: 8,
        title: "IoT Security Framework",
        description: "Comprehensive security framework for Industrial IoT environments with focus on authentication and secure communication protocols.",
        category: "iot-iiot",
        tags: ["IoT", "Industrial", "Authentication", "Protocols"],
        image: "🏭",
        year: 2023,
        status: "completed"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    projects = projectsData;
    setupNavigation();
    setupScrollIndicator();
    setupAnimations();
    setupProfileImage();
    
    // Load featured projects on homepage
    if (document.getElementById('featured-projects')) {
        loadFeaturedProjects();
    }
    
    // Setup project filtering if on projects page
    if (document.getElementById('projects-container')) {
        setupProjectFiltering();
        loadAllProjects();
    }
    
    // Make research area cards clickable on homepage
    setupResearchAreaNavigation();
}

// Setup research area navigation
function setupResearchAreaNavigation() {
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach(card => {
        const titleElement = card.querySelector('h3');
        if (titleElement) {
            const title = titleElement.textContent.toLowerCase();
            card.style.cursor = 'pointer';
            
            if (title.includes('machine learning')) {
                card.onclick = () => window.location.href = 'research-machine-learning.html';
            } else if (title.includes('iot') || title.includes('industrial')) {
                card.onclick = () => window.location.href = 'research-iot-iiot.html';
            } else if (title.includes('security') || title.includes('privacy')) {
                card.onclick = () => window.location.href = 'research-security-privacy.html';
            }
        }
    });
}

// Load project details for project detail page
function loadProjectDetails(projectId) {
    const project = projectsData.find(p => p.id == projectId);
    if (!project) {
        document.body.innerHTML = '<div class="container"><h1>Project not found</h1><a href="projects.html">Back to Projects</a></div>';
        return;
    }
    
    // Update page title
    document.title = `${project.title} - Academic Portfolio`;
    
    // Update project header
    document.getElementById('projectIcon').textContent = project.image;
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectCategory').textContent = getCategoryName(project.category);
    document.getElementById('projectYear').textContent = project.year;
    document.getElementById('projectStatus').textContent = project.status;
    document.getElementById('projectStatus').className = `project-status ${project.status}`;
    
    // Update project content
    document.getElementById('projectDescription').innerHTML = `<p>${project.fullDescription}</p>`;
    
    // Update objectives
    const objectivesList = document.getElementById('projectObjectives');
    objectivesList.innerHTML = project.objectives.map(obj => `<li>${obj}</li>`).join('');
    
    // Update methodology
    document.getElementById('projectMethodology').innerHTML = `<p>${project.methodology}</p>`;
    
    // Update results
    document.getElementById('projectResults').innerHTML = `<p>${project.results}</p>`;
    
    // Update sidebar details
    document.getElementById('projectDuration').textContent = project.duration;
    document.getElementById('projectFunding').textContent = `${project.funding} • ${project.fundingAmount}`;
    document.getElementById('projectCollaborators').textContent = project.collaborators.join(', ');
    
    // Update technologies
    const techContainer = document.getElementById('projectTechnologies');
    techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Update related publications
    const pubContainer = document.getElementById('relatedPublications');
    pubContainer.innerHTML = project.publications.map(pub => `
        <div class="publication-item">
            <h4>${pub.title}</h4>
            <p class="pub-authors">${pub.authors}</p>
            <p class="pub-venue">${pub.venue}</p>
            <a href="${pub.link}" class="btn-link">View Paper</a>
        </div>
    `).join('');
    
    // Update related projects
    const relatedProjects = projectsData.filter(p => 
        p.id !== project.id && p.category === project.category
    ).slice(0, 3);
    
    const relatedContainer = document.getElementById('relatedProjects');
    relatedContainer.innerHTML = relatedProjects.map(p => `
        <div class="related-project-item" onclick="window.location.href='project-detail.html?id=${p.id}'" style="cursor: pointer;">
            <h4>${p.title}</h4>
            <p>${p.description.substring(0, 100)}...</p>
        </div>
    `).join('');
}

// Navigation functionality
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Highlight active navigation item
    highlightActiveNavItem();
}

// Highlight active navigation item based on current page
function highlightActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Setup scroll indicator
function setupScrollIndicator() {
    // Create scroll indicator if it doesn't exist
    if (!document.querySelector('.scroll-indicator')) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '<div class="scroll-progress"></div>';
        document.body.appendChild(scrollIndicator);
    }
    
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    });
}

// Setup scroll animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in, [data-aos]').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Load featured projects for homepage
function loadFeaturedProjects() {
    const container = document.getElementById('featured-projects');
    if (!container) return;
    
    // Get first 3 active projects
    const featuredProjects = projects.filter(p => p.status === 'active').slice(0, 3);
    
    container.innerHTML = featuredProjects.map(project => createProjectCard(project)).join('');
    
    // Setup lazy loading for project images
    setupLazyLoading();
}

// Create project card HTML
function createProjectCard(project) {
    const categoryName = getCategoryName(project.category);
    
    return `
        <div class="project-card fade-in" data-category="${project.category}" onclick="window.location.href='project-detail.html?id=${project.id}'" style="cursor: pointer;">
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-content">
                <span class="project-category">${categoryName}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Get category display name
function getCategoryName(category) {
    const categoryMap = {
        'all': 'All',
        'machine-learning': 'Machine Learning',
        'security-privacy': 'Security & Privacy',
        'systems-security': 'Systems Security',
        'fuzzing': 'Fuzzing',
        'iot-iiot': 'IoT & IIoT'
    };
    return categoryMap[category] || category;
}

// Setup project filtering
function setupProjectFiltering() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-buttons';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="machine-learning">Machine Learning</button>
        <button class="filter-btn" data-filter="security-privacy">Security & Privacy</button>
        <button class="filter-btn" data-filter="systems-security">Systems Security</button>
        <button class="filter-btn" data-filter="fuzzing">Fuzzing</button>
        <button class="filter-btn" data-filter="iot-iiot">IoT & IIoT</button>
    `;
    
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.parentNode.insertBefore(filterContainer, projectsContainer);
        
        // Add event listeners to filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                filterProjects(filter);
                
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

// Filter projects by category
function filterProjects(category) {
    currentFilter = category;
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
            card.style.display = 'block';
            // Trigger reflow for animation
            card.offsetHeight;
            card.classList.add('fade-in', 'visible');
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });
    
    // Update projects count
    updateProjectsCount();
}

// Load all projects
function loadAllProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = projects.map(project => createProjectCard(project)).join('');
    
    // Setup animations for new cards
    setupAnimations();
    setupLazyLoading();
    updateProjectsCount();
}

// Update projects count display
function updateProjectsCount() {
    const visibleProjects = document.querySelectorAll('.project-card:not(.hidden)').length;
    const countElement = document.getElementById('projects-count');
    
    if (countElement) {
        const categoryName = getCategoryName(currentFilter);
        countElement.textContent = `${visibleProjects} ${categoryName} Projects`;
    }
}

// Setup lazy loading for images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality (if search input exists)
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const query = this.value.toLowerCase().trim();
                searchProjects(query);
            }, 300);
        });
    }
}

// Search projects
function searchProjects(query) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const title = card.querySelector('.project-title').textContent.toLowerCase();
        const description = card.querySelector('.project-description').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.project-tag')).map(tag => tag.textContent.toLowerCase());
        
        const matches = title.includes(query) || 
                       description.includes(query) || 
                       tags.some(tag => tag.includes(query));
        
        if (query === '' || matches) {
            card.style.display = 'block';
            card.classList.remove('hidden');
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
        }
    });
    
    updateProjectsCount();
}

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }
    }
}

// Back to top button
function setupBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 18px;
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Setup profile image loading
function setupProfileImage() {
    const profileImg = document.getElementById('profile-img');
    const placeholder = document.querySelector('.profile-placeholder');
    
    if (profileImg && placeholder) {
        profileImg.addEventListener('load', function() {
            this.classList.add('loaded');
            placeholder.style.display = 'none';
        });
        
        profileImg.addEventListener('error', function() {
            // Keep placeholder visible if image fails to load
            this.style.display = 'none';
            placeholder.style.display = 'flex';
        });
        
        // Check if image is already loaded (cached)
        if (profileImg.complete && profileImg.naturalHeight !== 0) {
            profileImg.classList.add('loaded');
            placeholder.style.display = 'none';
        }
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    setupSearch();
    setupThemeToggle();
    setupBackToTop();
});

// Export functions for use in other files
window.portfolioApp = {
    filterProjects,
    searchProjects,
    loadFeaturedProjects,
    loadAllProjects,
    setupProjectFiltering,
    projects: projectsData
};
