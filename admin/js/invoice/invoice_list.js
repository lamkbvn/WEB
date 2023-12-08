
var invoices = JSON.parse(localStorage.getItem("invoices") || "[]");

function showinvoice() {
    
    
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");

    for (var i = 0; i < invoices.length; i++) {

        var newRow = document.createElement("tr");


        var cell1 = document.createElement("td");
        cell1.textContent =i+1;

        var cell2 = document.createElement("td");
        cell2.textContent = invoices[i].customer;

        var cell3 = document.createElement("td");
        cell3.textContent = invoices[i].cart;

        var cell4 = document.createElement("td");
        cell4.textContent = invoices[i].create;


        var cell5 = document.createElement("td");
        cell5.innerHTML = '<a href="#">Edit</a>';

        var cell6 = document.createElement("td");
        cell6.innerHTML = '<a href="#" onclick= "deleteInvoice('+i+')">Delete</a>';


        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell6);


        tbody.appendChild(newRow);
    }
}

function deleteInvoice(index) {
    invoices.splice(index, 1);
    localStorage.setItem("invoices", JSON.stringify(invoices));
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");
    tbody.innerHTML ="";    

    showinvoice();
}


showinvoice();

