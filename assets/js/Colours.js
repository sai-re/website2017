let c;
const Colours = {
    variables: {
        icons: document.querySelectorAll(".icon"),
        items: document.querySelectorAll('.randCol'),
        projectButtons: document.querySelectorAll('.projects__button-text')
    },

    init: function() {
        c = this.variables;

        //array of objects containing colours
        const colourlist = [
            { colour: '#EB9532' }, 
            { colour: '#1E8BC3' }, 
            { colour: '#EC644B' }, 
            { colour: '#4DAF7C' }
        ];

        //generate random number
        const randomNumber = Math.floor(Math.random() * colourlist.length);
        const randomColour = colourlist[randomNumber].colour;

        //change colours on page refresh
        window.onload = () => {
            //svg backgrounds
            this.changeColours(randomColour);
            this.changeSvgColour(c.icons, randomColour);

            //header backgrounds
            this.insertCss('.header::before', 'background', randomColour);
            this.insertCss('.header-gallery', 'background', randomColour);

            //for mobile header
            if (document.documentElement.clientWidth < 900) {
                this.insertCss('.header', 'background', randomColour);
            }
        }
    },

    changeColours: function(colour) {
        //function to loop through item/nodelist and change it's background colour
        c.items.forEach(el => el.style.backgroundColor = colour);

        //Change colour text for projects
        c.projectButtons.forEach(el => el.style.color = colour);
    },

    changeSvgColour: function(svg, colour) {
        //function to change fill colour of svg
        let innerSvg;
        //loops through all svg nodelist
        svg.forEach(el => {
            //assigns inner document of svg with specific class to variable
            innerSvg = el.contentDocument.querySelectorAll(".svgInternalID");

            //loops through variable and changes fill colour
            innerSvg.forEach(el => el.setAttribute("fill", colour));
        })
    },
    
    insertCss: function(selector, property, value) {
       //function to change backhround colour of headers using before psuedo selector

        //variable create style text and creates style element
        const css = `${selector} {${property}:${value}}`;
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

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
}

export default Colours;
