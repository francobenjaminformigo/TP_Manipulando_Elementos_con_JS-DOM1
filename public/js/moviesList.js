window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modoOscuro = confirm('¿Desea modo oscuro?');
    if(modoOscuro){
        body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList');
    }

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELICULAS';
    moviesListTitulo.style.color = 'white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px'
}