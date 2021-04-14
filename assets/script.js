let icon = document.getElementById('icon-theme');
let logo = document.getElementById('logo');
let logo_contato = document.getElementById('logo-contato');
let btn_fechar_pp = document.getElementById('btn-fechar-pp');

// Button NavBar
let navItems = document.getElementById('navItems');
let closeButtonMenu = document.getElementById('closeButtonMenu');
let menuButton = document.getElementById('menuButton');

function fundoAnimado() {
    const rows = 7, columns = 10;
    for (let l = 0; l < rows; l++) {
        for (let c = 0; c < columns; c++) {
            const div = document.createElement('div');
            div.className = `col-${c + 1}`;
            document.querySelector(".bg-animated").appendChild(div);
        }
    }
}
fundoAnimado();
// Menu da NavBar no responsivo
menuButton.onclick = function () {
    navItems.style.right = '0';
    navItems.style.boxShadow = '0 0 10px var(--shadow-color), 0 0 20px var(--shadow-color), 0 0 50px var(--shadow-color)';
    closeButtonMenu.style.color = 'var(--secundary-color)';

    // Fechar o menu ao clicar em algum item da navbar
    navItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('navContent')) {
            navItems.style.right = '-300px'
        };
    });
}
closeButtonMenu.onclick = function () {
    navItems.style.right = '-300px'
    navItems.style.boxShadow = '0 0 0, 0 0 0, 0 0 0';
}

// Aplicando o tema do site
icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'assets/img/sun.png'
        logo.src = 'assets/img/logo.png'
        logo_contato.src = '..assets/img/logo.png'
        menuButton.style.color = 'var(--secundary-color)'
    }
    else {
        icon.src = 'assets/img/moon.png'
        logo.src = 'assets/img/logo-dark.png'
        logo_contato.src = '..assets/img/logo-dark.png'
    }
}
// Função para abrir qualquer tipo de janela
function toggleButton(classe) {
    document.querySelector(classe).classList.toggle('open');

    // Animação de rolar a tela é retirada quando botão entrar em contato é assionado
    document.body.classList.toggle('hiddle-scrolling');
}


// Abrindo formulário Contato
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('botao-formulario-contato')) {

        toggleButton('.contato-form')

        // Escondendo scrollbar ao entrar no formulário, e voltando assim que sair.
        if (document.querySelector('.contato-form').classList.contains('open')) {
            document.body.style.overflow = 'hidden';
            document.querySelector()
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
});


(() => {
    const sobreMim = document.querySelector('.sobre-mim'),
        botoesSobreMim = document.querySelector('.sobre-botoes');

    // Botões educação e Experiencia.
    botoesSobreMim.addEventListener("click", (event) => {
        const doc = event.target.classList;
        // Se caso o usuário clicar em um BOTÃO NÃO selecionado
        if (doc.contains('escolaridade') && !doc.contains('active')) {
            console.log('clico no btoao')
            // Pegando o nome do botão que está na classe
            const target = event.target.getAttribute("data-target");
            console.log(target);

            // Retirando atributo Active do botão ativo no momento
            botoesSobreMim.querySelector('.active').classList.remove('active');

            event.target.classList.add('active');

            // Tirando o active da classe que estiver com active, por exemplo, por padrão
            // o botão que defini com o active ativo foi: educacao(linha 169)
            // OBS: O nome do data-target do botão precisa ser o mesmo da classe que contem as informações
            sobreMim.querySelector('.tab-content.active').classList.remove('active');

            // Aplicando o mesmo conceito acima, porém adicionando o atributo active na classe do botão selecionado 
            // OBS: O nome do data-target do botão precisa ser o mesmo da classe que contem as informações
            sobreMim.querySelector(target).classList.add('active');
        }
    });
})();

// Abrir detalhes do portifolio por uma janela popup
let portifolioItemIndex;
let portifolioItems = document.querySelectorAll('.portifolio-item');

document.addEventListener('click', (event) => {
    if (event.target.closest('.portifolio-item')) {
        const currentItem = event.target.closest('.portifolio-item');
        portifolioItemIndex = Array.from(portifolioItems).indexOf(currentItem);
        toggleButton('.portifolio-popup');
        portifolioDetails();
        document.body.style.overflow = 'hidden';
    }
});
document.querySelector('.btn-fechar-pp').addEventListener('click', (event) => {
    toggleButton('.portifolio-popup');
    document.body.style.overflow = 'auto';
});



// Pegando informações de cada projeto 
function portifolioDetails() {
    // Pegando imagem de capa
    document.querySelector('.pp-capa img').src =
        portifolioItems[portifolioItemIndex].querySelector('img').src;

    // Pegando Titulo do projeto
    document.querySelector('.pp-header h2').innerHTML =
        portifolioItems[portifolioItemIndex].querySelector('.portifolio-item-titulo').innerHTML;

    // Pegando Titulo do projeto
    document.querySelector('.pp-body').innerHTML =
        portifolioItems[portifolioItemIndex].querySelector('.portifolio-item-detalhes').innerHTML;

        document.querySelector('.pp-counter').innerHTML =
        `<h3> <span> ${portifolioItemIndex + 1} de ${portifolioItems.length} </span> </h3> `
    console.log(portifolioItems[portifolioItemIndex]);
}



// Esmaecer itens do main ao rolar a página
$(window).scroll(function () {
    $('.main').css('opacity', 1.5 - $(window).scrollTop() / 400);
});