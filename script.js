const mario = document.querySelector('.mario'); //Puxando a classe do css
const pipe = document.querySelector('.pipe'); //Puxando a classe do css
const clouds = document.querySelector('.nuvens');

//"() =>" significa uma função anonima
const jump = () => {
    mario.classList.add('jump'); //Puxando a função do jump diretamnte do css

    setTimeout(() => {
        mario.classList.remove('jump'); 
    },  500); //Ele vai esperar o tempo e executar a função novamente
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; //Puxando a função do objeto
    //O "+" antes de uma função pode converter o resultado string em número
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ""); //Pegando a posição do Mario
    //A console.log pode ajudar com os dados das posições dos objetos
    const cloudsPosition = clouds.offsetLeft

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){ //Criando a condição -> Quando o deslocamento da esquerda for maior que 0, o da direita for menor que 120 e a posição do Mario for menor que 80, o jogo para
        pipe.style.animation = 'none'; //Ao chegar no 120px ele para
        pipe.style.left = `${pipePosition}px`; //Ao bater, ele ficará na mesma posição
        
        //Criando o momento em que o Mario bate no tubo
        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`; //Ao bater, ele ficará nessa posição
    
        //Mudando a imagem do Mario
        mario.src = "./img/game-over.png";
        mario.style.width = '75px' 
        mario.style.marginLeft = '50px'

        //Criando o momento em que o Mario bate no tubo (nuvens)
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        //Quebrando o loop
        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump) //Aqui, quando qualquer tecla for ativada, a animação do pulo entrará em vigor

