document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".hamburger"),o=document.querySelector(".header__nav"),n=document.querySelectorAll(".header__nav-link"),l=document.getElementById("arrow-down"),c=document.querySelector(".contact__link"),r=document.getElementsByTagName("body");t.addEventListener("click",function(){o.style.display&&"none"!=o.style.display?(t.classList.remove("is-active"),o.style.display="none",r[0].style.overflow="visible"):(t.classList.add("is-active"),o.style.display="block",r[0].style.overflow="hidden")});function d(n,l){n.addEventListener("click",function(){!function(e){var t=function(){var e;return window.pageYOffset?e=window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e}(),o=function(e){for(var t=document.getElementById(e),o=t.offsetTop,n=t;n.offsetParent&&n.offsetParent!=document.body;)o+=(n=n.offsetParent).offsetTop;return o}(e),n=o>t?o-t:t-o;if(n<100)d(0,o);else{var l=Math.round(n/50);l>=20&&(l=20);var c=Math.round(n/25),r=o>t?t+c:t-c,i=0;if(o>t)for(var a=t;a<o;a+=c)setTimeout("window.scrollTo(0, "+r+")",i*l),(r+=c)>o&&(r=o),i++;for(a=t;a>o;a-=c)setTimeout("window.scrollTo(0, "+r+")",i*l),(r-=c)<o&&(r=o),i++}}(l),window.screen.width<1200&&(o.style.display="none",t.classList.remove("is-active")),e.preventDefault(),e.stopPropagation()})}d(n[3],"contact"),l&&d(l,"bio"),d(c,"header"),d(c,"header-gallery"),document.documentElement.clientWidth>1200&&function(){var e=document.querySelectorAll(".tech__primary-item:nth-child(-n + 4)"),t=document.querySelectorAll(".tech__primary-item:nth-child(n + 5):nth-child(-n + 8)"),o=document.querySelectorAll(".tech__primary-item:nth-child(n + 9):nth-child(-n + 12)"),n=document.querySelectorAll(".tech__primary-item:nth-child(n + 13):nth-child(-n + 16)"),l=(document.querySelector(".bio__portrait"),document.querySelector(".bio__title"));bioText=document.querySelectorAll(".bio__text"),bioBtn=document.querySelector(".bio__button"),window.addEventListener("scroll",function(){if(scrollpos=window.scrollY,scrollpos,scrollpos>450&&l.classList.add("animate-in"),scrollpos>600){var c,r=bioText.length;for(c=0;c<r;c++)bioText[c].classList.add("animate-in")}scrollpos>750&&bioBtn.classList.add("animate-in"),scrollpos>1033&&e.forEach(function(e){e.classList.add("fade-in")}),scrollpos>1233&&t.forEach(function(e){e.classList.add("fade-in")}),scrollpos>1333&&o.forEach(function(e){e.classList.add("fade-in")}),scrollpos>1433&&n.forEach(function(e){e.classList.add("fade-in")})})}(),function(){var e,t=document.querySelectorAll(".contact__icons-svg"),o=document.querySelectorAll(".instagram"),n=[{colour:"#EB9532"},{colour:"#1E8BC3"},{colour:"#EC644B"},{colour:"#4DAF7C"},{colour:"#95A5A6"},{colour:"#947CB0"}],l=document.querySelectorAll(".tech__box"),c=document.querySelectorAll(".projects__holder"),r=document.querySelectorAll(".bio__button-text"),d=document.querySelectorAll(".projects__button-text"),i=Math.floor(Math.random()*n.length),a=function(t){for(e=0;e<t.length;e++)t[e].style.backgroundColor=n[i].colour};for(e=0;e<d.length;e++)d[e].style.color=n[i].colour;var u=function(e,t){for(var o,n=0;n<e.length;n++){o=e[n].contentDocument.querySelectorAll(".svgInternalID");for(var l=0;l<o.length;l++)o[l].setAttribute("fill",t)}},s=function(e,t,o){var n=e+"{"+t+":"+o+"; }",l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=n:c.appendChild(document.createTextNode(n)),l.appendChild(c)};window.onload=function(){u(t,n[i].colour),u(o,n[i].colour),s(".header::before","background",n[i].colour),s(".header-gallery","background",n[i].colour),document.documentElement.clientWidth<900&&s(".header","background",n[i].colour),a(l),a(r),a(c)}}()});