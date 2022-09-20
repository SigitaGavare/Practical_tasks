function openMenu(){
    var x = document.getElementById("mobile-nav");
    if (x.style.display === 'none') {
        x.style.display = 'block'
        x.className = "dropdown-menu show"
    } 
        else {
        x.style.display = 'none';
    }
}
function desc_mara(){
    var y = document.getElementById("Mara-mob");
    var x = document.getElementById("Mara");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none' )) {
        if (window.innerWidth > 500){
            x.style.display = 'block';
            pic.style.display = 'block';}
        else { y.style.display = 'block'};
        document.getElementById("maija").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("kate").style.display = 'none'; 
        document.getElementById("maija-mob").style.display = 'none';
        document.getElementById("martins-mob").style.display = 'none';
        document.getElementById("kate-mob").style.display = 'none';    } 
    else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}
function desc_maija(){
    var x = document.getElementById("maija");
    var y = document.getElementById("maija-mob");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none' )) {
        if (window.innerWidth > 500){
            x.style.display = 'block';
            pic.style.display = 'block';}
        else { y.style.display = 'block'};
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
        document.getElementById("Mara-mob").style.display = 'none';
        document.getElementById("martins-mob").style.display = 'none';
        document.getElementById("kate-mob").style.display = 'none';
    } else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}

function desc_martins(){
    var x = document.getElementById("martins");
    var y = document.getElementById("martins-mob");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none' )) {
        if (window.innerWidth > 500){
            x.style.display = 'block';
            pic.style.display = 'block';}
        else { y.style.display = 'block'};
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("maija").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
        document.getElementById("Mara-mob").style.display = 'none';
        document.getElementById("maija-mob").style.display = 'none';
        document.getElementById("kate-mob").style.display = 'none';
    } else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}
function desc_kate(){
    var x = document.getElementById("kate");
    var y = document.getElementById("kate-mob");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none' )) {
        if (window.innerWidth > 500){
            x.style.display = 'block';
            pic.style.display = 'block';}
        else { y.style.display = 'block'};
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("maija").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("Mara-mob").style.display = 'none';
        document.getElementById("maija-mob").style.display = 'none';
        document.getElementById("martins-mob").style.display = 'none';
    } else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}
