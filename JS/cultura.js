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