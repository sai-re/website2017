document.addEventListener("DOMContentLoaded", function (event) {

    var hamburger = document.querySelector(".hamburger"),
        nav = document.querySelector(".nav"),
        icons = document.querySelectorAll(".icons__svg");
    
    hamburger.addEventListener("click", function() {
        if (nav.style.width == 0 || nav.style.width == "0px") {
            if (window.screen.width <= 360) {
                nav.style.width = "11.63rem";
            } else {
                nav.style.width = "15.63rem";
            }
        } else {
            nav.style.width = "0px";
        }
    });

    function displaycolours() {

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
            
            insertCss('.header::before', 'background', colourlist[randomNumber].colour);

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
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } 
            
            return y;
        }

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }

        var speed = Math.round(distance / 50);

        if (speed >= 20) {
            speed = 20;
        }

        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;

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

    var navLinks = document.querySelectorAll('.nav__link'),
        backToTop = document.querySelector('.contact__link');

    function scrollTo(link, target) {
        link.addEventListener('click', function() {
            smoothScroll(target);

            event.preventDefault();
        });
    }

    scrollTo(navLinks[0], 'bio');
    scrollTo(navLinks[1], 'tech');
    scrollTo(navLinks[3], 'contact');
    scrollTo(backToTop, 'header');


    displaycolours();
});