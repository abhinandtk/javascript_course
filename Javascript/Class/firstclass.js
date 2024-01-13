

class Student{
    name;
    age;
    dob;
    constructor(name,age,dob){
    this.name=name
    this.age=age
    this.dob=dob
    }
    static findMin(...arr){
        console.log(arr,'func');
        let ar=arr.map((item)=>item.dob)
        console.log(Math.min(...ar));
    }
}
let student1=new Student("abhi",22,14)
let student2=new Student("amal",23,14)
let student3=new Student("aju",25,16)

console.log(student1,'st1');
console.log(student2,'st2');
console.log(student3,'st3');
let names={name:"abhi",age:20}

// findMin(student1,student2,student3)
Student.findMin(student1,student2,student3)