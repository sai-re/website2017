document.addEventListener("DOMContentLoaded", function (event) {

    var hamburger = document.querySelector(".hamburger"),
        nav = document.querySelector(".nav"),
        navLinks = document.querySelectorAll('.nav__link'),
        backToTop = document.querySelector('.contact__link');
    
    hamburger.addEventListener("click", function() {
        if (!nav.style.display || nav.style.display == "none") {
            hamburger.classList.add("is-active");
            nav.style.display = "block";

        } else {
            hamburger.classList.remove("is-active");
            nav.style.display = "none";
        }
    });

    function displaycolours() {
        var icons = document.querySelectorAll(".icons__svg"),
            instagram = document.querySelectorAll(".instagram");;

        var colourlist = [
            { colour: '#F27935' }, 
            { colour: '#1E8BC3' }, 
            { colour: '#EC644B' }, 
            { colour: '#4DAF7C' },
            { colour: '#336E7B' }
        ];

        var tech = document.querySelectorAll('.box'),
            buttons = document.querySelectorAll('.button__text'),
            randomNumber = Math.floor(Math.random() * colourlist.length),
            i;

        var loopItem = function (item) {
            for (i = 0; i < item.length; i++) {
                item[i].style.backgroundColor  = colourlist[randomNumber].colour;
            }
        }

        var changeSvgColour = function(svg, colour) {
            var innerSvg;
            for (var x = 0; x < svg.length; x++) {
                innerSvg = svg[x].contentDocument.querySelectorAll(".svgInternalID");

                for (var i = 0; i < innerSvg.length; i++) {
                    innerSvg[i].setAttribute("fill", colour);
                }
            }
        }

        var insertCss = function(selector, property, value) {
            var css = selector + '{' + property + ':' + value + '; }',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';

            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        }

        window.onload = function() {
            changeSvgColour(icons, colourlist[randomNumber].colour);
            changeSvgColour(instagram, colourlist[randomNumber].colour);

            insertCss('.header::before', 'background', colourlist[randomNumber].colour);
            insertCss('.gallery-header', 'background', colourlist[randomNumber].colour);

            loopItem(tech);
            loopItem(buttons);
        }
    }

    function smoothScroll(eID) {

        var currentYPosition = function() {
            
            var yScroll;
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

        var elmYPosition = function(eID) {
            var elm = document.getElementById(eID),
                y = elm.offsetTop,
                node = elm;

            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } 
            
            return y;
        }

        var startY = currentYPosition(),
            stopY = elmYPosition(eID),
            distance = stopY > startY ? stopY - startY : startY - stopY;
        
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }

        var speed = Math.round(distance / 50);

        if (speed >= 20) {
            speed = 20;
        }

        var step = Math.round(distance / 25),
            leapY = stopY > startY ? startY + step : startY - step,
            timer = 0;

        if (stopY > startY) {
            var i = startY;
            
            for (i; i < stopY; i+=step ) {
                setTimeout("window.scrollTo(0, " + leapY + ")" , timer * speed);
                leapY += step; 
                
                if (leapY > stopY) leapY = stopY; timer++;
            };
        }

        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; 
            
            if (leapY < stopY) leapY = stopY; timer++;
        }
    }

    function scrollTo(link, target) {
        link.addEventListener('click', function() {
            smoothScroll(target);
            
            if(window.screen.width < 1200) {
                nav.style.display = "none";
                hamburger.classList.remove("is-active");                
            }

            event.preventDefault();
            event.stopPropagation();
        });
    }

    scrollTo(navLinks[1], 'bio');
    scrollTo(navLinks[2], 'tech');
    scrollTo(navLinks[4], 'contact');
    scrollTo(backToTop, 'header');
    scrollTo(backToTop, 'gallery-header');

    displaycolours();
});