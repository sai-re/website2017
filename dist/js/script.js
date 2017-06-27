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
            { colour: '#C18D8D' }, 
            { colour: '#1E8BC3' }, 
            { colour: '#C0392B' }, 
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

    displaycolours();
});