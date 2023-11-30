var countDownDate = new Date('Dec 31,2023 23:59:59').getTime();//tạo thời gian sẽ đếm ngược

//cập nhật biến đếm mỗi 1s
var x = setInterval(function () {
    var today = new Date().getTime();//tạo thời gian hiện tại
    var distance = countDownDate - today;//tìm chênh lệch giữa thời gian hiện tại và thời gian đếm ngược

    var Days = Math.floor(distance / (24 * 60 * 60 * 1000));//tính ngày
    var Hours = Math.floor((distance % (24*60*60*1000)) / (60 * 60 * 1000));//tính giờ
    var Mins = Math.floor((distance % (60*60*1000)) / ( 60 * 1000));//tính phút
    var Secs = Math.floor((distance % (60 * 1000)) / 1000);//tính giây
    
    //nếu thời gian đếm ngược kết thúc, in ra 'Sorry, The Sales was Experied'
    if (distance>0) {
    //hiển thị kết quả
    document.getElementById('Days').innerHTML = Days;
    document.getElementById('Hours').innerHTML = Hours;
    document.getElementById('Mins').innerHTML = Mins;
    document.getElementById('Secs').innerHTML = Secs;
    };
}, 1000);
