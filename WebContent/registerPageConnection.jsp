
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
		<title>Login Page</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link href="style2.css" rel="stylesheet" type="text/css">
		<script src="jquery.js" type="text/javascript"></script>
		<script src="http://code.jquery.com/jquery-3.3.1.js"></script>
		<script type="text/javascript"></script>
		<script type="text/javascript" src="LoginValidation.js"></script>
</head>
	<body class="loginpage">
	<center>
	<!-- <form action="LoginPageValidation.jsp" id="form1" class="form1" >-->
	
	<%@ page import="java.sql.*"%>
	<%@ page import="javax.sql.*"%>
	<%@page import="java.sql.ResultSet"%>
	
	<%
		String firstName=request.getParameter("fname");
		String lastName=request.getParameter("lname");
		String emailAddr1=request.getParameter("email1");
		String password1=request.getParameter("pass1");
		
		
			Class.forName ("com.mysql.cj.jdbc.Driver").newInstance();
			java.sql.Connection con=DriverManager.getConnection("jdbc:mysql://localhost/login?" +"user=root&password=root");
			Statement stmt=con.createStatement();
			int i=stmt.executeUpdate("insert into login.user values('"+firstName+"','"+lastName+"','"+emailAddr1+"','"+password1+"')");
			 
			String redirectURL = "login.html";
			response.sendRedirect(redirectURL);				
	 %>
		
	
			<!-- <h1>LOGIN PAGE</h1><br><br>

			<img src="img4.jpg">
			<div class="div2">
			<p id="err"></p>
				<b><label for="email" >Email Address</label></b><br>
				<input type="text" name="email" id="email" class="in">
				<p id="emailerr"></p><br>
				
				<b><label for="password" >Password</label></b><br>
				<input type="password" name="pass" id="pass" class="in">
				<p id="passerr"></p><br><br>

				<button id="btn1" onclick="return validateLoginForm()">SIGN IN</button><br><br>
			<div>
			
		</form>
		<form action="Register.html">
		<button id="btn2">REGISTER</button>
		</form>
		</center>-->
	</body>
</html>
