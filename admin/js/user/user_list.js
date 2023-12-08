
var user = JSON.parse(localStorage.getItem("user") || "[]");

function showuser() {
    
    
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");

    for (var i = 0; i < user.length; i++) {

        var newRow = document.createElement("tr");


        var cell1 = document.createElement("td");
        cell1.textContent =i+1;

        var cell2 = document.createElement("td");
        cell2.textContent = user[i].customer;

        var cell3 = document.createElement("td");
        cell3.textContent = user[i].level;

        var cell4 = document.createElement("td");
        cell4.textContent = user[i].username;

        var cell5 = document.createElement("td");
        cell5.textContent = user[i].password;

        var cell7 = document.createElement("td");
        cell7.innerHTML = '<a href="#">Edit</a>';

        var cell8 = document.createElement("td");
        cell8.innerHTML = '<a href="#" onclick= "deleteUser('+i+')">Delete</a>';


        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell7);
        newRow.appendChild(cell8);


        tbody.appendChild(newRow);
    }
}

function deleteUser(index) {
    user.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(user));
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");
    tbody.innerHTML ="";    

    showuser();
}


showuser();

