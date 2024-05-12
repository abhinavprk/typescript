
class Parent {
    
    public name:string;
    public city:string;

    constructor(name:string, city:string){
            this.name = name;
            this.city = city;
    }

    getCity(){
        return this.city;
    }
}