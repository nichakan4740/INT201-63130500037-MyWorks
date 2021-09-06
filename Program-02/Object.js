/*//การเก็บ Array ใน object 
let rabbit = [
    {
        name: "Mini",
        breed: "Lion Head",
        coloe: "White",
        weight: 1.2
    },
    {
        name: "Minny",
        breed: "Lion dwart",
        coloe: "White",
        weight: 1.2
    },
    {
        name: "kikikkk",
        breed: "Lion Headder",
        coloe: "White",
        weight: 1.2
    }
]
//การ loop ออกมาจาก Array ใช้ forEach เป็นการ loop ใน Array โดยเฉพาะ
rabbit.forEach((rabbit) =>{
    console.log(`name ${rabbit.name} , bred ${rabbit.breed}`);
});


//Object กระต่ายตัวน้อยตัวนิด
let rebbit = {
    name: "Mini",
    breed: "Lion Head",
    coloe: "White",
    weight: 1.2
};
//การเปลี่ยนข้อมูล
rebbit.name = "kukki"
การเข้าถึงข้อมูล
console.log(rebbit);
console.log(rebbit);

//การใช้ for-in และ for-of for-in (key จะเปลี่ยนชื่อเป็นอะไรก็ได้ตามความเหมาะสม)
for (let key in rebbit) {
    console.log(`${key} = ${rebbit[key]}`)
};


//การใช้ methods ใน Object
let rebbit = {
    name: "Mini",
    breed: "Lion Head",
    coloe: "White",
    weight: 1.2,
    talk: function () { //การใช้ methods3 จะใช้แบบนี้ก็ได้ talk(){..........}
        console.log(`${this.name} = kuku`);
    },
    weightDetail: function () {
        if (this.weight < 1) {
            return "น้อย"
        } else if (this.weight > 2) {
            return "มาก"
        }
        return "ปกติ";
    }
};
//การเรียกใช้
rebbit.talk();
console.log(rebbit.weightDetail());*/

// Constructor ใน object
function Rebbit(name,breed,color,weigth){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.weight = weigth;

} 
let rebbit1 = new ("Mini","Lion Head", "White",1.2);
let rebbit2 = new( "Minii","Lionm Headv","Whitek", 2.2);

console.log(rebbit1);
console.log(rebbit2);

