<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<title>Login Page Validation</title>
	<script>
			function Error()
			{
					$("#err").html("Sorry, this does not match our records. Check your spelling and try again.");
					$("#err").css("color","red");
			}
	</script>
</head>
<body>
	<script src="jquery.js" type="text/javascript"></script>
	<script src="http://code.jquery.com/jquery-3.3.1.js"></script>
	<%@ page import="java.sql.*"%>
	<%@ page import="javax.sql.*"%>
	<%@page import="java.sql.ResultSet"%>
	
	
		 

		<%! 
			String email2="";
			String pass2="";
			String email="";
			String password="";
		%>
		<%
		
			String emailAddr1=request.getParameter("email");
			String password1=request.getParameter("pass");
			
		
			Class.forName ("com.mysql.cj.jdbc.Driver").newInstance();
			java.sql.Connection con=DriverManager.getConnection("jdbc:mysql://localhost/login?" +"user=root&password=root");
			ResultSet rs;
			String sql = "select email,password from login.user";
			Statement stmt = con.createStatement();
			stmt.executeQuery (sql);
			rs = stmt.getResultSet();
			 while (rs.next ())
			 {
				email2=rs.getString("email");
				pass2=rs.getString("password");
			 
			 if(email2.equals(emailAddr1)&&pass2.equals(password1))
			 {
				email=email2;
				password=pass2;
			 }
			 }
			 if(email.equals(emailAddr1) && password.equals(password1))
			    {
				 	String redirectURL = "ProductListPage.html";
			        response.sendRedirect(redirectURL);
			    	
			    }
			 else{
				 	String redirectURL = "login.html";
			        response.sendRedirect(redirectURL);
			 	}	

		 %>
			
				      
		   	 
	<!-- 	<script>
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
					
					if(emailAddress=='')
					{
						$("#emailerr").html("Please enter your email address...");
						$("#emailerr").css("color","red");
						$("#email").css("border-bottom","2px solid red");
						err_email=true;	
					}
					else if(!emailAddress==email2)
					{
						$("#emailerr").html("Sorry, this does not match our records.");
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
						$("#passerr").html("Please enter password....");
						$("#passerr").css("color","red");
						$("#pass").css("border-bottom","2px solid red");
						err_password=true;	
					}
					else if(!password1==pass2)
					{
						$("#passerr").html("Sorry, this does not match our records.");
						$("#passerr").css("color","red");
						$("#pass").css("border-bottom","2px solid red");
						err_email=true;	
					}
					else
					{
						$("#passerr").hide();
						$("#pass").css("border-bottom","2px solid black");
						err_password=false;
						
					}
			}	
			
	}			
					
		
	</script>-->
</body>
</html>