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