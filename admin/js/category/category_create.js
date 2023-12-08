document.addEventListener("DOMContentLoaded", function () {
    var categoryID = 1;
    var category = [];

    document.getElementById("quickForm").addEventListener("submit", function () {
        var categoryName = document.getElementById("categoryName").value;

        if (categoryName) {
            const category = JSON.parse(localStorage.getItem("category") || "[]");

            var newcategory = {
                id: categoryID,
                name: categoryName
            };
            category.push(newcategory);
            categoryID++;

            // document.getElementById("categoryName").value = "";
            
            localStorage.setItem("category", JSON.stringify(category));
            // window.location.href="category_list.html";
        }



       
    });


});