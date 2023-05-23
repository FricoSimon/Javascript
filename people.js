class People {
    constructor(name = "Friko", age = 20, gender = "Male") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    work() {
        return `${this.name} sedang bekerja`;
    }
};
class Student extends People {
    constructor(name, age, gender, university) {
        super(name, age, gender)
        this.university = university;
    }
}

const philip = new People("Philip", 22, "Male");
const juhendi = new People("Juhendi", 21, "Male");
const wilson = new People("Wilson", 21, "Male");
const friko = new People();
const silvano = new Student("Sill", 23, "Male", "ITHB");

console.log(philip);
console.log(juhendi);
console.log(wilson);
console.log(friko);
console.log(friko.work());
console.log(silvano);
console.log(silvano.work());

