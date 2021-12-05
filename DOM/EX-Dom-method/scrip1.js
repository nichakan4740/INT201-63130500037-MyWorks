let titleEl = document.getElementById('title');//อ้างอิงผ่าน id
let contentEl = document.querySelector('.content');//อ้างอิงผ่าน class
let allEl = document.querySelectorAll('p');//อ้างอิงผ่าน teg

/* //การเข้าถึงเข้าไปเปลี่ยนแต่ละจุด เปลี่ยน style
titleEl.style.color ="red";
titleEl.style.backgroundColor ="black"; */

//หรือจะให้ทำงานก้เมื่อกดปุ่ม ทำการเพิ่มฟังก์ชั่น
function displayText(){
   /*  titleEl.style.color ="red";
    titleEl.style.backgroundColor ="black";  
    titleEl.style.fontSize ="20px"; */

    //การกำหนดใน class
    contentEl.setAttribute('class','contentNew')
}

