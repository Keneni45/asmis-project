// Main JavaScript for African Influencer Hub
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initTypewriter();
    initTextSplitting();
    initParticles();
    initCarousels();
    initScrollAnimations();
    initNavigation();
    initMobileMenu();
    initModals();
    initFilters();
    
    // Typewriter effect for hero section
    function initTypewriter() {
        const typed = new Typed('#typed-text', {
            strings: [
                'Connecting Brands with African Voices',
                'Amplifying Authentic Stories',
                'Building Bridges Across Cultures',
                'Driving Digital Innovation in Africa'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Text splitting animation for hero title
    function initTextSplitting() {
        Splitting();
        
        const titleChars = document.querySelectorAll('[data-splitting] .char');
        
        anime({
            targets: titleChars,
            opacity: [0, 1],
            translateY: [50, 0],
            rotateZ: [10, 0],
            duration: 800,
            delay: anime.stagger(50),
            easing: 'easeOutExpo'
        });
    }
    
    // Floating particles animation
    function initParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 40;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            
            particlesContainer.appendChild(particle);
        }
        
        // Animate particles on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const particles = document.querySelectorAll('.particle');
            
            particles.forEach((particle, index) => {
                const speed = (index % 3 + 1) * 0.5;
                particle.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // Initialize carousels
    function initCarousels() {
        // Speakers carousel
        const speakersCarousel = new Splide('#speakers-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1,
                },
                1024: {
                    perPage: 2,
                }
            }
        });
        speakersCarousel.mount();
        
        // Partners carousel
        const partnersCarousel = new Splide('#partners-carousel', {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 2,
                },
                1024: {
                    perPage: 3,
                }
            }
        });
        partnersCarousel.mount();
    }
    
    // Scroll-triggered animations
    function initScrollAnimations() {
        // Animate service cards
        const serviceCards = document.querySelectorAll('.service-card');
        
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        scale: [0.9, 1],
                        duration: 800,
                        delay: index * 100,
                        easing: 'easeOutExpo'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        serviceCards.forEach(card => observer.observe(card));
        
        // Animate glass elements on scroll
        const glassElements = document.querySelectorAll('.glass, .glass-dark');
        
        glassElements.forEach((element, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            opacity: [0.7, 1],
                            scale: [0.95, 1],
                            duration: 600,
                            easing: 'easeOutQuad'
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(element);
        });
    }
    
    // Navigation functionality
    function initNavigation() {
        const nav = document.querySelector('nav');
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                nav.style.background = 'rgba(26, 29, 41, 0.9)';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.background = 'transparent';
                nav.style.backdropFilter = 'none';
            }
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    // Close mobile menu if open
                    closeMobileMenu();
                    
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Mobile Menu Functionality
    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        
        function toggleMobileMenu() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                // Animate menu items
                const menuItems = mobileMenu.querySelectorAll('.nav-link');
                anime({
                    targets: menuItems,
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    duration: 400,
                    delay: anime.stagger(100),
                    easing: 'easeOutQuad'
                });
            }
        }
        
        function closeMobileMenu() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
        
        // Hamburger click event
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on window resize if going to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
        
        // Close menu on scroll
        window.addEventListener('scroll', function() {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Make functions globally available
        window.closeMobileMenu = closeMobileMenu;
    }
    
    // Modal functionality
    function initModals() {
        // Speaker modal
        const speakerModal = document.getElementById('speaker-modal');
        const speakerModalTitle = document.getElementById('speaker-modal-title');
        const speakerModalBody = document.getElementById('speaker-modal-body');
        const closeSpeakerModal = document.getElementById('close-speaker-modal');
        
        const speakerData = {
            'amara-ojemba': {
                name: 'Amara Ojemba',
                title: 'Digital Marketing Strategist',
                image: 'https://kimi-web-img.moonshot.cn/img/blacknet.co.uk/646d9592b5b12706a24a9b4164d9c311286f311f.jpg',
                bio: 'Amara Ojemba is Nigeria\'s leading digital marketing strategist with over 8 years of experience in social media marketing. She has worked with over 200 brands across Africa, helping them achieve an average engagement rate increase of 340%.',
                expertise: ['Social Media Strategy', 'Brand Development', 'Content Marketing', 'Influencer Relations'],
                followers: '2.5M+',
                location: 'Lagos, Nigeria',
                topics: ['Digital Marketing in Africa', 'Building Authentic Brands', 'Social Media Trends', 'Influencer Partnerships']
            },
            'kennedy-kimani': {
                name: 'Kennedy Kimani',
                title: 'Tech Innovation Speaker',
                image: 'https://kimi-web-img.moonshot.cn/img/businessafricaonline.com/31d96a970a8cc19fdfeb00abae3cc5af9ab4c990.jpg',
                bio: 'Kennedy Kimani is Kenya\'s premier tech influencer and innovation advocate. He bridges the gap between African innovation and global opportunities, with a focus on fintech and digital transformation.',
                expertise: ['Fintech Innovation', 'Digital Transformation', 'Tech Entrepreneurship', 'African Innovation'],
                followers: '1.8M+',
                location: 'Nairobi, Kenya',
                topics: ['African Tech Revolution', 'Fintech Innovation', 'Digital Inclusion', 'Startup Ecosystems']
            },
            'zola-madikizela': {
                name: 'Zola Madikizela',
                title: 'Entrepreneurship Advocate',
                image: 'https://kimi-web-img.moonshot.cn/img/www.theafricaceoforum.com/2a6998d4894e98fcfc289a9f241584cdab2ba26d.jpg',
                bio: 'Zola Madikizela is South Africa\'s leading entrepreneurship advocate, empowering African entrepreneurs through digital platforms and mentorship programs.',
                expertise: ['Entrepreneurship', 'Business Strategy', 'Mentorship', 'Economic Development'],
                followers: '1.2M+',
                location: 'Johannesburg, South Africa',
                topics: ['African Entrepreneurship', 'Business Growth Strategies', 'Mentorship Programs', 'Economic Empowerment']
            },
            'fatima-al-hassan': {
                name: 'Fatima Al-Hassan',
                title: 'Content Creation Expert',
                image: 'https://kimi-web-img.moonshot.cn/img/globalconference.ca/6ee91f707939bcc56693db2adee491deb8fc521b.jpg',
                bio: 'Fatima Al-Hassan is Ghana\'s content creation expert, specializing in authentic African storytelling for global brands. She has collaborated with over 150 international brands.',
                expertise: ['Content Strategy', 'Brand Storytelling', 'Cultural Marketing', 'Creative Direction'],
                followers: '3.1M+',
                location: 'Accra, Ghana',
                topics: ['Authentic African Storytelling', 'Content Marketing', 'Brand Collaboration', 'Cultural Authenticity']
            }
        };
        
        // Open speaker modal
        document.querySelectorAll('.speaker-card').forEach(card => {
            card.addEventListener('click', function() {
                const speakerId = this.getAttribute('data-speaker');
                const speaker = speakerData[speakerId];
                
                if (speaker) {
                    speakerModalTitle.textContent = speaker.name;
                    speakerModalBody.innerHTML = `
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-80 object-cover rounded-lg mb-4">
                                <div class="text-center">
                                    <div class="text-2xl font-bold gradient-text mb-2">${speaker.followers}</div>
                                    <div class="text-gray-400">Total Followers</div>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">${speaker.title}</h3>
                                <p class="text-gray-400 mb-6">${speaker.bio}</p>
                                
                                <h4 class="font-semibold mb-3">Expertise</h4>
                                <div class="flex flex-wrap gap-2 mb-6">
                                    ${speaker.expertise.map(skill => `<span class="bg-orange-400/20 text-orange-400 px-3 py-1 rounded-full text-sm">${skill}</span>`).join('')}
                                </div>
                                
                                <h4 class="font-semibold mb-3">Speaking Topics</h4>
                                <ul class="text-gray-400 space-y-1 mb-6">
                                    ${speaker.topics.map(topic => `<li>• ${topic}</li>`).join('')}
                                </ul>
                                
                                <div class="flex items-center justify-between">
                                    <div class="text-sm text-gray-500">
                                        <div class="font-semibold">Based in</div>
                                        <div>${speaker.location}</div>
                                    </div>
                                    <button class="cta-button px-6 py-2 rounded-lg font-semibold text-white" onclick="showBookingConfirmation('${speaker.name}')">
                                        Book Speaker
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    speakerModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close speaker modal
        closeSpeakerModal.addEventListener('click', function() {
            speakerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        speakerModal.addEventListener('click', function(e) {
            if (e.target === speakerModal) {
                speakerModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Registration modal
        const registrationModal = document.getElementById('registration-modal');
        const registrationModalTitle = document.getElementById('registration-modal-title');
        const closeRegistrationModal = document.getElementById('close-registration-modal');
        const influencerFormContainer = document.getElementById('influencer-form-container');
        const brandFormContainer = document.getElementById('brand-form-container');

        window.openRegistrationModal = function(type) {
            const title = type === 'influencer' ? 'Influencer Registration' : 'Brand Partnership Registration';
            registrationModalTitle.textContent = title;

            if (type === 'influencer') {
                influencerFormContainer.style.display = 'block';
                brandFormContainer.style.display = 'none';
            } else {
                influencerFormContainer.style.display = 'none';
                brandFormContainer.style.display = 'block';
            }

            registrationModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        document.querySelectorAll('button[data-type]').forEach(button => {
            button.addEventListener('click', () => {
                const type = button.getAttribute('data-type');
                openRegistrationModal(type);
            });
        });
        
        // Close registration modal
        closeRegistrationModal.addEventListener('click', function() {
            registrationModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        registrationModal.addEventListener('click', function(e) {
            if (e.target === registrationModal) {
                registrationModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (speakerModal.classList.contains('active')) {
                    speakerModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
                if (registrationModal.classList.contains('active')) {
                    registrationModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    }
    
    // Filter functionality
    function initFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const partnerLogos = document.querySelectorAll('.partner-logo');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter partner logos
                partnerLogos.forEach(logo => {
                    const category = logo.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        anime({
                            targets: logo,
                            opacity: [0, 1],
                            scale: [0.8, 1],
                            duration: 400,
                            easing: 'easeOutQuad'
                        });
                        logo.style.display = 'block';
                    } else {
                        anime({
                            targets: logo,
                            opacity: [1, 0],
                            scale: [1, 0.8],
                            duration: 400,
                            easing: 'easeOutQuad',
                            complete: () => {
                                logo.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });
    }
    

    
    // Show booking confirmation
    window.showBookingConfirmation = function(speakerName) {
        showSuccessMessage(`Booking request sent for ${speakerName}! We will contact you within 24 hours to confirm details.`);
        document.getElementById('speaker-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    
    // Button hover effects
    document.querySelectorAll('.cta-button, .glass').forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        // Animate page entrance
        anime({
            targets: 'body',
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuad'
        });
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        // Scroll-based animations here
    }, 16); // ~60fps
    
    window.addEventListener('scroll', debouncedScrollHandler);
});
