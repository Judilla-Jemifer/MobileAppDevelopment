function requestJSON() {
    var xml = new XMLHttpRequest();
    var url = "https://www.quackit.com/json/tutorial/artists.txt";
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            var parsedData = JSON.parse(xml.responseText);
            getData(parsedData)
            
        }
    };
    xml.open("GET","http://www.filltext.com/?rows=10&pretty=true&ID={index}&fname={firstName}&lname={lastName}&business={business}&address={addressObject}",true);
    xml.send();
    
    function getData(data) {
        var txt = "<p>";
        var i;
        
        //Loop to get a list from the data
        for (i=0; i<data.length; i++) {
            txt += "<strong>Name:</strong> " + data[i].fname + " " + data[i].lname + "<br/>";
            txt += "<strong>Business Name:</strong> " + data[i].business +  "<br/><br/>"; 
    }
    
        txt += "</p>";
         document.getElementById("jsonoutput").innerHTML = txt;
        }
   
    }
    
    
    
