// task 2


console.log('Данилович');

// task 3

let x, y ;
x = 5;
y = 10;
alert(x);
alert(y);
x = y;
alert(x);
alert(y);
// task 4

let obj = {
    str:'string',
    num: 10,
    bool: true,
    und: undefined,
    nul: null
}

// task 5

let isAdult = confirm('are you eighteen?');
console.log(isAdult);

// task 6


let firstName, secondName, groupNum, yearOfBirth;

firstName = 'Юрій';
secondName = 'Данилович';
groupNum = '620 JavaScript Core'
yearOfBirth = 2003;

let maritalStatus = false;

console.log(typeof yearOfBirth,typeof maritalStatus,typeof firstName,typeof secondName,typeof groupNum);
console.log(yearOfBirth, maritalStatus, firstName, secondName, groupNum);

let unde, nul;
nul = null;
console.log(typeof unde,typeof nul);

//task 7

let login , email , password;
login = prompt('what is your login?', 'Oleh')
email = prompt('what is your email?', 'Oleh@gmail.com')
password = prompt('what is your password?', 'Lv-620.JSCore21')

alert('Dear ' + login +', your email is ' + email + ', your password is: ' + password);

// task 8
let hour, era, month;
// в годині
hour = 60*60;

//добі
era = hour*24;

//місяці
month = era*31;

// виводить на екран
alert('Скількі секунд в: годині '+ hour +' добі '+ era +' місяці ' + month);
