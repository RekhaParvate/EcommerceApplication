<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Shipping form connection</title>
</head>
<body>
	<form>
	<%@ page import="java.sql.*"%>
	<%@ page import="javax.sql.*"%>
	<%@page import="java.sql.ResultSet"%>
		<%
		String emailAddress=request.getParameter("email");
		String firstName=request.getParameter("fname");
		String lastName=request.getParameter("lname");
		String address1=request.getParameter("addr1");
		String address2=request.getParameter("addr2");
		String city=request.getParameter("city");
		String state=request.getParameter("state");
		String postalcode=request.getParameter("postalcode");
		String phoneno=request.getParameter("phoneno");


		
		
			Class.forName ("com.mysql.cj.jdbc.Driver").newInstance();
			java.sql.Connection con=DriverManager.getConnection("jdbc:mysql://localhost/login?" +"user=root&password=root");
			Statement stmt=con.createStatement();
			ResultSet rs;
			int i=stmt.executeUpdate("insert into login.shipping values('"+emailAddress+"','"+firstName+"','"+lastName+"','"+address1+"','"+address2+"','"+city+"','"+state+"','"+postalcode+"','"+phoneno+"')");
			
			String redirectURL = "success.jsp";
	        response.sendRedirect(redirectURL);
	 %>
	</form>
</body>
</html>