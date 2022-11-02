let actualPath = window.location
let pathName = actualPath.pathname

let navLinkAResaltar = document.querySelector(`.nav-link[href="${pathName}"]`);
navLinkAResaltar.style.backgroundColor='white';
navLinkAResaltar.style.color='black';