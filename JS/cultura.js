let imagens = document.querySelectorAll('.artigo_filme img');

  imagens.forEach(img => {
    let original = img.src;
    let hover = img.dataset.hover;

    img.addEventListener('mouseenter', () => {
      img.src = hover;
    });

    img.addEventListener('mouseleave', () => {
      img.src = original;
    });
  });