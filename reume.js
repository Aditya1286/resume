// Typing Animation
        const typingText = document.querySelector('.typing-text');
        const words = ['Software Engineer', 'Web Developer', 'Web Designer', 'Coder', 'Script Writer'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Wait before starting to delete
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Wait before typing next word
            } else {
                setTimeout(type, isDeleting ? 100 : 150); // Typing speed
            }
        }

        // Start the typing animation
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, 1000);
        });

        // Active nav link updater
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        // Certificates Slider with Infinite Rotation
        const track = document.querySelector('.certificates-track');
        const cards = document.querySelectorAll('.certificate-card');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
    
        // Clone cards for infinite scroll
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    
        let currentIndex = 0;
        const cardWidth = cards[0].offsetWidth + 32; // Including gap
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let isDragging = false;
        let animationID = 0;
        const totalCards = cards.length;
    
        // Auto-scroll functionality
        function autoScroll() {
            currentIndex++;
            updateSliderPosition(true);
        }
    
        let autoScrollInterval = setInterval(autoScroll, 3000);
    
        function resetInterval() {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(autoScroll, 3000);
        }
    
        function updateSliderPosition(isAutoScroll = false) {
            if (currentIndex >= totalCards) {
                if (isAutoScroll) {
                    // Smooth transition to first card
                    currentIndex = 0;
                    track.style.transition = 'none';
                    currentTranslate = currentIndex * -cardWidth;
                    track.style.transform = `translateX(${currentTranslate}px)`;
                    
                    // Force reflow
                    track.offsetHeight;
                    
                    // Restore transition
                    track.style.transition = 'transform 0.5s ease';
                } else {
                    currentIndex = totalCards - 1;
                }
            } else if (currentIndex < 0) {
                currentIndex = 0;
            }
    
            currentTranslate = currentIndex * -cardWidth;
            prevTranslate = currentTranslate;
            setSliderPosition();
        }
    
        function setSliderPosition() {
            track.style.transform = `translateX(${currentTranslate}px)`;
        }
    
        // Navigation buttons
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateSliderPosition();
            resetInterval();
        });
    
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateSliderPosition();
            resetInterval();
        });
    
        // Touch events
        track.addEventListener('touchstart', dragStart);
        track.addEventListener('touchmove', drag);
        track.addEventListener('touchend', dragEnd);
    
        // Mouse events
        track.addEventListener('mousedown', dragStart);
        track.addEventListener('mousemove', drag);
        track.addEventListener('mouseup', dragEnd);
        track.addEventListener('mouseleave', dragEnd);
    
        function dragStart(e) {
            clearInterval(autoScrollInterval);
            startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
            isDragging = true;
            animationID = requestAnimationFrame(animation);
            track.style.cursor = 'grabbing';
        }
    
        function drag(e) {
            if (isDragging) {
                const currentPosition = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
                currentTranslate = prevTranslate + currentPosition - startPos;
            }
        }
    
        function dragEnd() {
            isDragging = false;
            cancelAnimationFrame(animationID);
            track.style.cursor = 'grab';
    
            const movedBy = currentTranslate - prevTranslate;
            if (Math.abs(movedBy) > 100) {
                if (movedBy < 0) {
                    currentIndex++;
                } else {
                    currentIndex--;
                }
            }
    
            updateSliderPosition();
            resetInterval();
        }
    
        function animation() {
            if (isDragging) {
                setSliderPosition();
                requestAnimationFrame(animation);
            }
        }
    
        // Reset position on window resize
        window.addEventListener('resize', () => {
            cardWidth = cards[0].offsetWidth + 32;
            updateSliderPosition();
        });
    
        // Handle smooth transition when track animation ends
        track.addEventListener('transitionend', () => {
            if (currentIndex >= totalCards) {
                track.style.transition = 'none';
                currentIndex = 0;
                currentTranslate = 0;
                prevTranslate = 0;
                setSliderPosition();
                
                // Force reflow
                track.offsetHeight;
                
                // Restore transition
                track.style.transition = 'transform 0.5s ease';
            }
        });
