/* DESIGUALDADE NA ARTE BACKGROUND -------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');
    let design_section = document.getElementById('desigualdade_arte');
    let logo = document.getElementById('favicon');

    let original_logo = '../LOGO/3m_logo.png';
    let white_logo = '../LOGO/3m_logo_white.png';

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('white_header');
                logo.src = white_logo;
            } else {
                header.classList.remove('white_header');
                logo.src = original_logo;
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.9
    });

    observer.observe(design_section);
});