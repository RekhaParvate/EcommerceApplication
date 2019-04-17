function validateShippingForm()
{
	
	var err_email=false;
	var err_fname=false;
	var err_lname=false;
	var err_address=false;
	var err_city=false;
	var err_state=false;
	var err_pcode=false;
	var err_phoneno=false;
	
	check_email();
	check_fname();
	check_lname();
	check_address();
	check_city();
	check_state();
	check_pcode();
	check_phoneno();
	
	if(err_email===false && err_fname===false && err_lname===false && err_address===false && err_city===false && err_state===false && err_pcode===false && err_phoneno===false)
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
					$("#erremail").html("Please enter your email address");
					$("#erremail").css("color","red");
					$("#email").css("border-bottom","2px solid red");
					err_email=true;	
				}
				else if(!regemail.test(emailAddress))
				{
					$("#erremail").html("Enter valid email address");
					$("#erremail").css("color","red");
					$("#email").css("border-bottom","2px solid red");
					err_email=true;	
				}
				else
				{
					$("#erremail").hide();
					$("#email").css("border-bottom","2px solid black");
					err_email=false;
					
				}
		}	
		
		function check_fname()
		{
				var firstName=$("#fname").val();
				var reg=/[a-zA-Z]/;

				if(firstName=='')
				{
					$("#errfname").html("Please enter your First Name");
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
					$("#errlname").html("Please enter your last Name");
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
	function check_address()
		{
				var address=$("#addr1").val();
				var reg=/[a-zA-Z]/;

				if(address=='')
				{
					$("#erraddr").html("Please enter your Address");
					$("#erraddr").css("color","red");
					$("#addr1").css("border-bottom","2px solid red");
					err_address=true;	
				}
				else if(!reg.test(address))
				{
					$("#erraddr").html("Enter valid Address");
					$("#erraddr").css("color","red");
					$("#addr1").css("border-bottom","2px solid red");
					err_address=true;	
				}
				else
				{
					$("#erraddr").hide();
					$("#addr1").css("border-bottom","2px solid black");
					err_address=false;
					
				}
		}	
	function check_city()
		{
			var City1=$("#city").val();
				var reg=/[a-zA-Z]/;

				if(City1=='')
				{
					$("#errcity").html("Please enter your City");
					$("#errcity").css("color","red");
					$("#city").css("border-bottom","2px solid red");
					err_city=true;	
				}
				else if(!reg.test(City1))
				{
					$("#errcity").html("Enter valid City");
					$("#errcity").css("color","red");
					$("#city").css("border-bottom","2px solid red");
					err_city=true;	
				}
				else
				{
					$("#errcity").hide();
					$("#city").css("border-bottom","2px solid black");
					err_city=false;
					
				}
		}						
	

	function check_state()
		{
			var State1=$("#state").val();

				if(State1=='state')
				{
					$("#errstate").html("Please select state");
					$("#errstate").css("color","red");
					$("#state").css("border-bottom","2px solid red");
					err_state=true;	
				}
				else
				{
					$("#errstate").hide();
					$("#state").css("border-bottom","2px solid black");
					err_state=false;
					
				}
		}
	function check_pcode()
		{
			var pcode=$("#postalcode").val();
			var regpcode=/(^\d{5}$)/;

				if(pcode=='')
				{
					$("#errpcode").html("Please enter your postalcode");
					$("#errpcode").css("color","red");
					$("#postalcode").css("border-bottom","2px solid red");
					err_pcode=true;	
				}
				else if(!regpcode.test(pcode))
				{
					$("#errpcode").html("Enter valid postalcode ie'10001'");
					$("#errpcode").css("color","red");
					$("#postalcode").css("border-bottom","2px solid red");
					err_pcode=true;	
				}
				else
				{
					$("#errpcode").hide();
					$("#postalcode").css("border-bottom","2px solid black");
					err_pcode=false;
					
				}
		}			
	function check_phoneno()
		{
			var phoneno1=$("#phoneno").val();
			var regno=/^[7-9]\d{9}$/;

				if(phoneno1=='')
				{
					$("#errpno").html("Please enter your phone number");
					$("#errpno").css("color","red");
					$("#phoneno").css("border-bottom","2px solid red");
					err_phoneno=true;	
				}
				else if(!regno.test(phoneno1))
				{
					$("#errpno").html("Enter valid phone number");
					$("#errpno").css("color","red");
					$("#phoneno").css("border-bottom","2px solid red");
					err_phoneno=true;	
				}
				else
				{
					$("#errpno").hide();
					$("#phoneno").css("border-bottom","2px solid black");
					err_phoneno=false;
					
				}
		}	

}