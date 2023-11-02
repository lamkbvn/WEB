
var product = JSON.parse(localStorage.getItem("product") || "[]");

function showproduct() {


    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");

    for (var i = 0; i < product.length; i++) {

        var newRow = document.createElement("tr");


        var cell1 = document.createElement("td");
        cell1.textContent =i+1;

        var cell2 = document.createElement("td");
        cell2.textContent = product[i].category;

        var cell3 = document.createElement("td");
        cell3.textContent = product[i].name;

        var cell4 = document.createElement("td");
        cell4.textContent = product[i].price;

        var cell5 = document.createElement("td");
        cell5.textContent = product[i].price_origin;

        var cell6 = document.createElement("td");
        cell6.textContent = product[i].image;

        var cell7 = document.createElement("td");
        cell7.innerHTML = '<a href="#">Edit</a>';

        var cell8 = document.createElement("td");
        cell8.innerHTML = '<a href="#" onclick= "deleteProduct(' + i + ')">Delete</a>';


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

function deleteProduct(index) {
    product.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(product));
    var table = document.getElementById("example1");
    var tbody = table.querySelector("tbody");
    tbody.innerHTML = "";

    showproduct();
}


    showproduct();

