document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
    darkMode();
    navegacionFija();
    scrollNav();
});

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    //console.log(prefiereDarkMode.matches)

    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function () {
    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        //Para que el modo elegido se quede guardado en local-storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('modo-oscuro','true');
        } else {
            localStorage.setItem('modo-oscuro','false');
        }
        
    });

     
    //Obtenemos el modo del color actual
    if (localStorage.getItem('modo-oscuro') === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    
    navegacion.classList.toggle('mostrar');
    setTimeout(() => {
    navegacion.classList.remove('mostrar');
}, 4000); 
    
    // if (navegacion.classList.contains('mostrar')) {
    //     navegacion.classList.remove('mostrar');
    // } else {
    //     navegacion.classList.add('mostrar');
    // }
}

function navegacionFija (){
    const barra = document.querySelector('.header');
    const iconos = document.querySelector('.iconos-nosotros');
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    const heading = document.querySelector('.heading');

    

    window.addEventListener('scroll', function(){
       // console.log(sobreFestival.getBoundingClientRect() );

        if (iconos.getBoundingClientRect().top < 0 ) {
            barra.classList.remove('inicio');
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
            h1.innerHTML = "";
            h1.remove();
        }
        else {
            barra.classList.add('inicio');
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
            heading.appendChild(h1);
            h1.innerHTML = "Full Stack Developer";
            
        }
    });
}
function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function (e) {

            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value; 
            const seccion = document.querySelector(seccionScroll);

            seccion.scrollIntoView({behavior: "smooth"});
        });
    });
}
