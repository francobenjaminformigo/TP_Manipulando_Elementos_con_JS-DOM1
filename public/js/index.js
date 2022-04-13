window.onload = function(){

    function qs (element){
        return document.querySelector(element)
    }

    let $main = document.querySelector('main');
    let $h2 = document.querySelector('.subtitulo');
    let $a = document.querySelector('a');
    let $p = document.querySelectorAll('p');
    let $body = document.querySelector('body');

    let nombre = prompt('Ingrese su nombre') || 'Invitad@';
    
    $h2.innerText += ` ${nombre.trim()}`;

    $h2.style.textTransform = 'uppercase';
    $a.style.color = '#E51B3E';

    let background = confirm('¿Desea colocar un fondo de pantalla?');

    background && $body.classList.add('fondo'); //if(background){body.classList.add}

    for(let i=0; i < $p.length; i++){
        if((i + 1) % 2 == 0){
            $p[i].classList.add('destacadoPar');
        }else{
            $p[i].classList.add('destacadoImpar');
        }
    }

    /* package.forEach((element, index) => {
        if((index + 1) % 2 == 0){
            element.classList.add('destacadoPar')
        }else{
            element.classList.add('destacadoImpar')
        }
    }) */



    $main.style.display = 'block';
    
}