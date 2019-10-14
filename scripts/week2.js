function doPayment() {
    var saved = parseFloat(document.getElementById('principalinput').value);
    var rate = parseFloat(document.getElementById('rateinput').value);
    var years = parseFloat(document.getElementById('nofyearsinput').value);
    var amountExpected = parseFloat(document.getElementById('expectedamount').value);
    
    computeSavings(saved, rate, years, amountExpected)
  
}

function computeSavings(initialSavings, annualRate, nyears, expectedamt){
var p = initialSavings;
var rate = 1 + (annualRate/12);
var years = nyears;
var t;
var message = "";
var total = 0;
var infomsg = "";
//loop here
for (t = 1; t <= years; t++) {
   total = (p*(Math.pow(rate, (12*t)))).toFixed(2);
   message += "<b>Year " + t + ": </b>" + total + "<br><br>";
   
}
    document.getElementById('output').innerHTML = message;
 var difference1 = Math.abs(expectedamt - total).toFixed(2);
 var difference2 = Math.abs(total - expectedamt).toFixed(2);
     if (total < expectedamt) {
        infomsg = "Sorry! The amount you will get in the end is " + difference1 + " less than your expected amount."
    } else {
        infomsg = "Great! The amount you will get in the end is " + difference2 + " more than your expected amount."
    }
   document.getElementById("message").innerHTML = infomsg;
}

