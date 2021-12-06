/* const teatAll = document.querySelectorAll('p');
//การเข้าถึงในแต่ละข้อความในแต่ละnodes
let message = teatAll[1].innerHTML; //เก็บข้อมูลข้อความที่จะดึงออกมาในนี้ก่อน
console.log(message);
 */


//การเพิ่ม nodes
/* const menu =document.getElementById('menu');
let count = 1; */
/* const item = document.createElement('li')//สร้าง El ใหม่ดดยใช้ js สร้างแทนที่จะไปสร้างในหน้า HTML
item.innerText = "Item"; // เพิ่มข้อความ
menu.appendChild(item); // การเพิ่มลูกให้กับแม่  */


//การเพิ่มปุ่ม
/* function addItem(){//เมื่อมีการกด 1 ครั้งจะสร้าง El ใหม่มา 1 ตัว
    const item = document.createElement('li')//สร้าง El ใหม่ดดยใช้ js สร้างแทนที่จะไปสร้างในหน้า HTML
    item.innerText = "Item" +(count++); //กดแล้วจะเพิ่มค่า
    menu.appendChild(item); // การเพิ่มลูกให้กับแม่
}
 */



//การลบลูก 
const menu =document.getElementById('menu'); //สร้างเพื่อเก้บค่าแม่ก่อน
const item =document.getElementById('item-3'); //สร้างตัวที่จะลบบ


//การแทนที่
const itemB =document.getElementById('item-2');
const newItem =document.createElement('li');
newItem.innerText = 'x';//ตัวใหม่ที่จะมาแทนที่

/* menu.removeChild(item); //การลบออก */
/* menu.replaceChild(newItem,itemB);//แทนที่ */


//หรือจะลบผ่านฟังก์ชั่นลบออกแบบนี้ก็ได้
function deleteItem(){   
    menu.removeChild(item);
}

function replaceItem(){
    menu.replaceChild(newItem,itemB); 
}