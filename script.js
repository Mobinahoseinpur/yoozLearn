// document.write('<h2>salam</h2>')

// let num=10;

// if(num==10){
// console.log('true')
// }else{
// console.log('false')
// }

// --------------------------------------------------------------
// let num=7;
// if(num%6==0){
//     document.write('<h3>even number</h3>')
// }else{
//     document.write('<h3>odd number</h3>')
// }
// -------------------------------------------------------------------
// let num=0
// if(num>0){
//     document.write('<h3>positive number</h3>')
//     if(num%2==0){
//         document.write('<h4>even number</h4>')
//     }else{
//         document.write('<h4>odd number</h4>')
//     }
// }else if(num<0){
//     document.write('<h3>negativ number</h3>')
// }else{
//     document.write('equal 0')
// }
// ---------------------------------
// let num=4;
// if(num>0 && num%2==0)
//     document.write('<h3>positive and even</h3>')
// ---------------------------------------------
let day="sunday"

switch (day) {
    case "sunday":
        document.write('<h1>الپرازولام</h1>')
        break;
    case "monday":
        document.write('<h1>اسنترا</h1>')
        break;
    case "tuesday":
        document.write('<h1>استامینوفن</h1>')
        break;

    default:
        document.write('دیتا نامعتبر')
        break;
}