let n;
const Nav = {
    variables: {
        hamburger: document.querySelector(".hamburger"),
        nav: document.querySelector(".header__nav"),
        navLinks: document.querySelectorAll('.header__nav-link'),
        body: document.getElementsByTagName("body")
    },

    init: function() {
        n = this.variables;
        this.mobileNav();
    },

    mobileNav: function() {
        //click handler for mobile menu
        n.hamburger.addEventListener("click", () => {
            //if header has no display or it equals none add classes else remove
            if (!n.nav.style.display || n.nav.style.display == "none") {
                n.hamburger.classList.add("is-active");
                n.nav.style.display = "block";
                //stops scrolling of hamburger menu mobile when open
                n.body[0].style.overflow = "hidden";

            } else {
                n.hamburger.classList.remove("is-active");
                n.nav.style.display = "none";
                n.body[0].style.overflow = "visible";
            }
        });
    }
}

export default Nav;
