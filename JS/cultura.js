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
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const secaoRosa = document.querySelector(".seccao_rosa");
  const scroller = document.querySelector("main");

  if (!header || !secaoRosa || !scroller) return;

  scroller.addEventListener("scroll", () => {
    // scrollTop do main (quanto o main scrollou)
    const scrollTop = scroller.scrollTop;

    // posição da secao dentro do main
    const secaoTop = secaoRosa.offsetTop;
    const secaoBottom = secaoTop + secaoRosa.offsetHeight;

    const h = header.offsetHeight;

    // Verifica se o topo do header "toca" a secção rosa dentro do main
    if (scrollTop + h >= secaoTop && scrollTop + h < secaoBottom) {
      header.classList.add("white_header");
    } else {
      header.classList.remove("white_header");
    }
  });

  // Executa uma vez no load para setar a classe certa inicialmente
  scroller.dispatchEvent(new Event('scroll'));
});