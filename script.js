document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // CV download functionality
    window.downloadCV = async () => {
        try {
            const response = await fetch('data/cv.json');
            const data = await response.json();
            const link = document.createElement('a');
            link.href = data.cvUrl;
            link.download = 'Tharan_Suresh_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading CV:', error);
            alert('Sorry, the CV is currently unavailable. Please try again later.');
        }
    };
});
