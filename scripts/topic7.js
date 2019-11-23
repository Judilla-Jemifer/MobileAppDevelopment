function manipulatecss() {
    document.getElementById("m1").style.animation = "manipulate 2s infinite";
    document.getElementById("m2").style.animation = "manipulate 2s infinite";
    document.getElementById("m3").style.animation = "manipulate 2s infinite";
    document.getElementById("trafficlight").style.background = "#205287";
    
}

function restorecss() {
    document.getElementById("m1").style.animation = "first 4s infinite";
    document.getElementById("m2").style.animation = "second 4s infinite";
    document.getElementById("m3").style.animation = "third 4s infinite";
    document.getElementById("trafficlight").style.background = "#211B09";
}