
class Person{

    constructor(private name:string, public age:number, public email:string){}


    getName():string{
        return this.name;
    }
    
}

let p = new Person("Abhinav", 34, "email");
console.warn(p.age);

p.age = 43;

console.warn(p.getName());
