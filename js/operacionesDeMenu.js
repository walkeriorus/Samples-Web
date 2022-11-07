let actualPath = window.location
let pathName = actualPath.pathname
/*Cual menu estoy mostrando?? */
let identificarMenu = function () {
    //Devuelve el id del menu que se esta mostrando actualmente
    //Los valores posibles son 'menu-principal' y 'menu-secundario'

    //Como hay 3 elementos cuyo id comienza con la palabra 'menu', pero solo me interesan los 2 primeros
    //convierto el resultado de querySelectorAll a una lista y la recorto para no guardar el tercer elemento-que no me interesa-
    let menus = [...document.querySelectorAll(`div[id^=menu]`)].slice(0, 2);
    let idMenu;
    for (let pos = 0; pos < menus.length; pos++) {
        if (window.getComputedStyle(menus[pos]).display === 'none') {
            continue
        }
        else {
            idMenu = menus[pos].id;
        }
    }
    return idMenu
}
let mostrarMenuSecundario = function () {
    //Esta funcion muestra el elemento con id #menu-secundario-links
    let menuSecundarioLinks = document.querySelector('#menu-secundario-links');
    let displayValue = menuSecundarioLinks.classList;
    let anchoDePantalla = window.innerWidth;
    if (displayValue[0] === 'displayNone') {
        menuSecundarioLinks.classList.remove('displayNone')
        if (anchoDePantalla <= 420) {
            menuSecundarioLinks.classList.toggle('grid');
        }
        else {
            menuSecundarioLinks.classList.toggle('flex');
        }
    }
    else {
        menuSecundarioLinks.classList.toggle(displayValue);
        menuSecundarioLinks.classList.add('displayNone');
    }

}
let elementoExiste = function (idElemento) {
    let selector = '#'+ idElemento
    if ( document.querySelector( selector ) !== null ) {
        return true
    }
    else {
        return false
    }
}
let agregarLoginEnMenu = function (idElemento) {
    //Agrega la seccion login sobre el menu con id = idElemento
    let div = document.createElement('div');
    div.setAttribute('id', 'login');
    let plantilla = `
    <label for="hideShowLogin">Login</label>
    <input type="checkbox" id="hideShowLogin">
    <form id="user-login" action="">
        <label for="user-name">Nombre de usuario</label>
        <input type="text" name="user-name" id="user-name" autocomplete="off">
        <label for="user-password">Contraseña</label>
        <input type="password" name="user-password" id="user-password" autocomplete="off">
        <button type="submit" class="button">Iniciar sesion</button>
        <a href="/registro.html">Registrarse</a>
    </form>
    `;
    
}
let operacionesEnCarga = function () {
    //Ejecuta las siguientes instrucciones en el evento 'load' del objeto window
    let menu = identificarMenu(); //Miro que menu esta mostrandose
}



window.addEventListener('resize', identificarMenu);
window.addEventListener('load', identificarMenu);

let desplegarMenu = document.querySelector('#desplegar-menu');
desplegarMenu.addEventListener('click', mostrarMenuSecundario);