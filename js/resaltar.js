let actualPath = window.location
let pathName = actualPath.pathname
console.log(actualPath)
console.log( pathName )

let navLinkAResaltar = document.querySelector(`.nav-link[href="${pathName}"]`);
console.log(navLinkAResaltar);
navLinkAResaltar.style.backgroundColor='white';
navLinkAResaltar.style.color='black';