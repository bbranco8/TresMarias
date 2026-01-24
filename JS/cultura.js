/* HOVER ------------------------------------------------ */
/* FILME */
let imagens_filme = document.querySelectorAll('.artigo_filme img');

imagens_filme.forEach(img => {
  let original = img.src;
  let hover = img.dataset.hover;

  img.addEventListener('mouseenter', () => {
    img.src = hover;
  });

  img.addEventListener('mouseleave', () => {
    img.src = original;
  });
});

/* MUSICA */
let imagens_musica = document.querySelectorAll('.artigo_musica img');

imagens_musica.forEach(img => {
  let original = img.src;
  let hover = img.dataset.hover;

  img.addEventListener('mouseenter', () => {
    img.src = hover;
  });

  img.addEventListener('mouseleave', () => {
    img.src = original;
  });
});



/* DESIGN BACKGROUND -------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('header');
  let design_section = document.getElementById('design');
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