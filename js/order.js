function orderSuccess() {
    //information
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var Email = document.getElementById('email').value;
    var Address = document.getElementById('addr').value;
    var Phone = document.getElementById('phone').value;

    //Shipping
    var Standard = document.getElementById('Standard').checked;
    var Express = document.getElementById('Express').checked;
    var One_two = document.getElementById('1-2').checked;
    var Free = document.getElementById('Free').checked;

    //kiem tra
    if (firstName == '' || lastName == '' || Email == '' || Address == '') {
        return alert('Please fill out your information');
    }
    if (isNaN(Phone)) {
        return alert('Your Phone must be number');
    }
    //kiem tra chon phuong thuc giao hang
    if (Standard || Express || One_two || Free) {  
    } else {
        return alert('Please choose one Shipping Method');
    }
    return Order();
    
};
function Order() {
    alert("Order Succesfull");
    window.location.href = 'index.html';
}