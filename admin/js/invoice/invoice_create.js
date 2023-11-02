document.addEventListener("DOMContentLoaded", function () {
    var invoice = [];
    document.getElementById("quickForm").addEventListener("submit", function () {


        var CustomerID = document.getElementById("customerID").value;
        var CartID = document.getElementById("cartID").value;
        var Created = document.getElementById("created").value;

        if (CustomerID) {
            const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");

            var newinvoice = {
                customer: CustomerID,
                cart: CartID,
                create: Created
            };

            invoices.push(newinvoice);

            localStorage.setItem("invoices", JSON.stringify(invoices));
        }
    });
});