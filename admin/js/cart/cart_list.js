
var cart = JSON.parse(localStorage.getItem("cart") || "[]");

function showcart() {
    
    
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");

    for (var i = 0; i < cart.length; i++) {

        var newRow = document.createElement("tr");


        var cell1 = document.createElement("td");
        cell1.textContent =i+1;

        var cell2 = document.createElement("td");
        cell2.textContent = cart[i].name;

        var cell3 = document.createElement("td");
        cell3.textContent = cart[i].price;

        var cell4 = document.createElement("td");
        cell4.textContent = cart[i].quantity;

        var cell5 = document.createElement("td");
        cell5.textContent = cart[i].total;

        var cell6 = document.createElement("td");
        cell6.innerHTML = '<a href="#">Edit</a>';

        var cell7 = document.createElement("td");
        cell7.innerHTML = '<a href="#" onclick= "deleteCart('+i+')">Delete</a>';


        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell6);
        newRow.appendChild(cell7);

        tbody.appendChild(newRow);
    }
}

function deleteCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");
    tbody.innerHTML ="";    

    showcart();
}


showcart();

