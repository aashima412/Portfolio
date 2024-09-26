document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    const externalLinks = {
        '.fa-github': 'https://github.com/aashima412',
        
        '.fa-linkedin': 'https://www.linkedin.com/in/aashimadutta/',
        '.fa-instagram': 'https://www.instagram.com/____aashi__ma__2827/'
    };
    for (const [iconClass, url] of Object.entries(externalLinks)) {
        const iconElement = document.querySelector(iconClass);
        if (iconElement) {
            iconElement.addEventListener('click', function(event) {
                event.preventDefault();
                window.open(url, '_blank'); 
            });
        }
    }
  });
  
