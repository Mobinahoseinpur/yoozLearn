// !-----------------------------register-----------------------------------
// var userName = prompt('enter your username : ')
// var password = prompt('enter your pass : ')
// if(userName.length < 3 || password.length < 8){
//     alert('نام کاربری و یا رمز عبور اشتباه است ')
// }else{
//     alert("welcome to yooz")
// }
// !----------------------login---------------------------------------------
// var userName= prompt('enter your username : ')
// if(userName.toLowerCase() == "pouria"){
//     alert("success")
// }else{
//     alert("please try again")
// }
// !------------------------------------------------------------------------
// var text = "to ke pishie mani o miawoooo"

// console.log(text.slice(-8));
// console.log(text.substring(-6));

// !------------------------math--------------------------------------------
// console.log(Math.PI);
// console.log(Math.pow(2,3));//2**3
// console.log(Math.sqrt(36));
// console.log(Math.abs(-30));
// console.log(Math.min(25,30,33,50,5,4,85));
// console.log(Math.max(25,30,33,50,5,4,85));
// console.log(Math.floor(15.9))
// console.log(Math.round(15.5))
// console.log(Math.ceil(15.1));
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*100000));
// !-----------------------------register-----------------------------------
// var captchaCode = Math.floor(Math.random()*100000);
// document.write(captchaCode)
// var userName = prompt('enter your username : ')
// var password = prompt('enter your pass : ')
// var capcha = prompt(captchaCode," ")
// if(userName.length < 3 || password.length < 8 || capcha!= captchaCode){
//     alert('نام کاربری و یا رمز عبور اشتباه است ')
// }else{
//     alert("welcome to yooz")
// }
// !----- Assignment
// var number = 10

// number += 5 // number = number + 5

// console.log(number)

// number -= 8 // number = number - 3

// number *= 3 // number = number * 3

// number /= 2 // number = number / 2

// number **= 2 // number = number ** 2

// number++ // number += 1 // number = number + 1
// ++number
// number++

// number--
// --number

// console.log(number)

// !-------
// var number1 = 0

// var number2 = number1++
// var number2 = ++number1

// var number2 = --number1
// var number2 = number1--

// console.log("number1: ", number1) 
// console.log("number2: ", number2)  
// !----------------------------supermarket-----------------------------
//man to frooshgahi kar mikonam va mikham user 5 ta kala begire qeymat ro bigram va jam kol bezanam

// var sumPrice=0;
// for(var i=0;i<5 ;i++){
//     sumPrice=sumPrice+Number(prompt("enter price : "))
// }
// alert("your cost : "+ sumPrice +" $")
//!----------------------------be dast avordan adad zoj beyn adad-------
// var num1=Number(prompt("enter first number :"))
// var num2=Number(prompt("enter second number :"))
// if (num1%2===0) {
//     while(num1<=num2){
//         console.log(num1)
//         num1+=2
//     }
// }else{
//     num1++;
//     while(num1<=num2){
//         console.log(num1)
//         num1+=2
//     }
// }
// !-----------------------do while-------------
// var i=0
// do{
//     console.log("do while :" +i);
//     i++
// }while(i>1)

// while(i>1){
//     console.log(" while :" +i);
//     i++
// }
// !------------------array------------------------
var user = ['u1', 'u2', 'u3']
console.log(user);
console.log(user[1]);
user[3] = "u6"
console.log(user);
user.push("uP")//value ra be akhar araye ezafe mikone
console.log(user);
user.pop()//az akhar araye hazf mikone
console.log(user);
user.shift();//az aval araye hazf mikone
console.log(user)
user.unshift(1, 2, 3)
console.log(user)//be aval araye ezafe mikone

// !---------------miabgin ba array---------

var userNumbers = []  // [12, 89, 13, 65, 21, 90]

var userNumber = 0
var sum = 0

while (userNumber != -1) {
	userNumber = Number(prompt('Enter the number: \n enter -1 if you dont enter any number'))
	if (userNumber != -1) {
		userNumbers.push(userNumber)
	}
}

for (var i = 0; i < userNumbers.length; i++) {
	// console.log(userNumbers[i])
	sum += userNumbers[i]
}

console.log(userNumbers)
console.log("Average: ", sum / userNumbers.length)