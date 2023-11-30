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

    //Payment
    var Credit = document.getElementById('Credit').checked;
    var Paypal = document.getElementById('Paypal').checked;
    var CardNumber = document.getElementById('Card_number').value;
    var CardName = document.getElementById('Card_name').value;
    var Month = document.getElementById('month').value;
    var CVV = document.getElementById('Paypal').value;

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
    //chon phuong thuc thanh toan
    if (Credit || Paypal) {
    } else {
        return alert('Please choose one Payment');
    }
    if (Credit) {
        if (CardName == '' || CardNumber =='' || Month =='' || CVV =='') {
            return alert('Please fill out your Credit Card information');
        }
    }
    return Order();
    
};
function Order() {
    alert("Order Succesfull");
    window.location.href = 'index.html';
}