
function parseobjectAU() {

    
 var text = '{"name": "Australian Dollar", "code": "AUD", "country": "Australia", "value": "1.47"}';
 var object = JSON.parse(text);
  
//Since the strings have been parsed as an object, we can retrieve values from it using the object name and the property associated with it.
 document.getElementById("parseoutput").innerHTML = "The name of currency is " + object.name + " with the code " + object.code + ". It is used in " + object.country + " and has a value of " + object.value + " for every 1 USD.";
}


function parseobjectPHP() {

 //Strings we have 
 var text = '{"name": "Philippine Pesos", "code": "PhP", "country": "Philippines", "value": "50.92"}';
 var object = JSON.parse(text);
  
//Since the strings have been parsed as an object, we can retrieve values from it using the object name and the property associated with it.
 document.getElementById("parseoutput").innerHTML = "The name of currency is " + object.name + " with the code " + object.code + ". It is used in " + object.country + " and has a value of " + object.value + " for every 1 USD.";
}

function stringifyobject() {
 var inname = document.getElementById('nameinput').value;
 var incode = document.getElementById('codeinput').value;
 var incountry = document.getElementById('countryinput').value;
 var invalue = parseFloat(document.getElementById('valueinput').value);
    
    var object = { name: inname, code: incode, country: incountry, value: invalue};
    var currstring = JSON.stringify(object);
    
    
    document.getElementById("stringoutput").innerHTML = currstring;
}