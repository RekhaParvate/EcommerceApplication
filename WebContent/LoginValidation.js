function validateLoginForm()
	{
			var err_email=false;
			var err_password=false;
			
			check_email();
			check_password();
			
			if(err_email===false && err_password===false)
			{
				
				return true;
			}
			else
			{
				return false;
			}
			function check_email()
			{
				var emailAddress=$("#email").val();
				var regemail=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

					if(emailAddress=='')
					{
						$("#emailerr").html("Please enter your email address");
						$("#emailerr").css("color","red");
						$("#email").css("border-bottom","2px solid red");
						err_email=true;	
					}
					else if(!regemail.test(emailAddress))
					{
						$("#emailerr").html("Enter valid email address");
						$("#emailerr").css("color","red");
						$("#email").css("border-bottom","2px solid red");
						err_email=true;	
					}
					else
					{
						$("#emailerr").hide();
						$("#email").css("border-bottom","2px solid black");
						err_email=false;
						
					}
			}	
			
			function check_password()
			{
				var password1=$("#pass").val();
					
					if(password1=='')
					{
						$("#passerr").html("Please enter password");
						$("#passerr").css("color","red");
						$("#pass").css("border-bottom","2px solid red");
						err_password=true;	
					}
					else if(password1.length<8)
					{
						$("#passerr").html("Enter valid password length minimum 8 character");
						$("#passerr").css("color","red");
						$("#pass").css("border-bottom","2px solid red");
						err_password=true;	
					}
					else
					{
						$("#passerr").hide();
						$("#pass").css("border-bottom","2px solid black");
						err_password=false;
						
					}
			}	
			
	}			
					