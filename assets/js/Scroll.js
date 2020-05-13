let s;
const Scroll = {
    variables: {
        nav: document.querySelector(".header__nav"),
        navLinks: document.querySelectorAll('.header__nav-link'),
        backToTop: document.querySelector('.contact__link'),
        arrowDown: document.getElementById('arrow-down'),
        hamburger: document.querySelector(".hamburger")
    },

    init: function() {
        s = this.variables;

        //call all functions
        this.scrollTo(s.navLinks[3], 'contact');
        
        if (s.arrowDown) this.scrollTo(s.arrowDown, 'bio');

        this.scrollTo(s.backToTop, 'header');
        this.scrollTo(s.backToTop, 'header-gallery');
    },

    smoothScroll: function(eID) {
        //borrowed function to implement smooth scroll
        const currentYPosition = () => {
            let yScroll;
            // Firefox, Chrome, Opera, Safari
            if (window.pageYOffset) {
                yScroll = window.pageYOffset;
            // Internet Explorer 6 - standards mode
            } else if (document.documentElement && document.documentElement.scrollTop) {
                yScroll = document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            } else if (document.body) {
                yScroll = document.body.scrollTop;
            }
            
            return yScroll;
        }

        const elmYPosition = eID => {
            const elm = document.getElementById(eID);
            let y = elm.offsetTop;
            const node = elm;

            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } 
            
            return y;
        }

        const startY = currentYPosition();
        const stopY = elmYPosition(eID);
        let distance = stopY > startY ? stopY - startY : startY - stopY;
        let speed = Math.round(distance / 50);
        
        if (distance < 100) {
            this.scrollTo(0, stopY); return;
        }

        if (speed >= 20) speed = 20;

        const step = Math.round(distance / 25);
        let leapY = stopY > startY ? startY + step : startY - step;
        let timer = 0;

        if (stopY > startY) {
            let i = startY;
            
            for (i; i < stopY; i+=step ) {
                setTimeout("window.scrollTo(0, " + leapY + ")" , timer * speed);
                leapY += step; 
                
                if (leapY > stopY) leapY = stopY; timer++;
            };
        }

        for (let i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; 
            
            if (leapY < stopY) leapY = stopY; timer++;
        }
    },

    scrollTo: function(link, target) {
        const _this = this;

        link.addEventListener('click', function() {
            _this.smoothScroll(target);
            
            if(window.screen.width < 1200) {
                s.nav.style.display = "none";
                s.hamburger.classList.remove("is-active");                
            }

            event.preventDefault();
            event.stopPropagation();
        });
    }
}

export default Scroll;
