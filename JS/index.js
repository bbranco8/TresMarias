// HOMEPAGE ---------------------------------------------------------------------
function setGridRows() {
    let header = document.querySelector('header');
    let grid = document.querySelector('.homepage_grid');

    let available_height = window.innerHeight - header.offsetHeight;

    let num_rows = 10;
    let gap = 10;
    let total_gap = gap * (num_rows - 1);
    let rowHeight = (available_height - total_gap) / num_rows;

    // define altura do grid e altura de cada row
    grid.style.height = available_height + 'px';
    grid.style.gridAutoRows = rowHeight + 'px';
}


/* COMPUTADOR */
let desktop_layouts = [
    // Layout 1
    [
        { colStart: 2, colEnd: 5, rowStart: 7, rowEnd: 9 },
        { colStart: 13, colEnd: 15, rowStart: 1, rowEnd: 3 },
        { colStart: 9, colEnd: 12, rowStart: 3, rowEnd: 5 },
        { colStart: 9, colEnd: 11, rowStart: 8, rowEnd: 10 },
        { colStart: 2, colEnd: 4, rowStart: 1, rowEnd: 3 }
    ],

    // Layout 2
    [
        { colStart: 3, colEnd: 6, rowStart: 1, rowEnd: 3 },
        { colStart: 10, colEnd: 14, rowStart: 7, rowEnd: 9 },
        { colStart: 10, colEnd: 12, rowStart: 2, rowEnd: 4 },
        { colStart: 5, colEnd: 7, rowStart: 5, rowEnd: 7 },
        { colStart: 1, colEnd: 3, rowStart: 8, rowEnd: 10 },
    ],
    // Layout 3
    [
        { colStart: 2, colEnd: 5, rowStart: 1, rowEnd: 3 },
        { colStart: 3, colEnd: 5, rowStart: 8, rowEnd: 10 },
        { colStart: 11, colEnd: 13, rowStart: 1, rowEnd: 3 },
        { colStart: 12, colEnd: 15, rowStart: 6, rowEnd: 8 },
        { colStart: 7, colEnd: 9, rowStart: 5, rowEnd: 7 }
    ],
    // Layout 4
    [
        { colStart: 1, colEnd: 4, rowStart: 4, rowEnd: 6 },
        { colStart: 5, colEnd: 8, rowStart: 1, rowEnd: 3 },
        { colStart: 6, colEnd: 8, rowStart: 8, rowEnd: 10 },
        { colStart: 10, colEnd: 12, rowStart: 2, rowEnd: 4 },
        { colStart: 13, colEnd: 15, rowStart: 5, rowEnd: 7 }
    ]
];


/* MOBILE */
let mobile_layouts = [
    // Layout 1
    [
        { colStart: 1, colEnd: 4, rowStart: 1, rowEnd: 3 },
        { colStart: 5, colEnd: 7, rowStart: 3, rowEnd: 4 },
        { colStart: 2, colEnd: 5, rowStart: 4, rowEnd: 6 },
        { colStart: 4, colEnd: 7, rowStart: 8, rowEnd: 10 },
        { colStart: 1, colEnd: 3, rowStart: 7, rowEnd: 9 }
    ],
];


function isMobile() {
    return window.innerWidth <= 890;
}


let last_layout_index = -1;

function applyRandomLayout() {
    let images = document.querySelectorAll('.homepage_grid img');
    let layouts = isMobile() ? mobile_layouts : desktop_layouts;

    let layout_index;
    do {
        layout_index = Math.floor(Math.random() * layouts.length);
    } while (layout_index === last_layout_index && layouts.length > 1);

    last_layout_index = layout_index;
    let layout = layouts[layout_index];

    images.forEach((img, index) => {
        let pos = layout[index];
        if (!pos) return;

        img.style.gridColumnStart = pos.colStart;
        img.style.gridColumnEnd = pos.colEnd;
        img.style.gridRowStart = pos.rowStart;
        img.style.gridRowEnd = pos.rowEnd;
    });
}



let section = document.querySelector('main section');
function initGrid() {
    setGridRows();
    applyRandomLayout();
}

// Atualiza layout ao clicar na section
let section_imgs = document.querySelector('#homepage');
section_imgs.addEventListener('click', () => {
    applyRandomLayout();
});

// Inicializa ao carregar a página
window.addEventListener('DOMContentLoaded', initGrid);

// Atualiza altura do grid se a tela mudar
window.addEventListener('resize', () => {
    setGridRows();
    applyRandomLayout();
});



// MARIAS -------------------------------------------------------------
let mariaItems = document.querySelectorAll('.maria_item');

let legendasAlteradas = [
    "Maria, <br> juíza",
    "Maria, <br> empresária",
    "Maria, <br> CEO",
    "Maria, <br> mulher forte",
    "Maria, <br> designer",
    "Maria, <br> investigadora",
    "Maria, <br> imparável",
    "Maria, <br> engenheira",
    "Maria, <br> cientista",
    "Maria, <br> dona de si",
    "Maria, <br> advogada",
    "Maria, <br> respeitada",
    "Maria, <br> cirurgiã",
    "Maria, <br> estudante",
];

mariaItems.forEach((item, index) => {
    let img = item.querySelector('img');
    let legenda = item.querySelector('.legenda.bold');
    let texto_original = legenda.innerHTML;

    img.addEventListener('mouseover', () => {
        legenda.innerHTML = legendasAlteradas[index] || texto_original;
    });

    img.addEventListener('mouseout', () => {
        legenda.innerHTML = texto_original;
    });
});


/* CULTURA ----------------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const secoesRosas = document.querySelectorAll(".seccao_rosa");
    const scroller = document.querySelector("main");

    if (!header || secoesRosas.length === 0 || !scroller) return;

    scroller.addEventListener("scroll", () => {
        const scrollTop = scroller.scrollTop;
        const h = header.offsetHeight;

        // Verifica se o scroll está dentro de alguma das seções rosas
        const dentroDeAlguma = Array.from(secoesRosas).some(secao => {
            const secaoTop = secao.offsetTop;
            const secaoBottom = secaoTop + secao.offsetHeight;
            return (scrollTop + h >= secaoTop && scrollTop + h < secaoBottom);
        });

        if (dentroDeAlguma) {
            header.classList.add("white_header");
        } else {
            header.classList.remove("white_header");
        }
    });

    scroller.dispatchEvent(new Event("scroll"));
});




/* LINKS MOBILE -------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = () => window.innerWidth <= 890; // mesmo breakpoint do seu site
    const links = document.querySelectorAll('a.no_mobile'); // todos os links com essa classe

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (isMobile()) {
                e.preventDefault(); // bloqueia o clique em mobile
                console.log('Link bloqueado em mobile:', link.href);
            }
        });
    });
});
