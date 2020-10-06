function InsertRecord()  
        {  
            var date = document.getElementById('date').value;  
            var start = document.getElementById('start').value;  
            var end = document.getElementById('end').value;  
            var hours = document.getElementById('hours').value;
  	    var p_name = document.getElementById('p_name').value;
            if (date.length != 0 || start.length !=0 || end.length !=0|| hours.length !=0)  
            {  
                var connection = new ActiveXObject("ADODB.Connection");  
                var connectionstring = "Data Source=.;Initial Catalog=EmpDetail;Persist Security Info=True;User ID=sa;Password=****;Provider=SQLOLEDB";  
                connection.Open(connectionstring);  
                var rs = new ActiveXObject("ADODB.Recordset");  
                rs.Open("insert into Emp_Info values('" + date + "','" + start + "','" + end + "','" + hours + "')", connection);  
                alert("Insert Record Successfuly");  
                date.value = " ";  
                connection.close();  
            }  
            else  
            {              
                alert("Please enter all details!!! ");  
            }  
        }  
        function ShowAll()  
        {  
                var connection = new ActiveXObject("ADODB.Connection");  
                var connectionstring = "Data Source=.;Initial Catalog=EmpDetail;Persist Security Info=True;User ID=sa;Password=****;Provider=SQLOLEDB";  

                connection.Open(connectionstring);  
                var rs = new ActiveXObject("ADODB.Recordset");  
                rs.Open("select * from Emp_Info ", connection);  
                rs.MoveFirst();  
                var span = document.createElement("span");  
                span.style.color = "Blue";  
                span.innerText = "  Date " + "  Start " + "  End" + " Hours " + " Project Name";  
                document.body.appendChild(span);  
                while (!rs.eof)  
                {  
                    var span = document.createElement("span");  
                    span.style.color = "green";  
                    span.innerText = "\n " + rs.fields(0) + " |  " + rs.fields(1) + " |  " + rs.fields(2) + " |  " + rs.fields(3) + " |  " + rs.field(4);  
                    document.body.appendChild(span);  
                    rs.MoveNext();  
                }  
                rs.close();  
                connection.close();  
            }   
    </script>  
