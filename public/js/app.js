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
        app.element.jsElt = document.querySelector('.js');
        app.element.phpElt = document.querySelector('.php');
        app.element.reactElt = document.querySelector('.react');
        app.element.symfoElt = document.querySelector('.symfo');
        app.element.sqlElt = document.querySelector('.sql');
        app.element.gitElt = document.querySelector('.git');
        app.element.linuxElt = document.querySelector('.linux');
        app.element.scrumElt = document.querySelector('.scrum');
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

        if (app.element.jsElt.getBoundingClientRect().top >= 0 &&
            app.element.jsElt.getBoundingClientRect().bottom <= window.innerHeight 
        ) app.element.jsElt.classList.add('--slideLeft');   

        if (app.element.phpElt.getBoundingClientRect().top >= 0 &&
            app.element.phpElt.getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.phpElt.classList.add('--slideRight');

        if (app.element.reactElt.getBoundingClientRect().top >= 0 &&
            app.element.reactElt.getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.reactElt.classList.add('--slideLeft');

        if (app.element.symfoElt.getBoundingClientRect().top >= 0 &&
            app.element.symfoElt.getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.symfoElt.classList.add('--slideRight');

        if (app.element.sqlElt.getBoundingClientRect().top >= 0 &&
            app.element.sqlElt.getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.sqlElt.classList.add('--slideLeft');

        if (app.element.gitElt.getBoundingClientRect().top >= 0 &&
            app.element.gitElt.getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.gitElt.classList.add('--slideRight');

        if (app.element.linuxElt.getBoundingClientRect().top >= 0 &&
            app.element.linuxElt.getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.linuxElt.classList.add('--slideLeft');


        if (app.element.scrumElt.getBoundingClientRect().top >= 0 &&
            app.element.scrumElt.getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.scrumElt.classList.add('--slideRight');


        if (app.element.talk[0].getBoundingClientRect().top >= 0 &&
            app.element.talk[0].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[0].classList.add('--pop');
        } else {
            app.element.talk[0].classList.remove('--pop');
        }

        if (app.element.talk[1].getBoundingClientRect().top >= 0 &&
            app.element.talk[1].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[1].classList.add('--pop');
            
        } else {
            app.element.talk[1].classList.remove('--pop');
        }


        if (app.element.talk[2].getBoundingClientRect().top >= 0 &&
            app.element.talk[2].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[2].classList.add('--pop');
        } else {
            app.element.talk[2].classList.remove('--pop');
        }

        if (app.element.talk[3].getBoundingClientRect().top >= 0 &&
            app.element.talk[3].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[3].classList.add('--pop');
        } else {
            app.element.talk[3].classList.remove('--pop');
        }

        if (app.element.talk[4].getBoundingClientRect().top >= 0 &&
            app.element.talk[4].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[4].classList.add('--pop');
        } else {
            app.element.talk[4].classList.remove('--pop');
        }

        if (app.element.talk[5].getBoundingClientRect().top >= 0 &&
            app.element.talk[5].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[5].classList.add('--pop');
        } else {
            app.element.talk[5].classList.remove('--pop');
        }

        if (app.element.talk[6].getBoundingClientRect().top >= 0 &&
            app.element.talk[6].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[6].classList.add('--pop');
        } else {
            app.element.talk[6].classList.remove('--pop');
        }

        if (app.element.talk[7].getBoundingClientRect().top >= 0 &&
            app.element.talk[7].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[7].classList.add('--pop');
        } else {
            app.element.talk[7].classList.remove('--pop');
        }

        if (app.element.talk[8].getBoundingClientRect().top >= 0 &&
            app.element.talk[8].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[8].classList.add('--pop');
        } else {
            app.element.talk[8].classList.remove('--pop');
        }

        if (app.element.talk[9].getBoundingClientRect().top >= 0 &&
            app.element.talk[9].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[9].classList.add('--pop');
        } else {
            app.element.talk[9].classList.remove('--pop');
        }

        if (app.element.talk[10].getBoundingClientRect().top >= 0 &&
            app.element.talk[10].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[10].classList.add('--pop');
        } else {
            app.element.talk[10].classList.remove('--pop');
        }

        if (app.element.talk[11].getBoundingClientRect().top >= 0 &&
            app.element.talk[11].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[11].classList.add('--pop');
        } else {
            app.element.talk[11].classList.remove('--pop');
        }

        if (app.element.talk[12].getBoundingClientRect().top >= 0 &&
            app.element.talk[12].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[12].classList.add('--pop');
        } else {
            app.element.talk[12].classList.remove('--pop');
        }

        if (app.element.talk[13].getBoundingClientRect().top >= 0 &&
            app.element.talk[13].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[13].classList.add('--pop');
        } else {
            app.element.talk[13].classList.remove('--pop');
        }

        if (app.element.talk[14].getBoundingClientRect().top >= 0 &&
            app.element.talk[14].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[14].classList.add('--pop');
        } else {
            app.element.talk[14].classList.remove('--pop');
        }

        if (app.element.talk[15].getBoundingClientRect().top >= 0 &&
            app.element.talk[15].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[15].classList.add('--pop');
        } else {
            app.element.talk[15].classList.remove('--pop');
        }

        if (app.element.talk[16].getBoundingClientRect().top >= 0 &&
            app.element.talk[16].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[16].classList.add('--pop');
        } else {
            app.element.talk[16].classList.remove('--pop');
        }
        if (app.element.talk[17].getBoundingClientRect().top >= 0 &&
            app.element.talk[17].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[17].classList.add('--pop');
        } else {
            app.element.talk[17].classList.remove('--pop');
        }

        if (app.element.talk[18].getBoundingClientRect().top >= 0 &&
            app.element.talk[18].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[18].classList.add('--pop');
        } else {
            app.element.talk[18].classList.remove('--pop');
        }

        if (app.element.talk[19].getBoundingClientRect().top >= 0 &&
            app.element.talk[19].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[19].classList.add('--pop');
        } else {
            app.element.talk[19].classList.remove('--pop');
        }

        if (app.element.talk[20].getBoundingClientRect().top >= 0 &&
            app.element.talk[20].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[20].classList.add('--pop');
        } else {
            app.element.talk[20].classList.remove('--pop');
        }

        if (app.element.talk[21].getBoundingClientRect().top >= 0 &&
            app.element.talk[21].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[21].classList.add('--pop');
        } else {
            app.element.talk[21].classList.remove('--pop');
        }

        if (app.element.talk[22].getBoundingClientRect().top >= 0 &&
            app.element.talk[22].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[22].classList.add('--pop');
        } else {
            app.element.talk[22].classList.remove('--pop');
        }

        if (app.element.talk[23].getBoundingClientRect().top >= 0 &&
            app.element.talk[23].getBoundingClientRect().bottom <= window.innerHeight
        ) {
            app.element.talk[23].classList.add('--pop');
        } else {
            app.element.talk[23].classList.remove('--pop');
        }

        
    },

    
}

document.addEventListener("DOMContentLoaded", app.init);