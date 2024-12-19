interface PersonInterface{
    name:string,
    age:number,
    greet():string
}

class Person implements PersonInterface{
    name: string
    age: number

    constructor(name:string,age:number){
        this.name=name,
        this.age=age
    }
    greet(){
        return "your name is "+ this.name
    }
}

const personObject=new Person("amit",21)
console.log(personObject.name);
console.log(personObject.greet());


