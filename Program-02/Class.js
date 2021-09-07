class Person {
    constructor(id, name) {
        if (id.length != 13) this._id = 'unknown';
        else this._id = id;
        this._name = name;
    }
    //getter
    get id() {
        return this._id;
    }
    //setter
    set id(id) {
        this._id = id; //backing field
    }
    set name(name) {
        console.log('you are in setter ');
        this._name = name;
    }

    get name() {
        console.log('you are in getter ');
        return this._name;
    }
    //method
    toString() {
        return `person id = ${this._id}, person name= ${this._name}`;
    }
}

let per1 = new Person('1234567', 'SomSri');
per1.name = 'Umaporn';
console.log(per1.name);

//
//let per1 = new Person('1234567', 'SomSri');
//console.log(per1.toString());
//let per2 = new Person('1234567891234', 'Somsak');
//console.log(per2.toString());
//per2.getFirstNameLetter = function () {
//    return this._name.charAt(0);
//};

//console.log(per2.getFirstNameLetter());
//console.log(per1.getFirstNameLetter());
//per1.getFirstNameLetter is not a function
// Person.prototype.getFirstNameLetter = function () {
//   return this._name.charAt(0);
// };
// console.log(per2.getFirstNameLetter());
// console.log(per1.getFirstNameLetter());
class Student {
    constructor(stdId) {
        studentId = stdId;
    }
}
console.log(Object.prototype.isPrototypeOf(per1));
console.log(Person.prototype.isPrototypeOf(per1));
console.log(Student.prototype.isPrototypeOf(per1));

let player1 = {
    constructor(name){
        if(name)
        this.name = "unknown"
    }
}


