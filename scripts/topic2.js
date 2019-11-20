var curr = {
  name: "Philippine Peso",
  code: "PhP",
  country: "Philippines",
  value: 0.02
};

var currencymsg = curr.name + " is also known as " + curr.code + ". It is used in the " + curr.country + " and has a value of " + curr.value + " against the USD";
document.getElementById("objectoutput").innerHTML = currencymsg;


function updateobject() {
    var inname = document.getElementById('nameinput').value;
    var incode = document.getElementById('codeinput').value;
    var incountry = document.getElementById('countryinput').value;
    var invalue = parseFloat(document.getElementById('valueinput').value);
    
    curr = new Object();
    curr.name = inname;
    curr.code = incode;
    curr.country = incountry;
    curr.value = invalue;
    
    document.getElementById("updateoutput").innerHTML = curr.name + " is also known as " + curr.code + ". It is used in the " + curr.country + " and has a value of " + curr.value + " against the USD";
}

