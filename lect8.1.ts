// how to define arrray in typescript

type NumArray=number[]  // according to ele type you can user eg-> string[] or number[]

function solve(arr:NumArray):number{
    return arr[0];
}
let ans=solve([1,2,3])
console.log(ans);
//----------------------------------------------------------------------//

// another approach 
// it is dumb solution
// there is some problem in ans1 or ans2 when you hover on the both now it will popup a meessage it will either a string | number 
// when you want to convert ans2 into lowercase now its throw an error
type input=(number| string)[]  

function solve1(arr:input):(string | number){
    return arr[0];
}
let ans1=solve1([1,2,3])
let ans2=solve1(["one","3","three"])
console.log(ans1);
console.log(ans2);
// when here you want to to convert asn2 into lower now it will throw error

//-------------------------------------------------------//

// genric template -> it's solve this kind of problems

function getFirst<T>(arr:T[]){
    return arr[0]
}
let fist=getFirst([1,3,4]) // or let fist=getFirst<number>([1,3,4])
let second=getFirst(["no","hi"]) // or let second=getFirst<string>(["no","hi"])
 console.log(second.toLocaleLowerCase())

 // another example 
 //->Generics in TypeScript allow you to create reusable and type-safe components that work with any data type while maintaining strict type checking.
 type User={
    name:string,
    age:number
 }

 function getUser<T>(arr:T[]){
    return arr[0];
 }

 let res=getUser<User>([
    {
        name:"amit",
        age:21
    },
    {
        name:"ashish",
        age:21
    }
 ])
 console.log( "result ",res.name);

 // swap number or string
 type Val={
    a:number | string,
    b:number | string
 }

 function swap(nums:Val){
    let c=nums.a;
    nums.a=nums.b;
    nums.b=c;
    return nums

 }
 console.log(swap({a:5,b:6}));
 console.log(swap({a:"hii",b:"bey"}));
 
 // using genric template

 function swap1<T>(a:T,b:T): [T,T] {
         let temp=a
         a=b
         b=temp
         return [a,b]
 }
 console.log(swap1<number>(8,9));
 console.log(swap1<string>("amit","kumar"));

//  function swap2<T, U>(val1: T, val2: U): [U, T] {
//     let temp = val1;
//     val1 = val2;
//     val2 = temp;
//     return [val1, val2];
// }

// console.log(swap2(8, "am")); 

//------------------------------------------------//

// partial in typscript
// Use Case:
// When you need to work with objects where not all properties are required.

// means i have more fields and i want to update one either more in which place i can use partial

interface Todo{
    title:string,
    discription:string,
    content:string,
    done:boolean
}
type InputTodo=Partial<Todo>

function UpdateTodo(id:number,newProps:InputTodo){
    // do something
}
UpdateTodo(1,{
    title:"hiid",
})




 

