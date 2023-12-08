document.addEventListener("DOMContentLoaded", function () {
    var cartID = 1;
    var cart = [];

    document.getElementById("quickForm").addEventListener("submit", function () {
        var productName = document.getElementById("productName").value;
        var price = document.getElementById("price").value;
        var quantity = document.getElementById("quantity").value;
        var total = document.getElementById("total").value;

        if (productName) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");

            var newcart = {
                id: cartID,
                name: productName,
                price: price,
                quantity: quantity,
                total: total

            };
            cart.push(newcart);
            cartID++;

            // document.getElementById("categoryName").value = "";
            
            localStorage.setItem("cart", JSON.stringify(cart));
            // window.location.href="category_list.html";
        }



       
    });


});