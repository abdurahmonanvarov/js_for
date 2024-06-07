// if da masalalar

//1-masala
/**
 * let a = +prompt('ozgaruvchini kiriting')
let b = +prompt('ozgaruvchini kiriting')
let c = +prompt('ozgaruvchini kiriting')
if (a>b || b>c && c>0){
  console.log('Shart bajarildi');
}else{
  console.log('Shart bajarilmadi');
}

 */

//3-masala
/**
 * let a = +prompt('ozgaruvchini kiriting')
let b = +prompt('ozgaruvchini kiriting')
let c = +prompt('ozgaruvchini kiriting')
let d = +prompt('ozgaruvchini kiriting')
let yeg = a+b+c+d;

if (a>10 || b>10 || c>10 || d>10 || yeg==50){
  console.log('Yegindi katta va hech bolmaganda ulardan biri 10 dan katta');
}else{
  console.log('Natijada hatolik bor');
}
 */

//4-masala
/**
 * let a = +prompt('ozgaruvchini kiriting')
let b = +prompt('ozgaruvchini kiriting')

let kop = a*b;
let qush = a+b;

if (kop <100 || qush > 20 && a%2==0){
  console.log('Shart bajarildi');
}else{
  console.log('Shart bajarilmadi');
}
 */

//6-masala
/**
 * let a = +prompt('ozgaruvchini kiriting')
let b = +prompt('ozgaruvchini kiriting')

if (a%b==0 && b>0 || b%5==0){
  console.log('Shart bajarildi');
}else{
  console.log('Shart bajarilmadi');
}
 */

//7-masala
/**
 * let a = +prompt('ozgaruvchini kiriting')
let b = +prompt('ozgaruvchini kiriting')
let c = +prompt('ozgaruvchini kiriting')
let kv = a**2;


if (a>0 && b>0 && c>0  && kv>b || c%2==1 ){
  console.log('Shart bajarildi');
}else{
  console.log('Shart bajarilmadi');
}
 */

//9-masala
/**
 * let a = +prompt('ozgaruvchini kiriting')
let b = +prompt('ozgaruvchini kiriting')
let c = +prompt('ozgaruvchini kiriting')
let kv = a**2;


if (b>10 && a>b || c<15){
  console.log('Shart bajarildi');
}else{
  console.log('Shart bajarilmadi');
}
 */

//stringlar qoldi

//Ternary

//1-masala
//let a = +prompt('sON KIRITING')
//a>0 ? console.log('Musbat') : console.log('Mainfiy');

//2-masala
//let a = +prompt('sON KIRITING')
//let b = +prompt('sON KIRITING')
//(a>b) ? console.log('Birinchi son katta') : console.log('Ikkinchi son katta ');

//5-masala
//let a = +prompt('sON KIRITING')
//(a>0) ? console.log('Musbat son') : console.log('Nol yoki naifiy son');

//Switch

//1masala
/**
 * let a = +prompt("Hafta kunini kiriting");
switch (a) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshnba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
  case 7:
    console.log("Yakshnba");
    break;

  default:
    console.log("Unday hafta kuni mavjud emas");
    break;
}

 */

//2-masala
/**
let a = +prompt("Hafta kunini kiriting");
 * switch (a) {
  case 1:
    console.log("Yanvar");
    break;
  case 2:
    console.log("Fevral");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Aprel");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Iyyun");
    break;
  case 7:
    console.log("Iyyul");
    break;
  case 8:
    console.log("Avgust");
    break;
  case 9:
    console.log("Sentabr");
    break;
  case 10:
    console.log("oktabr");
    break;
  case 11:
    console.log("Noyabr");
    break;
  case 12:
    console.log("Dekabr");
    break;

  default:
    console.log("Unday oy mavjud emas");
    break;
}
 */

//4-masala
/**
 * let a = +prompt("Oy raqamini kiriting");
switch (a) {
  case 12:
  case 1:
  case 2:
    console.log("Qish");

    break;
  case 3:
  case 4:
  case 5:
    console.log("Bahor");

    break;

  case 6:
  case 7:
  case 8:
    console.log("Yoz");

    break;

  case 9:
  case 10:
  case 11:
    console.log("Kuz");

    break;

  default:
    console.log("Bunday oy tartibi mavjud emas");
    break;
}

 */

//5-masala
/**
 * let a = +prompt("Iltimos 1dan 5 gacha son kiriting");
switch (a) {
  case 1:
    console.log("Birinchi");

    break;

  case 2:
    console.log("Ikkinchi");

    break;

  case 3:
    console.log("Uchinchi");

    break;

  case 4:
    console.log("Tortinchi");

    break;

  case 5:
    console.log("Beshinchi");

    break;

  default:
    break;
}
 */

//for 

//1-masala
for (let i = 1; i>=10; i**2){
  console.log(i);
}
