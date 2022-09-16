function desc_mara(){
    var x = document.getElementById("Mara");
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("maija").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}
function desc_maija(){
    var x = document.getElementById("maija");
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}

function desc_martins(){
    var x = document.getElementById("martins");
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("maija").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}
function desc_kate(){
    var x = document.getElementById("kate");
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("maija").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}