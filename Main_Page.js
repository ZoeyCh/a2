function LogInForm(event){
	
	var elements = event.currentTarget;

	var e = elements[0].value;
	var p = elements[1].value;
	
	var result = true;
	
	var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;   
	var pswd_v = /^(\S*)?\w+(\S*)?$/;
	
	document.getElementById("email_msg").innerHTML = "";
	document.getElementById("pswd_msg").innerHTML = "";
	
	if(e == null||e == ""||email_v.test(e) == false){
		document.getElementById("email_msg").innerHTML = "Invalid Email address .";
		result = false;
	}
	if(p == null||p == ""||pswd_v.test(p) == false||p.length < 8){
		document.getElementById("pswd_msg").innerHTML = "Invalid password .";
		result = false;
	}
    if (result == false){
    	
    	event.preventDefault();
    }
	
}
function ResetForm(event){ 
	   document.getElementById("email_msg").innerHTML ="";
	   document.getElementById("pswd_msg").innerHTML ="";
	   
	   
    }
	
