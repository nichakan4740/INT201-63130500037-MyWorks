let teg = document.getElementsByTagName('p');//อ้างอิงผ่าน teg
let id = document.getElementById('demo');//อ้างอิงผ่าน id
/* 
//การเปลี่ยนแปลงข้อความ
id.innerText = "เรียนรู้การทำ js"; */

/* //หรือการเปลี่ยนผ่านปุ่ม
function displayText(){
    id.innerText="เรียนรู้การทำ js DOM";//แสดงผลการเปลี่ยนข้อมูล
}
 */

/* //หรือการเปลี่ยนผ่านปุ่ม
function displayText(){
    id.innerHTML="<strong>เรียนรู้การทำ js DOM <strong>";//การใช้ innerHTML สามารถทำให้ข้อความนั้นสามารถแทรก tag HTML ลงไปได้
}
 */

/* 
//การมีตัวแปรแล้วอยากจะเอาไปใส่
let x =10;
let y =20;
function displayText(){
   // id.innerHTML = "แสดงข้อมุลในตัวแปร = "+x+ "แสดงข้อมูลในตัวแปร ="+y; //แสดงผล 
    id.innerHTML =`แสดงข้อมูลในตัวแปร x =${x} แสดงข้อมูลในตัวแปร y =${y}`;
} */


// การแสดงผลโดยใช้ class ซึ่งใน class นั้นจะเหมาะกับการใช้ querySelecto แต่อันอื่นก็ยังใช้ได้
let b = document.querySelector('.myjs'); //ผ่าน Class
let c = document.querySelector('#demo'); //ผ่าน id
let d = document.querySelector('p'); // ผ่าน teg ซึ่งถ้ามีหลาย tag ก็จะเอามาเฉพาะอันแรกเท่านั้น
let e = document.querySelectorAll('p'); // ดึง teg ทุกตัว