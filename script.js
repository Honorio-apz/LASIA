
    // --- Configuración de Traducciones ---
    const translations = {
        en: {
            "hero-title": "LATAM School of Artificial Intelligence 2025",
            "hero-subtitle": "Powered and Co-located by SIMBig",
            "days": "Days",
            "hours": "Hours",
            "minutes": "Minutes",
            "seconds": "Seconds",
            "about-title": "About LASIA",
            "about-description": "The Latin American School of Artificial Intelligence (LASIA) is an intensive educational program designed to advance AI knowledge and research in Latin America. Our mission is to provide high-quality training, foster collaboration among researchers, and promote the development of AI solutions for regional challenges.",
            "location-title": "Location & Registration",
            "location-description": "The school will take place at FISI-UNMSM in Lima, Peru. Registration is required for participation.",
            "audience-title": "Target Audience",
            "audience-description": "Students, researchers, and professionals interested in artificial intelligence and machine learning from Latin America.",
            "requirements-title": "Requirements",
            "requirements-description": "Basic knowledge of programming or mathematics. Laptop required for hands-on sessions.",
            "organization-title": "Organization",
            "organization-description": "Organized by leading AI researchers and institutions from Latin America in collaboration with SIMBig.",
            "speakers-title": "Keynote Speakers",
            "faq-title": "Frequently Asked Questions",
            "faq1-q": "What is the LATAM School of AI?",
            "faq1-a": "It is an artificial intelligence school aimed at students and professionals from Latin America, with intensive sessions and conferences.",
            "faq2-q": "Where will it take place?",
            "faq2-a": "At the Faculty of Systems Engineering (FISI) of the Universidad Nacional Mayor de San Marcos (UNMSM), Lima, Peru.",
            "faq3-q": "What are the requirements?",
            "faq3-a": "Basic knowledge of programming or mathematics and a laptop for hands-on sessions.",
            "faq4-q": "Will there be a certificate?",
            "faq4-a": "Yes, a participation certificate will be awarded to those who attend all sessions.",
            "faq5-q": "What language will the sessions be in?",
            "faq5-a": "Sessions will be conducted in English and Spanish, depending on the speaker.",
            "faq6-q": "Will meals be provided?",
            "faq6-a": "Coffee breaks and lunch will be provided during the event days.",
            "organizers-title": "Organizers",
            "footer-title": "LATAM School of AI 2025",
            "footer-description": "Advancing AI knowledge and research in Latin America through high-quality training and collaboration.",
            "contact-title": "Contact Information",
            "contact-description": "For more information about the LATAM School of AI 2025",
            "location-footer-title": "Location",
            "socials-footer-title": "Follow Us",
            "venue-title": "Venue",
            "sponsors-title": "Sponsors" // Added translation for sponsors
        },
        es: {
            "hero-title": "Escuela Latinoamericana de Inteligencia Artificial 2025",
            "hero-subtitle": "Impulsado y Co-ubicado por SIMBig",
            "days": "Días",
            "hours": "Horas",
            "minutes": "Minutos",
            "seconds": "Segundos",
            "about-title": "Acerca de LASIA",
            "about-description": "La Escuela Latinoamericana de Inteligencia Artificial (LASIA) es un programa educativo intensivo diseñado para avanzar el conocimiento y la investigación en IA en América Latina. Nuestra misión es proporcionar capacitación de alta calidad, fomentar la colaboración entre investigadores y promover el desarrollo de soluciones de IA para los desafíos regionales.",
            "location-title": "Ubicación y Registro",
            "location-description": "La escuela tendrá lugar en la FISI-UNMSM en Lima, Perú. Es necesario registrarse para participar.",
            "audience-title": "Público Objetivo",
            "audience-description": "Estudiantes, investigadores y profesionales interesados en inteligencia artificial y aprendizaje automático de América Latina.",
            "requirements-title": "Requisitos",
            "requirements-description": "Conocimientos básicos de programación o matemáticas. Se requiere computadora portátil para las sesiones prácticas.",
            "organization-title": "Organización",
            "organization-description": "Organizado por destacados investigadores e instituciones de IA de América Latina en colaboración con SIMBig.",
            "speakers-title": "Ponentes Principales",
            "faq-title": "Preguntas Frecuentes",
            "faq1-q": "¿Qué es la Escuela Latinoamericana de IA?",
            "faq1-a": "Es una escuela de inteligencia artificial dirigida a estudiantes y profesionales de América Latina, con sesiones intensivas y conferencias.",
            "faq2-q": "¿Dónde se llevará a cabo?",
            "faq2-a": "En la Facultad de Ingeniería de Sistemas e Informática (FISI) de la Universidad Nacional Mayor de San Marcos (UNMSM), Lima, Perú.",
            "faq3-q": "¿Cuáles son los requisitos?",
            "faq3-a": "Conocimientos básicos de programación o matemáticas y una computadora portátil para las sesiones prácticas.",
            "faq4-q": "¿Habrá certificado?",
            "faq4-a": "Sí, se otorgará un certificado de participación a quienes asistan a todas las sesiones.",
            "faq5-q": "¿En qué idioma serán las sesiones?",
            "faq5-a": "Las sesiones se llevarán a cabo en inglés y español, dependiendo del ponente.",
            "faq6-q": "¿Se proporcionarán comidas?",
            "faq6-a": "Se ofrecerán pausas para café y almuerzo durante los días del evento.",
            "organizers-title": "Organizadores",
            "footer-title": "Escuela Latinoamericana de IA 2025",
            "footer-description": "Avanzando el conocimiento y la investigación en IA en América Latina a través de capacitación de alta calidad y colaboración.",
            "contact-title": "Información de Contacto",
            "contact-description": "Para más información sobre la Escuela Latinoamericana de IA 2025",
            "location-footer-title": "Ubicación",
            "socials-footer-title": "Síguenos",
            "venue-title": "Sede",
            "sponsors-title": "Patrocinadores" // Added translation for sponsors
        }
    };

    let currentLanguage = 'en'; // Idioma inicial

    // --- Funcionalidad del Traductor ---
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLanguage][key]) {
                element.innerHTML = translations[currentLanguage][key];
            }
        });
        document.querySelector('.lang-switch').innerHTML = currentLanguage === 'en' ? '🇪🇸 ES' : '🇬🇧 EN';
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        applyTranslations();
        // Actualizar el contador regresivo al cambiar de idioma para que muestre el texto correcto
        updateCountdown(); 
    }

    // --- Funcionalidad del Contador Regresivo ---
    const countdownDate = new Date("Oct 29, 2025 09:00:00").getTime(); // Fecha y hora del evento

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            // Puedes añadir un mensaje para indicar que el evento ha comenzado
            // Por ejemplo: document.getElementById("countdown-message").innerHTML = "¡Evento en curso!";
        }
    }

    // Ejecutar el contador cada segundo
    const x = setInterval(updateCountdown, 1000);


    // --- Funcionalidad del Carrusel (Sección Venue) ---
    function setupCarousel() {
        const carouselTrack = document.querySelector('.carousel-track');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.carousel-button.prev');
        const nextButton = document.querySelector('.carousel-button.next');
        const indicatorsContainer = document.querySelector('.carousel-indicators');
        const totalItems = carouselItems.length;
        let currentIndex = 0;
        let slideInterval; // Variable para el temporizador de auto-avance

        // Si no hay elementos de carrusel, sal de la función
        if (!carouselTrack || totalItems === 0) return;

        // Crea los puntos indicadores
        indicatorsContainer.innerHTML = ''; // Limpiar por si se renderiza dos veces
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.dataset.index = i;
            indicatorsContainer.appendChild(dot);
        }

        const indicatorDots = document.querySelectorAll('.indicator-dot');

        // Función para mover el carrusel
        const moveToSlide = (index) => {
            currentIndex = index;
            // Manejar desbordamiento del índice
            if (currentIndex >= totalItems) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = totalItems - 1;
            }

            const itemWidth = carouselItems[0].clientWidth;
            carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

            // Actualizar el estado de los indicadores
            indicatorDots.forEach(dot => dot.classList.remove('active'));
            indicatorDots[currentIndex].classList.add('active');
        };

        // Event Listeners para los botones de navegación
        prevButton.addEventListener('click', () => {
            moveToSlide(currentIndex - 1);
            resetAutoSlide();
        });

        nextButton.addEventListener('click', () => {
            moveToSlide(currentIndex + 1);
            resetAutoSlide();
        });

        // Event Listeners para los puntos indicadores
        indicatorsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('indicator-dot')) {
                const index = parseInt(e.target.dataset.index);
                moveToSlide(index);
                resetAutoSlide();
            }
        });

        // Auto-avance del carrusel
        const startAutoSlide = () => {
            slideInterval = setInterval(() => {
                moveToSlide(currentIndex + 1);
            }, 5000); // Cambia de imagen cada 5 segundos
        };

        const resetAutoSlide = () => {
            clearInterval(slideInterval);
            startAutoSlide();
        };

        // Inicia el carrusel y el auto-avance
        startAutoSlide();

        // Ajustar el carrusel al redimensionar la ventana
        window.addEventListener('resize', () => {
            moveToSlide(currentIndex); // Ajusta la posición actual al nuevo tamaño
        });
    }

    // --- Animaciones Fade-in al Hacer Scroll ---
    function setupFadeInAnimations() {
        const faders = document.querySelectorAll('.fade-in');
        const appearOptions = {
            threshold: 0.1, // Elemento visible en un 10%
            rootMargin: "0px 0px -50px 0px" // Inicia 50px antes del final del viewport
        };

        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Deja de observar una vez visible
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // --- Ejecutar todo al cargar el DOM ---
    document.addEventListener('DOMContentLoaded', () => {
        applyTranslations(); // Aplica las traducciones iniciales
        updateCountdown();   // Inicializa el contador
        setupCarousel();     // Configura el carrusel
        setupFadeInAnimations(); // Configura las animaciones
        
        // Establecer el año actual en el footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
    });

    
    // --- Funcionalidad del Menú Hamburguesa ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) { // Asegurarse de que los elementos existan
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú si se hace clic en un enlace (solo en móvil)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) { // Solo si estamos en vista móvil
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }