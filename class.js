class Student{
    constructor(sID,sName){
        this.id = sID;
        this.name = sName;
        this.school = "Lalmonirhat Govt School"
    }
}

const student1 = new Student(12,"Apurba");
const student2 = new Student(01,"Anik");
const student3 = new Student(29,"Dhuru")
// console.log(student1,student2);
console.log(student1.name,student2.name);
console.log(student3);
