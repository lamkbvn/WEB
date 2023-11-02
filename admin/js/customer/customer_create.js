document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("quickForm").addEventListener("submit", function () {
        var FirstName = document.getElementById("FirstName").value;
        var LastName = document.getElementById("LastName").value;
        var Email = document.getElementById("email").value;
        var Phone = document.getElementById("phone").value;
        var Add = document.getElementById("address").value;

        if (FirstName) {
            const customer = JSON.parse(localStorage.getItem("customer") || "[]");

            var newcustomer = {
                first: FirstName,
                last: LastName,
                email: Email,
                phone: Phone,
                address: Add

            };
            customer.push(newcustomer);


            
            localStorage.setItem("customer", JSON.stringify(customer));
        }



       
    });


});