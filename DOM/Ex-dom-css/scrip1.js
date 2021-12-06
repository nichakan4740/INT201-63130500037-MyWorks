const box = document.getElementById('box');
let statuss;

//การเพิ่ม class list
function addDarkMode(){
    box.classList.add("darkMode");
}

//การลบ
function removeDarkMode(){
    box.classList.remove("darkMode");
}

//การสลับ
function toggle(){
    box.classList.toggle("darkMode");
    //การเช็คเก็บสถานะเป็น true falsed
    statuss =box.classList.contains("darkMode");
    //เอามาใช้ประโยชน์ในการเช็ค
    if(statuss){
        box.style.color="yellow";
    }else{
        box.style.color="red";
    }
}