var draw = document.getElementById("drawCanvas");
var c = draw.getContext("2d");
c.beginPath();
c.arc(150,75,50,0,2*Math.PI);
c.fillStyle = "red";
c.fill();


