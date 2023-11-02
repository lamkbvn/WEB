
var customer = JSON.parse(localStorage.getItem("customer") || "[]");

function showcustomer() {
    
    
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");

    for (var i = 0; i < customer.length; i++) {

        var newRow = document.createElement("tr");


        var cell1 = document.createElement("td");
        cell1.textContent =i+1;

        var cell2 = document.createElement("td");
        cell2.textContent = customer[i].first;

        var cell3 = document.createElement("td");
        cell3.textContent = customer[i].last;

        var cell4 = document.createElement("td");
        cell4.textContent = customer[i].email;

        var cell5 = document.createElement("td");
        cell5.textContent = customer[i].phone;

        var cell6 = document.createElement("td");
        cell6.textContent = customer[i].address;

        var cell7 = document.createElement("td");
        cell7.innerHTML = '<a href="#">Edit</a>';

        var cell8 = document.createElement("td");
        cell8.innerHTML = '<a href="#" onclick= "deleteCustomer('+i+')">Delete</a>';


        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell6);
        newRow.appendChild(cell7);
        newRow.appendChild(cell8);


        tbody.appendChild(newRow);
    }
}

function deleteCustomer(index) {
    customer.splice(index, 1);
    localStorage.setItem("customer", JSON.stringify(customer));
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");
    tbody.innerHTML ="";    

    showcustomer();
}


showcustomer();

