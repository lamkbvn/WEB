document.addEventListener("DOMContentLoaded", function () {
    var productID = 1;
    var product = [];

    document.getElementById("quickForm").addEventListener("submit", function () {
        var productName = document.getElementById("productName").value;
        var category = document.getElementById("category").value;
        var price = document.getElementById("price").value;
        var price_origin = document.getElementById("price_origin").value;
        var product_image = document.getElementById("product_image").value;


        if (productName) {
            const product = JSON.parse(localStorage.getItem("product") || "[]");

            var newproduct = {
                id: productID,
                name: productName,
                category: category,
                price: price,
                price_origin: price_origin,
                image: "ảnh"
            };
            product.push(newproduct);
            productID++;

            
            localStorage.setItem("product", JSON.stringify(product));
        }



       
    });


});