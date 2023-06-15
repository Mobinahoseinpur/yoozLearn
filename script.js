// !-----------------------------register-----------------------------------
var userName = prompt('enter your username : ')
var password = prompt('enter your pass : ')
if(userName.length < 3 || password.length < 8){
    alert('نام کاربری و یا رمز عبور اشتباه است ')
}else{
    alert("welcome to yooz")
}
// !----------------------login---------------------------------------------
var userName= prompt('enter your username : ')
if(userName.toLowerCase() == "pouria"){
    alert("success")
}else{
    alert("please try again")
}
// !------------------------------------------------------------------------
var text = "to ke pishie mani o miawoooo"

console.log(text.slice(-8));
console.log(text.substring(-6));

// !------------------------math--------------------------------------------
console.log(Math.PI);
console.log(Math.pow(2,3));//2**3
console.log(Math.sqrt(36));
console.log(Math.abs(-30));
console.log(Math.min(25,30,33,50,5,4,85));
console.log(Math.max(25,30,33,50,5,4,85));
console.log(Math.floor(15.9))
console.log(Math.round(15.5))
console.log(Math.ceil(15.1));
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*100000));
// !-----------------------------register-----------------------------------
var captchaCode = Math.floor(Math.random()*100000);
document.write(captchaCode)
var userName = prompt('enter your username : ')
var password = prompt('enter your pass : ')
var capcha = prompt(captchaCode," ")
if(userName.length < 3 || password.length < 8 || capcha!= captchaCode){
    alert('نام کاربری و یا رمز عبور اشتباه است ')
}else{
    alert("welcome to yooz")
}