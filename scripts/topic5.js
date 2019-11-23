function getName() {
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("name", "Jemifer Judilla");
  // Retrieve
  document.getElementById("getoutput").innerHTML = "My name is " + localStorage.getItem("name") + ".";
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function getBYear() {
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("year", "1988");
  // Retrieve
  document.getElementById("getoutput").innerHTML = "I was born in the year " + localStorage.getItem("year") + ".";
} else {
  document.getElementById("getoutput").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function getBMonth() {
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("month", "January");
  // Retrieve
  document.getElementById("getoutput").innerHTML = "My birth month is in " + localStorage.getItem("month") + ".";
} else {
  document.getElementById("getoutput").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function getNKids() {
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("kids", "two");
  // Retrieve
  document.getElementById("getoutput").innerHTML = "I have " + localStorage.getItem("kids") + " kids. Both are boys aged 9 and 5 as of 2019.";
} else {
  document.getElementById("getoutput").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}


var message = ["Only a life lived for others is a life worthwhile. - Albert Einstein","Because I have loved life, I shall have no sorrow to die. - Amelia Burr", "Everything has beauty, but not everyone sees it. - Confucius","Nothing will work unless you do. - Maya Angelou"];

localStorage.setItem("quotes",JSON.stringify(message));

        var txt = "";
        var i;
        
        //Loop to get a list from the data
        for (i=0; i<message.length; i++) {
            txt += "<p>" + message[i] + " </p>";        
    }
    
         document.getElementById("arrayoutput").innerHTML = txt;
        

function addarray() {
    var input = document.getElementById('inputquote').value;
    //we are retriving now a data here that we'll make an object to allow us to access each value using javascript.   
    var retrievedData = localStorage.getItem("quotes");
    var message2 = JSON.parse(retrievedData);
    
    message2.push(input);
    localStorage.setItem("message2", JSON.stringify(message2));
      //Loop to get a list from the data
        for (i=message2.length-1; i<message2.length; i++) {
            txt += "<p>" + message2[i] + " </p>";        
    }
    
         document.getElementById("arrayoutput").innerHTML = txt;
}
   

