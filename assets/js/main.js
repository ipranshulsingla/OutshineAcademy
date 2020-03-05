window.addEventListener('load',bindEvents);
function bindEvents(){
    addWidth();
}

function addWidth(){
    aWidth=screen.availWidth;
    gmap=document.querySelector("#outshine-gmap");
    gmap=gmap.children;
    gmap[0].width=aWidth;
}