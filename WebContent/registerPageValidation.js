function registerPageValidation1()
{
	var err_fname=false;
	var err_lname=false;
	var err_email=false;
	var err_password=false;
	
	check_fname();
	check_lname();
	check_email();
	check_password();

	if(err_fname===false && err_lname===false && err_email===false && err_password===false)
	{
		 registerPageConnection.jsp;
		 return true;
	}
	else
	{
		return false;
	}
	
	function check_fname()
	{
			var firstName=$("#fname").val();
			var reg=/[a-zA-Z]/;

			if(firstName=='')
			{
				$("#errfname").html("Please enter First Name");
				$("#errfname").css("color","red");
				$("#fname").css("border-bottom","2px solid red");
				err_fname=true;	
			}
			else if(!reg.test(firstName))
			{
				$("#errfname").html("Enter valid First name");
				$("#errfname").css("color","red");
				$("#fname").css("border-bottom","2px solid red");
				err_fname=true;	
			}
			else
			{
				$("#errfname").hide();
				$("#fname").css("border-bottom","2px solid black");
				err_fname=false;
				
			}
	}
	
	function check_lname()
	{
			var lastName=$("#lname").val();
			var reg=/[a-zA-Z]/;

			if(lastName=='')
			{
				$("#errlname").html("Please enter last Name");
				$("#errlname").css("color","red");
				$("#lname").css("border-bottom","2px solid red");
				err_lname=true;	
			}
			else if(!reg.test(lastName))
			{
				$("#errlname").html("Enter valid last name");
				$("#errlname").css("color","red");
				$("#lname").css("border-bottom","2px solid red");
				err_lname=true;	
			}
			else
			{
				$("#errlname").hide();
				$("#lname").css("border-bottom","2px solid black");
				err_lname=false;
				
			}
	}
	
	function check_email()
	{
		var emailAddress=$("#email1").val();
		var regemail=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
			
			if(emailAddress=='')
			{
				$("#erremail").html("Please enter your email address");
				$("#erremail").css("color","red");
				$("#email1").css("border-bottom","2px solid red");
				err_email=true;	
			}
			else if(!regemail.test(emailAddress))
			{
				$("#erremail").html("Enter valid email address");
				$("#erremail").css("color","red");
				$("#email1").css("border-bottom","2px solid red");
				err_email=true;	
			}
			else
			{
				$("#erremail").hide();
				$("#email1").css("border-bottom","2px solid black");
				err_email=false;
				
			}
	}	
	
	function check_password()
	{
		var password1=$("#pass1").val();
			
			if(password1=='')
			{
				$("#errpass").html("Please enter password");
				$("#errpass").css("color","red");
				$("#pass1").css("border-bottom","2px solid red");
				err_password=true;	
			}
			else if(password1.length<8)
			{
				$("#errpass").html("Enter valid password length minimum 8 character");
				$("#errpass").css("color","red");
				$("#pass1").css("border-bottom","2px solid red");
				err_password=true;	
			}
			else
			{
				$("#errpass").hide();
				$("#pass1").css("border-bottom","2px solid black");
				err_password=false;
				
			}
	}	
}