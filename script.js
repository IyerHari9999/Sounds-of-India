function sendMail(params) {
	var tempParams ={
		from_name:document.getElementById("fromName").value,
		phone_number:document.getElementById("phoneNumber").value,
		mail_Id:document.getElementById("mailId").value,
		comments:document.getElementById("comment").value,
	};
		if (tempParams.form_name=="" || tempParams.mail_Id=="" || tempParams.phone_number=="" ){  
	  	alert("Please fill all the required fields!");  
		}
		else if(tempParams.phone_number.length!=10){  
	  	alert("Please enter a valid mobile number!");  
		}	
		else {
		emailjs.send('service_o8tpe2c','template_8s2ye9w',tempParams)
		.then(function(res){
		console.log("success",res.status);})
	  	alert("Your Information has been submitted successfully.");
	  	document.getElementById("fromName").value="";
	  	document.getElementById("mailId").value="";
	  	document.getElementById("phoneNumber").value="";
	  	document.getElementById("comment").value="";
	  	}  
	
	}

function showhide()
    {  
         var div = document.getElementById("sidebar");  
         if (div.style.display != "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
    } 