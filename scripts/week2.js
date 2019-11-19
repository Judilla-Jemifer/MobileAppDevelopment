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
        infomsg = "Sorry! The amount you will get in the end is " + difference1 + " less than your expected amount. <br><br> This is computed using a for loop."
    } else if (p == "" || rate == "" || years == "" || total == "" || expectedamt == "") {
        infomsg = "Please fill in all the textboxes above."
    } else {
        infomsg = "Great! The amount you will get in the end is " + difference2 + " more than your expected amount. <br><br> This is computed using a for loop."
    }
   document.getElementById("message").innerHTML = infomsg;
}
    
function doPaymentWhile() {
    var saved = parseFloat(document.getElementById('principalinput').value);
    var rate = parseFloat(document.getElementById('rateinput').value);
    var years = parseFloat(document.getElementById('nofyearsinput').value);
    var amountExpected = parseFloat(document.getElementById('expectedamount').value);
    
    computeWhile(saved, rate, years, amountExpected)
  
}

function computeWhile(initialSavings, annualRate, nyears, expectedamt){
var p = initialSavings;
var rate = 1 + (annualRate/12);
var years = nyears;
var t = 1;
var message = "";
var total = 0;
var infomsg = "";
//while loop here
while (t <= years) {
   total = (p*(Math.pow(rate, (12*t)))).toFixed(2);
   message += "<b>Year " + t + ": </b>" + total + "<br><br>";
    t++;
   
}
    document.getElementById('output').innerHTML = message;
 var difference1 = Math.abs(expectedamt - total).toFixed(2);
 var difference2 = Math.abs(total - expectedamt).toFixed(2);
     if (total < expectedamt) {
        infomsg = "Sorry! The amount you will get in the end is " + difference1 + " less than your expected amount. <br><br> This is computed using a while loop."
    } else if (p == "" || rate == "" || years == "" || total == "" || expectedamt == "") {
        infomsg = "Please fill in all the textboxes above."
    } else {
        infomsg = "Great! The amount you will get in the end is " + difference2 + " more than your expected amount. <br><br> This is computed using a while loop."
    }
   document.getElementById("message").innerHTML = infomsg;
}
 



function doPaymentDoWhile() {
    var saved = parseFloat(document.getElementById('principalinput').value);
    var rate = parseFloat(document.getElementById('rateinput').value);
    var years = parseFloat(document.getElementById('nofyearsinput').value);
    var amountExpected = parseFloat(document.getElementById('expectedamount').value);
    
    computeDoWhile(saved, rate, years, amountExpected)
  
}

function computeDoWhile(initialSavings, annualRate, nyears, expectedamt) {
var p = initialSavings;
var rate = 1 + (annualRate/12);
var years = nyears;
var t = 1;
var message = "";
var total = 0;
var infomsg = "";
//do-while loop here

 do {
   total = (p*(Math.pow(rate, (12*t)))).toFixed(2);
   message += "<b>Year " + t + ": </b>" + total + "<br><br>";
    t++;
   
}   
while (t <= years);
    
   
    
 var difference1 = Math.abs(expectedamt - total).toFixed(2);
 var difference2 = Math.abs(total - expectedamt).toFixed(2);
     if (total < expectedamt) {
          document.getElementById('output').innerHTML = message;
        infomsg = "Sorry! The amount you will get in the end is " + difference1 + " less than your expected amount. <br><br> This is computed using a do-while loop."
    } else if (p == "" || rate == "" || years == "" || total == "" || expectedamt == "" || total == "NaN") {
        infomsg = "Please fill in all the textboxes above."
    } else {
         document.getElementById('output').innerHTML = message;
        infomsg = "Great! The amount you will get in the end is " + difference2 + " more than your expected amount. <br><br> This is computed using a do-while loop."
    }
   document.getElementById("message").innerHTML = infomsg;
}

 var currency, message, length, i;
    currency = ["USD", "CAD", "AUD" , "PHP", "GBP", "JPY"];
    length = currency.length;   

function showarray() {
    
    
    message = "<ul>";
    for (i=0; i < length; i++) {
        message += "<li>" + currency[i] + "</li>";
    }
    message += "</ul>";
    
    document.getElementById("arrayoutput").innerHTML = message;
}


function showindex() {
    var n = parseFloat(document.getElementById('indexnumber').value);
        
    document.getElementById("indexoutput").innerHTML = currency[n];     
}
 



