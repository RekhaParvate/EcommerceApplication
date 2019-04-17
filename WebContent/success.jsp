<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
		<title>Success Page</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link href="style2.css" rel="stylesheet" type="text/css">

</head>
<body class="jspform">
	<form class="jspform1">
	<%@ page import="java.sql.*"%>
	<%@ page import="javax.sql.*"%>
	<%@page import="java.sql.ResultSet"%>
		<%! 
			/*String firstname1="";
			String lastname1="";
			String email1="";*/
			
			String emailAddress="";
			String firstName="";
			String lastName="";
			String address1="";
			String address2="";
			String city="";
			String state="";
			String postalcode="";
			String phoneno="";
		%>
	<%

			Class.forName ("com.mysql.cj.jdbc.Driver").newInstance();
			java.sql.Connection con=DriverManager.getConnection("jdbc:mysql://localhost/login?" +"user=root&password=root");
			ResultSet rs;
			Statement stmt = con.createStatement();

			String qry = "select email,firstname,lastname,address_line1,address_line2,city,state,postalcode,phoneno from login.shipping";
			stmt = con.createStatement();
			stmt.executeQuery (qry);
			rs = stmt.getResultSet();
			while (rs.next ())
			 {
				emailAddress=rs.getString("email");
				firstName=rs.getString("firstname");
				lastName=rs.getString("lastname");
				address1=rs.getString("address_line1");
				address2=rs.getString("address_line2");
				city=rs.getString("city");
				state=rs.getString("state");
				postalcode=rs.getString("postalcode");
				phoneno=rs.getString("phoneno");
			 }
			 
	%>
	<center>
	<br><br><br><br><br>
	<table>
		<tr>
			<b>
			<th class="th">Shipping Address</th>
			</b>
		</tr>
		<tr>
			<td rowspan="10" align="left">
				
					EmailId : <%out.println(emailAddress);%><br>
					
					Name : <%out.print(firstName+" ");
					out.println(lastName);%><br>
					
					Address_Line1 : <%out.println(address1);%><br>
					
					Address_Line2 : <% out.println(address2);%><br>
					
					City : <%out.println(city);%><br>
					
					State : <%out.println(state);%><br>
					
					Postal_Code : <%out.println(postalcode);%><br>
					
					Phone_Number : <%out.println(phoneno);%><br>
			</td>
		
	</table>
	</center>
	</form>
</body>
</html>