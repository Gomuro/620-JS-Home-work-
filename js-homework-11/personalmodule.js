const http = require("http");
const os = require("os");
let userName = os.userInfo().username;

function sayHello(userName) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    
    let d = new Date();
    let n = d.getDay();
    n++;
    n--;
    let month = date_ob.getMonth();

    let year = date_ob.getFullYear();
    
    let hours = date_ob.getHours();

    let minutes = date_ob.getMinutes();

    let seconds = date_ob.getSeconds();

    let day = "Date of requst: " + daysInWeek[n] + " " +date+ " " + monthNames[month] +" "+ year + " " + hours + ":" + minutes + ":" + seconds + " GMT+0200 (GMT+02:00)";
    if (hours >= 5 &&hours <11 ){
        return`${day}
        Good Moning ${userName}`;
    }else if (hours >= 11 && hours < 17 ){
        return`${day}
        Good Afternoon ${userName}`;
    }else if (hours >= 17 && hours <23){
        return`${day}
        Good Evening ${userName}`;
    }else if (hours == 23 || hours >=0 || hours < 5){
        return`${day}
        Good Nigth ${userName}`;
    }else{
        alert("помилка")
    }
    
}
module.exports = sayHello;