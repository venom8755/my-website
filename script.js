// ==============================
// MOBILE NAVIGATION
// ==============================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('open');
    });
});

// ==============================
// ACTIVE LINK HIGHLIGHTING
// ==============================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// ==============================
// SCROLL REVEAL ANIMATION
// ==============================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on page load
revealOnScroll();

// ==============================
// DYNAMIC PROJECTS GRID
// ==============================
const projectsData = [
    {
        title: 'Dhanvantari Clinic Website',
        tags: ['Website', 'Responsive', 'Healthcare'],
        description: '5-page responsive website for a pediatric clinic in Dehradun, built to reflect the clinic\'s brand identity and improve local visibility.',
        link: '#',
        status: 'completed',
        icon: 'fa-stethoscope'
    },
    {
        title: 'Doon Musicals - SEO Audit',
        tags: ['Technical SEO', 'On-Page SEO', 'Audit'],
        description: 'Full on-page, technical, off-page SEO and performance audit for a musical instruments e-commerce store to boost organic traffic.',
        link: '#',
        status: 'completed',
        icon: 'fa-magnifying-glass-chart'
    },
    {
        title: 'Om RO Aqua Solution',
        tags: ['Local SEO', 'GMB', 'Citations'],
        description: 'Google Maps and GMB citation optimization for a local RO water purifier service business in Haridwar, increasing local search leads.',
        link: '#',
        status: 'completed',
        icon: 'fa-map-location-dot'
    },
    {
        title: 'Coming Soon',
        tags: ['Web Dev', 'SEO'],
        description: 'New digital growth project currently in development. Stay tuned for case study details.',
        link: '#',
        status: 'coming-soon',
        icon: 'fa-hourglass-half'
    },
    {
        title: 'Coming Soon',
        tags: ['Ads', 'Analytics'],
        description: 'New digital growth project currently in development. Stay tuned for case study details.',
        link: '#',
        status: 'coming-soon',
        icon: 'fa-hourglass-half'
    }
];

const projectsGrid = document.getElementById('projectsGrid');

if (projectsGrid) {
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card', 'reveal');
        // Add slight delay to cards based on index for staggered reveal
        card.style.transitionDelay = `${index * 0.1}s`;
        
        let tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        let btnHtml = project.status === 'completed' 
            ? `<a href="${project.link}" class="btn btn-outline btn-small">View Project <i class="fa-solid fa-arrow-right"></i></a>` 
            : `<span class="btn-disabled"><i class="fa-solid fa-lock"></i> In Progress</span>`;
        
        card.innerHTML = `
            <div class="project-img-placeholder">
                <i class="fa-solid ${project.icon}"></i>
            </div>
            <div class="project-content">
                <div class="project-tags">${tagsHtml}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="mt-2">
                    ${btnHtml}
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// ==============================
// UPDATE FOOTER YEAR
// ==============================
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}
