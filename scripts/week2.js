function doPayment() {
    var saved = parseFloat(document.getElementById('principalinput').value);
    var rate = parseFloat(document.getElementById('rateinput').value);
    var years = parseFloat(document.getElementById('nofyearsinput').value);
    var amountExpected = parseFloat(document.getElementById('expectedamount').value);
    
    computeSavings(saved, rate, years, amountExpected)
    
}

function computeSavings(initialSavings, annualRate, nyears, expectedamt){
var p = initialSavings;
var r = annualRate/12;
var years = nyears;
var t;
//loop here
for (t = 1; t < years; t++) {
var total = p*(1+(r/12))^(12*t);
var message = "Year " + t + ": " + total +"\n";
p = total;

}
    document.getElementById('output').value = message;
}