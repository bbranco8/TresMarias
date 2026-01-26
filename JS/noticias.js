/* DESIGUALDADE NA ARTE BACKGROUND -------------------------------------------------------- */
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


/* LINKS VIOLENCIA -------------------------------------------------------------------------- */
console.log("JS carregado");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".mais").forEach(botao => {
        botao.addEventListener("click", () => {
            let artigo = botao.closest("article");
            let links = artigo.querySelector(".conteudo_violencia div");

            links.classList.toggle("mostrar");

            botao.textContent = links.classList.contains("mostrar")
                ? "Ver menos —"
                : "Ver mais +";
        });
    });
});



/* LINKS DESIGUALDADE -------------------------------------------------------------------------- */
console.log("JS carregado");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".mais").forEach(botao => {
        botao.addEventListener("click", () => {
            let artigo = botao.closest("article");
            let links = artigo.querySelector(".conteudo_desigualdade div");

            links.classList.toggle("mostrar");

            botao.textContent = links.classList.contains("mostrar")
                ? "Ver menos —"
                : "Ver mais +";
        });
    });
});


/* LINKS CONQUISTAS -------------------------------------------------------------------------- */
console.log("JS carregado");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".mais").forEach(botao => {
        botao.addEventListener("click", () => {
            let artigo = botao.closest("article");
            let links = artigo.querySelector(".conteudo_conquistas div");

            links.classList.toggle("mostrar");

            botao.textContent = links.classList.contains("mostrar")
                ? "Ver menos —"
                : "Ver mais +";
        });
    });
});
