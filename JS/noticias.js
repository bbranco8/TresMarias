/* DESIGUALDADE NA ARTE BACKGROUND -------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector("header");
    let secaoRosa = document.querySelector(".seccao_rosa");
    let scroller = document.querySelector("main");

    if (!header || !secaoRosa || !scroller) return;

    scroller.addEventListener("scroll", () => {
        let scrollTop = scroller.scrollTop;
        let secaoTop = secaoRosa.offsetTop;
        let secaoBottom = secaoTop + secaoRosa.offsetHeight;

        let h = header.offsetHeight;

        // Verifica se o topo do header "toca" a secção rosa dentro do main
        if (scrollTop + h >= secaoTop && scrollTop + h < secaoBottom) {
            header.classList.add("white_header");
        } else {
            header.classList.remove("white_header");
        }
    });

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
