// 9 linhas, 14 colunas 
function setGridRows() {
    let header = document.querySelector('header');
    let grid = document.querySelector('.homepage_grid');

    let available_height = window.innerHeight - header.offsetHeight;

    let num_rows = 10;       // quantas linhas você quer
    let gap = 10;          // gap do grid em px
    let total_gap = gap * (num_rows - 1); // espaço total ocupado pelos gaps
    let rowHeight = (available_height - total_gap) / num_rows;

    // define altura do grid e altura de cada row
    grid.style.height = available_height + 'px';
    grid.style.gridAutoRows = rowHeight + 'px';
}



let layouts = [
    // Layout 1
    [
        { colStart: 2, colEnd: 4, rowStart: 1, rowEnd: 3 },
        { colStart: 2, colEnd: 5, rowStart: 7, rowEnd: 9 },
        { colStart: 9, colEnd: 11, rowStart: 8, rowEnd: 10 },
        { colStart: 9, colEnd: 12, rowStart: 3, rowEnd: 5 },
        { colStart: 13, colEnd: 15, rowStart: 1, rowEnd: 3 }
    ],
    
    // Layout 2
    [
        { colStart: 1, colEnd: 3, rowStart: 8, rowEnd: 10 },
        { colStart: 3, colEnd: 6, rowStart: 1, rowEnd: 3 },
        { colStart: 5, colEnd: 7, rowStart: 5, rowEnd: 7 },
        { colStart: 10, colEnd: 12, rowStart: 3, rowEnd: 5 },
        { colStart: 10, colEnd: 14, rowStart: 7, rowEnd: 9 }
    ], 
    // Layout 3
    [
        { colStart: 2, colEnd: 5, rowStart: 1, rowEnd: 3 },
        { colStart: 3, colEnd: 5, rowStart: 8, rowEnd: 10 },
        { colStart: 7, colEnd: 9, rowStart: 5, rowEnd: 7 },
        { colStart: 11, colEnd: 13, rowStart: 1, rowEnd: 3 },
        { colStart: 12, colEnd: 15, rowStart: 6, rowEnd: 8 }
    ],
    // Layout 4
    [
    { colStart: 1, colEnd: 4, rowStart: 4, rowEnd: 6 },
    { colStart: 5, colEnd: 8, rowStart: 1, rowEnd: 3 },
    { colStart: 6, colEnd: 8, rowStart: 8, rowEnd: 10 },
    { colStart: 9, colEnd: 11, rowStart: 3, rowEnd: 5 },
    { colStart: 13, colEnd: 15, rowStart: 5, rowEnd: 7 }
    ] 
];

let last_layout_index = -1; // armazena o último layout usado

function applyRandomLayout() {
    let images = document.querySelectorAll('.homepage_grid img');

    let layout_index;
    do {
        layout_index = Math.floor(Math.random() * layouts.length);
    } while (layout_index === last_layout_index && layouts.length > 1);

    last_layout_index = layout_index;
    let layout = layouts[layout_index];

    images.forEach((img, index) => {
        let pos = layout[index];
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