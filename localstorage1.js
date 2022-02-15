// function to register in an id  and also form validation..
function validateForm()
{
	document.getElementById("span_email").innerHTML="";//created so when error is removed the line showing error too gets remove since every time func will be called when click on submit
	document.getElementById("span_name").innerHTML="";
	document.getElementById("span_pswrd").innerHTML="";
	document.getElementById("span_re_pswrd").innerHTML="";
	let s_email=document.getElementById("stud_email").value;
	let s_name=document.getElementById("stud_name").value;
    let s_id=document.getElementById("stud_id").value; 
	let pswrd=document.getElementById("stud_pswrd").value;
    let repswrd=document.getElementById("stud_re_pswrd").value; 
	if(s_name.length<5)
	{
		document.getElementById("span_name").innerHTML="*name can't be too short";    
        return false;
	}
	if(s_email.charAt(s_email.length-4)!='.')
	{
		document.getElementById("span_email").innerHTML="*email with missing .com extension";    
		return false;   
	}
    // if(s_id.length!=8) // due to this some error..rectify it maybe here input type is a number and since 0 to 9..only 
	// {                 // or number can be many....
	// 	document.getElementById("span_id").innerHTML="*id either too short or too long";    
    //     return false;
	// }
	if(pswrd.length<5)
	{
		document.getElementById("span_pswrd").innerHTML="*too short password";
		return false;
	}
	if (pswrd!=repswrd)
	{
	document.getElementById("span_re_pswrd").innerHTML="*password not matched";    
    	return false;
	}
	getelement();
}

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

// validation process
function validate_voting_Form()
{
	document.getElementById("div_name").innerHTML="";//created so when error is removed the line showing error too gets remove since every time func will be called when click on submit
	document.getElementById("div_stid").innerHTML="";
	document.getElementById("div_email").innerHTML="";
	let vote_name=document.getElementById("name").value;
	let vote_email=document.getElementById("email").value;
	let vote_id=document.getElementById("stid").value;
	if(vote_name.length<5)
	{
		document.getElementById("div_name").innerHTML="*too short name";
         return false;
	}
	if(isNaN(vote_id))
	{
		document.getElementById("div_stid").innerHTML="*only numbers are allowed";
	    return false;
	}
	if(vote_email.charAt(vote_email.length-4)!='.')
	{
		document.getElementById("div_email").innerHTML="*email with missing .com extension";    
		return false;   
	}
	saveData();
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