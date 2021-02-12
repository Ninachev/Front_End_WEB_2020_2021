"use strict";
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == null || username == "") {
    alert("Please enter the username.");
    return false;
  }
  if (password == null || password == "") {
    alert("Please enter the password.");
    return false;
  }
  if(password== "1234" && username=="nikolay"){
    const hidden_btn = document.getElementById("btn_link");
    hidden_btn.click();
    alert('Login successful');
  }
  else{
    alert('Login unsuccessful');
    return false;
  }
}
function redirection(){
  document.location.href="MyMovies.html";
}