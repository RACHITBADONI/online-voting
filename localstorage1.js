// function to register in an id
function getelement()
{
 let conf=confirm("are you sure you want to continue with this saved data");
 if(conf)
 {
	 alert("you have registered successfully");
	 window.open("index.html"); 
	}
 else{
	 alert("try again");
 }
}

// login page
function fdata()
{
	let username,password;
	username=document.getElementById("username").value;
	password=document.getElementById("password").value;
	if(username=="20021175" && password=="badoni12")
	{
		window.open("onlinevoting.html");
	}
    else
    	alert("wrong id or password");
}

// this function is made to check the valid person is there or not who is editing the pswrd
// window.open("index.html","_self");...to open in the same tab...but sometimes it was working and sometimes not..
function check()
{
	let id=document.getElementById("stuid").value;
	if(id==20021175)
	{
		alert("check your email for setting the new password");
		window.open("index.html");
	}
	else
	alert("wrong id or id does'nt exist");
}

// form data to be saved 

function saveData()
{
	let val=confirm("sure with the following data to continue");
	if(val)
     {
		let name,email,stid,date,candidate,university;
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
		alert("congrats you have given the vote");
		window.open("index.html");
	 }
	 else{
		 alert("try again");
	 }
}