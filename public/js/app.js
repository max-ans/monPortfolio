const app = {
    
    element: {},

    text: 'Je suis développeur web et je vous présente ici mes réalisations et mon savoir faire.',

    typeWritterIndex: 0,

    init: function () {
        console.log('app.init');

        app.element.window = window;
        app.element.headerButton = document.querySelector('.topbar__trigger');
        app.element.header = document.querySelector('.header__nav');
        app.element.topbar = document.querySelector('.topbar');
        app.element.navItems = document.querySelectorAll('.header__nav__item');
        app.element.typist = document.querySelector('.presentation__text');
        app.element.mouse = document.querySelector('.presentation__scroll');
        app.element.skillsSection = document.getElementById('skills');
        app.element.skillsLogo = document.querySelectorAll('.schema__items');
        app.element.textArea = document.querySelector('.about__talk');
        app.element.launcherText = document.querySelector('.talk__launcher');
        app.element.contactSection = document.querySelector('#contact');
        app.element.footer = document.querySelector('.footer');
        app.element.talk = document.querySelectorAll('.talk');

        app.startListening();
        app.typeWritterAnimation();
    },

    startListening: function () {

        app.element.headerButton.addEventListener("click", app.toggleMenu);
        app.element.window.addEventListener("resize", app.checkSize);
        app.element.window.addEventListener('scroll', app.moveUp);
        app.element.navItems.forEach(item => {
            item.addEventListener("click", app.toggleMenu);
        });

    },

    typeWritterAnimation: function () {
       
        let speed = 100;

        if (app.typeWritterIndex < app.text.length) {
            app.element.typist.innerHTML += app.text.charAt(app.typeWritterIndex);
            app.typeWritterIndex++;
            setTimeout(app.typeWritterAnimation, speed);
        }

    },

    toggleMenu: function () {
        if (window.innerWidth < 712) {
            app.element.headerButton.classList.toggle('topbar__trigger--open') 
            app.element.header.classList.toggle('header__nav--open');
            app.element.topbar.classList.toggle('dimmer');

        }
    },

    checkSize: function () {
        if (window.innerWidth < 712) {
            app.element.headerButton.classList.remove('topbar__trigger--open') 
            app.element.header.classList.remove('header__nav--open');
            app.element.topbar.classList.remove('dimmer');

        } 
    },


    moveUp: function () {

        app.element.mouse.classList.add('hide');

        app.element.skillsLogo.forEach((logo) => {
            console.log(logo);
            if(
                logo.classList.contains('js') ||
                logo.classList.contains('react') ||
                logo.classList.contains('sql') ||
                logo.classList.contains('linux') 
            ) {
                if (
                    logo.getBoundingClientRect().top >= 0 &&
                    logo.getBoundingClientRect().bottom <= window.innerHeight
                ) logo.classList.add('--slideRight');
                
            } else {

                if (
                    logo.getBoundingClientRect().top >= 0 &&
                    logo.getBoundingClientRect().bottom <= window.innerHeight
                ) logo.classList.add('--slideLeft');
                
            }
        })


        app.element.talk.forEach((elt) => {
            if (elt.getBoundingClientRect().top >= 0 &&
                elt.getBoundingClientRect().bottom <= window.innerHeight
            ) {
                elt.classList.add('--pop');
            } else {
                elt.classList.remove('--pop');
            }
        })
        
    },

    
}

document.addEventListener("DOMContentLoaded", app.init);