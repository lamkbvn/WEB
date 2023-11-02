
    var category = JSON.parse(localStorage.getItem("category") || "[]");

    function showcategory() {
        
        
        var table = document.getElementById("example1");
        var tbody = table.querySelector("tbody");

        for (var i = 0; i < category.length; i++) {

            var newRow = document.createElement("tr");


            var cell1 = document.createElement("td");
            cell1.textContent =i+1;
            var cell2 = document.createElement("td");
            cell2.textContent = category[i].name;
            var cell3 = document.createElement("td");
            cell3.innerHTML = '<a href="#">Edit</a>';
            var cell4 = document.createElement("td");
            cell4.innerHTML = '<a href="#" onclick= "deleteCategory('+i+')">Delete</a>';


            newRow.appendChild(cell1);
            newRow.appendChild(cell2);
            newRow.appendChild(cell3);
            newRow.appendChild(cell4);


            tbody.appendChild(newRow);
        }
    }

    function deleteCategory(index) {
        category.splice(index, 1);
        localStorage.setItem("category", JSON.stringify(category));
        var table = document.getElementById("example1");
        var tbody = table.querySelector("tbody");
        tbody.innerHTML ="";    
    
        showcategory();
    }
  

    showcategory();

