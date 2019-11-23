function appendpar() {
    var par = document.getElementById('appendp').value;
    
    var p = document.createElement("p");
    var node = document.createTextNode(par);
    p.appendChild(node);
    
    var mainp = document.getElementById("mainpar");
    mainp.appendChild(p);
}

function insertbfr() {
    var par = document.getElementById('appendp').value;
    
    var p = document.createElement("p");
    var node = document.createTextNode(par);
    p.appendChild(node);
    
    var mainp = document.getElementById("mainpar");
    var p1 = document.getElementById("par1");
    mainp.insertBefore(p,p1);
}

function removep() {
    var parent = document.getElementById("mainpar");
    var p1 = document.getElementById("par1");
    parent.removeChild(p1);
}

function replacep() {
    var par = document.getElementById('appendp').value; 
    
    var parent = document.getElementById("mainpar");
    var p2 = document.getElementById("par2");
    
    var p = document.createElement("p");
    var node = document.createTextNode(par);
    p.appendChild(node);
    parent.replaceChild(p,p2)
}