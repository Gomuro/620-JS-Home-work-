// Task1
function upperCase(test){
    
    let regex = /^[A-Z]/;

    if (regex.test(test)) {
        console.log("String's starts with uppercase character" )
    } else {
        console.log("String's not starts with uppercase character" )
    }
}
upperCase('regexp');
upperCase('RegExp');
// Task 2
function checkEmail(email) {
    const re = /^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return re.test(email);
}
console.log(checkEmail("Qmail2@gmail.com"));
//Task 3
let str = "cdbBdbsbz"
let regex = /d{1}b+d{1}/i;
let regex1 = /b{1}B/i;
let regex2 = /d/;
console.log( regex.exec(str),regex1.exec(str), regex2.exec(str));
// Task4
let re = /Script/i;
let secondRe = /^\w{4}/i;
let string = 'Java Script';
newString = string.replace(re, "Java");
newstring = newString.replace(secondRe, "Script");
console.log(newstring);
// Task5
function checkBankCardNumber(number) {
    let reBankCardNumber = /\d{4}-\d{4}-\d{4}-\d{4}/
    if (number.match(reBankCardNumber)) {
        console.log("All OK")
    } else {
        console.log("error:Enter normal num.")
    }
}
checkBankCardNumber("9999-9999-9999-9999")
// Task 6
function checkEmail(email) {
    const re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let i = /--*/;
    if (i.test(String(email).toLowerCase())){
        console.log("Email is not correct!")
    }else if (re.test(String(email).toLowerCase())) {
        console.log("Email is correct!")
    }else{
        console.log("Email is not correct!")
    }
    
}
checkEmail('my_mail@gmail.com');

checkEmail('#my_mail@gmail.com');

checkEmail('my_ma--il@gmail.com');
// Task 7
function checkLogin(login) {
    const re = /\w+\d\.\d\w{2,10}/
    const renumbers = /(\d\.\d|\d)/g
    const floatingNumber =/^[+-]?\d+(\.\d+)?$/

    console.log(re.test(login));
    console.log(login.match(renumbers))
    
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');