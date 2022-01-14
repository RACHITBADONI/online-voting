function fdata()
{
	var username,password;
	username=document.getElementById("username").value;
	password=document.getElementById("password").value;
	if(username=="20021175" && password=="badoni12")
		window.open("onlinevoting.html");
    else
    	alert("wrong id or password");
}



function saveData()
{
var name,email,stid,date,candidate,university;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
stid=document.getElementById("stid").value;
date=document.getElementById("date").value;
candidate=document.getElementById("candidate").value;
university=document.getElementById("university").value;
localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("stid",stid);
localStorage.setItem("university",university);
localStorage.setItem("date",date);
localStorage.setItem("candidate",candidate);
}