function getName() {
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("name", "Jemifer Judilla");
  // Retrieve
  document.getElementById("getoutput").innerHTML = "My name is " + localStorage.getItem("name") +".";
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
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function getBMonth() {
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("month", "January");
  // Retrieve
  document.getElementById("getoutput").innerHTML = "My birth month is in " + localStorage.getItem("month") + ".";
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function getNKids() {
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("kids", "two");
  // Retrieve
  document.getElementById("getoutput").innerHTML = "I have " + localStorage.getItem("kids") + " kids. Both are boys aged 9 and 5 as of 2019.";
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}