// JS File
        function Clear() {
          var getItem = document.getElementById("mn");
          if (getItem.value != "") {
            getItem.value = "";
          }
          var getPrice = document.getElementById("pn");
          if (getPrice.value != "") {
            getPrice.value = "";
          }
          var getQuantity = document.getElementById("not");
          if (getQuantity.value != "") {
            getQuantity.value = "";
          }
        }
        var movie = [];
        var person = [];
        var tickets = [];
        function Book() {
          if (
            document.getElementById("mn").value == "" ||
            document.getElementById("pn").value == "" ||
            +document.getElementById("not").value == ""
          ) {
            alert("Please Fill The Input Field!");
          } else {
            var table = document.getElementById("display");
            var row = table.insertRow(+1);
            var mn = row.insertCell(0);
            var pn = row.insertCell(1);
            var not = row.insertCell(2);

            mn.innerHTML = document.getElementById("mn").value;
            pn.innerHTML = document.getElementById("pn").value;
            not.innerHTML = +document.getElementById("not").value;
            movie.push(document.getElementById("mn").value);
            person.push(document.getElementById("pn").value);
            tickets.push(+document.getElementById("not").value);
          }
        }
function show() {
          if (
            document.getElementById("mn").value == "" ||
            document.getElementById("pn").value == "" ||
            +document.getElementById("not").value == ""
          ) {
            alert("No Entry Available Yet!");
          } else {
            document.write("<h2>Here is your list of bookings </h2><br><br>");
          for (var i = 0; i < movie.length; i++) {
            document.write("Movie Name: " + movie[i] + "<br>");
            document.write("Person Name: " + person[i] + "<br>");
            document.write("Ticket Number: " + tickets[i] + "<br><br><br>");
          }
          }
          
        }
    //   JS File