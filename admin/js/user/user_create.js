document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("quickForm").addEventListener("submit", function () {
        var customer = document.getElementById("customerID").value;
        var level = document.getElementById("level").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (customer) {
            const user = JSON.parse(localStorage.getItem("user") || "[]");

            var newuser = {
                customer: customer,
                level: level,
                username: username,
                password: password

            };
            user.push(newuser);


            
            localStorage.setItem("user", JSON.stringify(user));
        }



       
    });


});