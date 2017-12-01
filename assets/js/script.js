document.addEventListener("DOMContentLoaded", function (event) {

    //declaring variaables 
    var hamburger = document.querySelector(".hamburger"),
        nav = document.querySelector(".header__nav"),
        navLinks = document.querySelectorAll('.header__nav-link'),
        backToTop = document.querySelector('.contact__link'),
        body = document.getElementsByTagName("body");
        
    //click handler for mobile menu
    hamburger.addEventListener("click", function() {
        if (!nav.style.display || nav.style.display == "none") {
            hamburger.classList.add("is-active");
            nav.style.display = "block";
            body[0].style.overflow = "hidden";

        } else {
            hamburger.classList.remove("is-active");
            nav.style.display = "none";
            body[0].style.overflow = "visible";
        }
    });

    //function to randomly change colours on page refresh
    function displaycolours() {
        var icons = document.querySelectorAll(".contact__icons-svg"),
            instagram = document.querySelectorAll(".instagram");;

        //array of objects containing colours
        var colourlist = [
            { colour: '#F27935' }, 
            { colour: '#1E8BC3' }, 
            { colour: '#EC644B' }, 
            { colour: '#4DAF7C' },
            { colour: '#F39C12' }
        ];

        var tech = document.querySelectorAll('.tech__box'),
            buttons = document.querySelectorAll('.bio__button-text'),
            randomNumber = Math.floor(Math.random() * colourlist.length),
            i;

        //function to loop through item/nodelist and change it's background colour
        var loopItem = function (item) {
            for (i = 0; i < item.length; i++) {
                item[i].style.backgroundColor  = colourlist[randomNumber].colour;
            }
        }

        //function to change fill colour of svg
        var changeSvgColour = function(svg, colour) {
            var innerSvg;
            //loops through all svg nodelist
            for (var x = 0; x < svg.length; x++) {
                //assigns inner document of svg with specific class to variable
                innerSvg = svg[x].contentDocument.querySelectorAll(".svgInternalID");

                //loops through variable and changes fill colour
                for (var i = 0; i < innerSvg.length; i++) {
                    innerSvg[i].setAttribute("fill", colour);
                }
            }
        }

        //function to change backhround colour of headers using before psuedo selector
        var insertCss = function(selector, property, value) {
            //variable create style text and creates style element
            var css = selector + '{' + property + ':' + value + '; }',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';

            //checks if style tag is present and attaches css properties to it, if not, create stle tag
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            //attach style tag to head tag
            head.appendChild(style);
        }

        //change colours on page refresh
        window.onload = function() {
            //svg backgrounds
            changeSvgColour(icons, colourlist[randomNumber].colour);
            changeSvgColour(instagram, colourlist[randomNumber].colour);

            //header backgrounds
            insertCss('.header::before', 'background', colourlist[randomNumber].colour);
            insertCss('.header-gallery', 'background', colourlist[randomNumber].colour);

            //skill boxes and buttons backgrounds
            loopItem(tech);
            loopItem(buttons);
        }
    }

    //borrowed function to implement smooth scroll
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

    //function to scroll to target using smooth scroll
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

    //call all functions
    scrollTo(navLinks[2], 'contact');
    scrollTo(backToTop, 'header');
    scrollTo(backToTop, 'header-gallery');

    displaycolours();
});