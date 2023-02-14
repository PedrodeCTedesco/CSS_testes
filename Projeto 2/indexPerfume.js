const body = document.querySelector('body');

const width = body.width = window.innerWidth;
const height =body.height = window.innerHeight;

const button = document.querySelector('.containerBotao__botao');
button.addEventListener('click', function () {
    confirm('Deseja confirmar essa compra?')
});