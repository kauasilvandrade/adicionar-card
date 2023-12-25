// VALORES
let tituloCard = document.getElementById('tituloCard');
let corFunDoCard = document.getElementById('corFundoCard');
let corTextoCard = document.getElementById('corTextoCard');
let corBordaCard = document.getElementById('corBordaCard');

// ADICIONAR ESTILOS A LABEL
let labelCardFundo = document.getElementById('labelCardFundo');
let labelCardTexto = document.getElementById('labelCardTexto');
let labelCardBorda = document.getElementById('labelCardBorda');

corFunDoCard.addEventListener('change', function() {
    labelCardFundo.style.background = `${corFunDoCard.value}`
})
corTextoCard.addEventListener('change', function() {
    labelCardTexto.style.background = `${corTextoCard.value}`
})
corBordaCard.addEventListener('change', function() {
    labelCardBorda.style.background = `${corBordaCard.value}`
})

// LISTA
let listaCard = document.createElement('ul');
listaCard.classList.toggle('secaoMostrarCard__listaCards');
document.querySelector('.secaoMostrarCard').appendChild(listaCard)

function criarCard() {
    
    if (tituloCard.value.length == 0 || corBordaCard.value == '#000000' && corFunDoCard.value == '#000000' && corTextoCard.value == '#000000') {
        window.alert('Faltam campos a serem preenchidos!')
    } else {

        // NOVO CARD
        let itemCard = document.createElement('li');
        itemCard.classList.toggle('listaCards__cardItem');
    
        // ADICIONAR ESTILOS AO CARD
        itemCard.innerText = `${tituloCard.value}`;
        itemCard.style.backgroundColor = `${corFunDoCard.value}`;
        itemCard.style.color = `${corTextoCard.value}`;
        itemCard.style.border = `3px solid ${corBordaCard.value}`;

        listaCard.appendChild(itemCard);

    }
    
}