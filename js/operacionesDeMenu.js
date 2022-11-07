let actualPath = window.location
let pathName = actualPath.pathname
/*Cual menu estoy mostrando?? */
let identificarMenu = function () {
    let menus = [...document.querySelectorAll(`div[id^=menu]`)].slice(0, 2);
    let menu;
    let navLinkAResaltar;
    for (let pos = 0; pos < menus.length; pos++) {
        if (window.getComputedStyle(menus[pos]).display === 'none') {
            continue
        }
        else {
            // console.log('Menu: ',menus[pos].id,'display: ', window.getComputedStyle(menus[pos]).display)
            menu = menus[pos].id;
            navLinkAResaltar = document.querySelector(`#${menu} .nav-link[href="${pathName}"]`);
        }
    }
    navLinkAResaltar = document.querySelector(`#${menu} .nav-link[href="${pathName}"]`);
    navLinkAResaltar.style.backgroundColor = 'white';
    navLinkAResaltar.style.color = 'black';
    // console.log('Ejecutando identificarMenu');
    // console.log('Menu identificado: ',menu);
}
let mostrarMenuSecundario = function(){
        let menuSecundarioLinks = document.querySelector('#menu-secundario-links');
        // let displayValue = window.getComputedStyle(menuSecundarioLinks).display ;
        let displayValue = menuSecundarioLinks.classList ;
        let anchoDePantalla = window.innerWidth;
        if( displayValue[0] === 'displayNone'){
            menuSecundarioLinks.classList.remove('displayNone')
            if( anchoDePantalla <= 420 ){
                menuSecundarioLinks.classList.toggle('grid');
            }
            else{
                menuSecundarioLinks.classList.toggle('flex');
            }
        }
        else{
            menuSecundarioLinks.classList.toggle( displayValue );
            menuSecundarioLinks.classList.add('displayNone');
        }
        
}

let elementoExiste = function( idElemento ){
    if( document.querySelector(`#${idElemento}`) !== null){
        return true
    }
    else{
        return false
    }
}


window.addEventListener('resize', identificarMenu );
window.addEventListener('load', identificarMenu );

let desplegarMenu = document.querySelector('#desplegar-menu');
desplegarMenu.addEventListener('click', mostrarMenuSecundario );