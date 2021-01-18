const app = {
    data: [
        "Tu peux te présenter s'il te plait.",
        "Je suis Maxence, passionné par l'informatique depuis tout jeune. j'ai décidé d'en faire ma profession à partir de l'age de 30 ans. Je me suis automatiquement lancé dans le développement web, un domaine où je m'épanouï pleinement.",
        "Ok, et tu sais faire quoi dans le développement web ?",
        "Je connais le HTML/CSS, JavaScript et PHP, notamment avec ReactJS et Symfony. Je comprend le pattern MVC, je sais faire un MCD, et j'aime la plongée...",
        "Ah t'es poète ?",
        "Non, développeur pourquoi ?",
        "Pour rien, comme ça... Et tu es bon la dedans ?",
        "Bon... Je dirais plutôt que je me débrouille bien et que j'apprend vite.",
        "D'accord. Et quelqu'un peu attester que \"tu te débrouille bien\" ?",
        "Je n'ai pas encore eu la chance d'intégrer une entreprise mais, j'ai toujours surmonté les différents soucis que j'ai rencontrer tout au long de mes projets. Je viens de passer mon Titre Pro développeur et web mobile et j'ai la certification Opquast (maitrise de la qualité en projet web). ",
        "Ah cool! Tu peux me dire pourquoi le développement web et seulement à 30 ans?",
        "Oula... Pour tout dire, j'étais mécanicien poids lourds avant et je dois avouer que je n'étais plus du tout en adéquation avec les pratiques de ce domaine. Pour pallier à ça, j'ai décidé de me reconvertir. Le dévéloppement web s'est tout naturellement imposé parce que j'y avais un peu touché par le passé et que j'avais \"surKiffé\". Tout ça à 30 ans, parce que je pense qu'il m'a fallu un peu de temps pour me rendre compte de ce que j'appréciais vraiment.",
        "Ok ok... C'est tout nouveau pour toi alors, le web, le travail en équipe, toussa toussa.",
        "Oui et non. Dans le sens où : Oui, je n'ai pas encore intégré de service professionnel, et non, j'ai beaucoup appris avec mes projets personnels et avec la formation O'clock lors de laquelle j'ai pu travailler en méthode Agile au sein d'une équipes de 5 développeurs où chacun apporter sa contribution sur un repository github.",
        "Je vois... Plutôt \"Remote\" ou présentiel ?",
        "Les deux. J'aime surtout allier vie pro et vie privée.",
        "Intérréssant... Pour ce qui est de la vie privée, tu peux m'en dire plus ?",
        "Oui bien sur, je suis ***** avec ***** ***** et j'ai également **** ********. j'habite ***** ********* dans le département de la ***** et c'est à peu près tout.",
        "J'ai pas tout compris mais bon... Des points forts, des faiblesses?",
        `Et bien, en points forts... Je dirais que je suis curieux, j'aime apprendre des nouvelles technos et comprendre comment elles fonctionnent. Autonome, j'essaie au mieux d'apprendre par moi même. Humble, je ne prétend jamais détenir la solution, j'en prosose une.<br><br>Pour les défauts... Je dirais que je suis perfectionniste, le \"pixel-perfect\" est une obséssion. Maladroit aussi... Je n'ai jamais réussi a mettre du dentifrice sur ma brosse à dents à la manière d'une pub.`,
        "Ah oui, quand même... Tu te vois où dans 10 ans?",
        "Dans une école, à transmettre mes connaissances.",
        "C'est noté. Où est ce que l'on peut te contacter ?",
        "Tout ce passe dans la section suivante, rubrique contact 😉",
    ],

    element: {},


    init: function () {
        console.log('app.init');

        app.element.window = window;
        app.element.headerButton = document.querySelector('.topbar__trigger');
        app.element.header = document.querySelector('.header__nav');
        app.element.topbar = document.querySelector('.topbar');
        app.element.navItems = document.querySelectorAll('.header__nav__item');
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
        app.element.contactForm = document.querySelector('.contact__form');
        app.element.footer = document.querySelector('.footer');
        app.element.talk = document.querySelectorAll('.talk');
        
        app.startListening();
    },

    startListening: function () {

        app.element.headerButton.addEventListener("click", app.toggleMenu);
        app.element.window.addEventListener("resize", app.checkSize);
        app.element.window.addEventListener('scroll', app.moveUp);
        // app.element.launcherText.addEventListener('click', app.startTalk);
        app.element.contactForm.addEventListener('submit', app.handleSubmitForm);
        app.element.navItems.forEach(item => {
            item.addEventListener("click", app.toggleMenu);
        });

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
    
    handleSubmitForm: function (evt) {
        // evt.preventDefault();
    },

    moveUp: function () {
        // console.log(window.scrollY);
        // console.log(app.element.jsElt.getBoundingClientRect());

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
        ) app.element.talk[0].classList.add('--pop');
        

        if (app.element.talk[1].getBoundingClientRect().top >= 0 &&
            app.element.talk[1].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[1].classList.add('--pop');
      


        if (app.element.talk[2].getBoundingClientRect().top >= 0 &&
            app.element.talk[2].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[2].classList.add('--pop');
        

        if (app.element.talk[3].getBoundingClientRect().top >= 0 &&
            app.element.talk[3].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[3].classList.add('--pop');
        

        if (app.element.talk[4].getBoundingClientRect().top >= 0 &&
            app.element.talk[4].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[4].classList.add('--pop');
        

        if (app.element.talk[5].getBoundingClientRect().top >= 0 &&
            app.element.talk[5].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[5].classList.add('--pop');

        if (app.element.talk[6].getBoundingClientRect().top >= 0 &&
            app.element.talk[6].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[6].classList.add('--pop');
        

        if (app.element.talk[7].getBoundingClientRect().top >= 0 &&
            app.element.talk[7].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[7].classList.add('--pop');
        

        if (app.element.talk[8].getBoundingClientRect().top >= 0 &&
            app.element.talk[8].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[8].classList.add('--pop');
  

        if (app.element.talk[9].getBoundingClientRect().top >= 0 &&
            app.element.talk[9].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[9].classList.add('--pop');


        if (app.element.talk[10].getBoundingClientRect().top >= 0 &&
            app.element.talk[10].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[10].classList.add('--pop');
        

        if (app.element.talk[11].getBoundingClientRect().top >= 0 &&
            app.element.talk[11].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[11].classList.add('--pop');


        if (app.element.talk[12].getBoundingClientRect().top >= 0 &&
            app.element.talk[12].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[12].classList.add('--pop');
        

        if (app.element.talk[13].getBoundingClientRect().top >= 0 &&
            app.element.talk[13].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[13].classList.add('--pop');
       

        if (app.element.talk[14].getBoundingClientRect().top >= 0 &&
            app.element.talk[14].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[14].classList.add('--pop');
        

        if (app.element.talk[15].getBoundingClientRect().top >= 0 &&
            app.element.talk[15].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[15].classList.add('--pop');
        
        

        if (app.element.talk[16].getBoundingClientRect().top >= 0 &&
            app.element.talk[16].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[16].classList.add('--pop');

        if (app.element.talk[17].getBoundingClientRect().top >= 0 &&
            app.element.talk[17].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[17].classList.add('--pop');


        if (app.element.talk[18].getBoundingClientRect().top >= 0 &&
            app.element.talk[18].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[18].classList.add('--pop');

        if (app.element.talk[19].getBoundingClientRect().top >= 0 &&
            app.element.talk[19].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[19].classList.add('--pop');

        if (app.element.talk[20].getBoundingClientRect().top >= 0 &&
            app.element.talk[20].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[20].classList.add('--pop');

        if (app.element.talk[21].getBoundingClientRect().top >= 0 &&
            app.element.talk[21].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[21].classList.add('--pop');

        if (app.element.talk[22].getBoundingClientRect().top >= 0 &&
            app.element.talk[22].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[22].classList.add('--pop');
        
        if (app.element.talk[23].getBoundingClientRect().top >= 0 &&
            app.element.talk[23].getBoundingClientRect().bottom <= window.innerHeight
        ) app.element.talk[23].classList.add('--pop');
        

        
    },

    // startTalk: function () {
       
    //     // cache la span "cliquez"
    //     app.element.launcherText.classList.add('hide');
    //     app.element.contactSection.classList.add('hide');
    //     app.element.footer.classList.add('hide');
      
    //     let index = 0; // index du tableau app.data
    //     let paused = false; // status de l'animation

    //     // A interval régulier 
    //     let talkingScript = window.setInterval(() => {    

    //         // si l'animation n'est pas en pause
    //         if (!paused) {

    //             // si on est pas arriver au bout du tableau
    //             if(index < app.data.length) {
                    
    //                 //On récupère l'infoBulle dernièrement placée
    //                 let oldInfoBulleElt = document.querySelector('.wait');
                   
    //                 // si elle existe
    //                 if (oldInfoBulleElt !== null) {
    //                     //on retire le dernier enfant du bloc (rapport a la création de l'info bulle)
    //                     app.element.textArea.removeChild(oldInfoBulleElt);  
    //                 }

    //                 // tu créée un paragraphe
    //                 let elt = document.createElement('p');
    
    //                 // tu lui applique une classe en fonction de sa position dans le tableau (pair == interlocutor ; impair == reply)
    //                 if (index % 2 === 0) {
    //                     elt.classList.add('talk__interlocutor');
    //                 } else {
    //                     elt.classList.add('talk__reply');
    //                 }
    
    //                 // tu ajoute la classe pour l'animation
    //                 elt.classList.add('--pop');

    //                 // tu définis son contenu
    //                 elt.innerHTML = app.data[index];
                        
    //                 // tu l'accroche a la div correspondante
    //                 app.element.textArea.insertAdjacentElement('beforeend',elt);

    //                 //tu fais scroller l'affichage 
    //                 window.scrollBy(0 , 100000000)
                    
    //                 //on passe a l'index suivant
    //                 index++;

    //                 // si on est pas arriver au bout du tableau
    //                 if (index < app.data.length) {

    //                     // on créée un petit bulle simulant le fait que la personne commence a repondre.
    //                     window.setTimeout(() => {
    
    //                         let infoBulleElt = document.createElement('p');
        
    //                         if (index % 2 === 0) {
    //                             infoBulleElt.classList.add('talk__interlocutor');
    //                         } else {
    //                             infoBulleElt.classList.add('talk__reply');
    //                         }
        
    //                         infoBulleElt.classList.add('wait');
    //                         infoBulleElt.addEventListener('click', stop);
    //                         infoBulleElt.innerHTML = '<span class="point"></span><span class="point"></span><span class="point"></span>';
        
    //                         app.element.textArea.insertAdjacentElement('beforeend',infoBulleElt);
    //                         window.scrollBy(0 , 100000000)
    
    //                     }, 1000)
    //                 } else {

    //                     app.element.contactSection.classList.remove('hide');
    //                     app.element.footer.classList.remove('hide');
    //                 }
                
    //                 paused = true;
    
    //             } else {

    //                 clearInterval(talkingScript);
    //             }
    //         }
    //     },  1);
        
    //     let stop = () => {
    //         paused = !paused;
    //     };
    // },
  
}

document.addEventListener("DOMContentLoaded", app.init);