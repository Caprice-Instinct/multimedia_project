// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.food-section, .overview, .final-presentation, .credits').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Video controls enhancement
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('loadstart', () => {
        console.log('Video loading started');
    });
    
    video.addEventListener('error', (e) => {
        console.log('Video error:', e);
        // Create fallback message
        const fallback = document.createElement('div');
        fallback.className = 'video-fallback';
        fallback.innerHTML = `
            <p>Video not available. Please add your video file to the videos folder.</p>
            <p>Expected file: ${video.querySelector('source').src}</p>
        `;
        fallback.style.cssText = `
            background: #f0f0f0;
            padding: 2rem;
            text-align: center;
            border-radius: 10px;
            color: #666;
        `;
        video.parentNode.replaceChild(fallback, video);
    });
});

// Audio controls enhancement
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('error', (e) => {
        console.log('Audio error:', e);
        const fallback = document.createElement('div');
        fallback.className = 'audio-fallback';
        fallback.innerHTML = `
            <p>Audio not available. Please add your audio file to the audio folder.</p>
            <p>Expected file: ${audio.querySelector('source').src}</p>
        `;
        fallback.style.cssText = `
            background: rgba(255,107,53,0.1);
            padding: 1rem;
            text-align: center;
            border-radius: 10px;
            color: #666;
            font-size: 0.9rem;
        `;
        audio.parentNode.replaceChild(fallback, audio);
    });
});

// Image lazy loading and error handling
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = 'image-fallback';
        fallback.innerHTML = `
            <div style="
                background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                color: #666;
                font-size: 0.9rem;
                text-align: center;
            ">
                <div>
                    <p>Image placeholder</p>
                    <p>Add: ${img.src.split('/').pop()}</p>
                </div>
            </div>
        `;
        img.parentNode.insertBefore(fallback, img);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Auto-play management for videos
const handleVideoPlayback = () => {
    const videos = document.querySelectorAll('video[autoplay]');
    videos.forEach(video => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Auto-play prevented:', error);
                // Show play button overlay
                const playButton = document.createElement('div');
                playButton.innerHTML = '▶️ Click to Play';
                playButton.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0,0,0,0.7);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 5px;
                    cursor: pointer;
                    z-index: 10;
                `;
                video.parentNode.style.position = 'relative';
                video.parentNode.appendChild(playButton);
                
                playButton.addEventListener('click', () => {
                    video.play();
                    playButton.remove();
                });
            });
        }
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleVideoPlayback();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Slideshow functionality
let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Auto-advance slideshow
setInterval(() => {
    if (document.querySelector('.slideshow-container')) {
        changeSlide(1);
    }
}, 5000);

// Print styles helper
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('video, audio').forEach(media => {
        media.style.display = 'none';
    });
});

window.addEventListener('afterprint', () => {
    document.querySelectorAll('video, audio').forEach(media => {
        media.style.display = 'block';
    });
});