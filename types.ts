
// you can't use type to extends classes
type PersonProperties={
    Height:number,
    age:number
}

type NewPersonInterface={
    name:string,
    props:PersonProperties
}
function Greet(Person:NewPersonInterface){
     return "your name is "+Person.name+"height is "+Person.props.Height
}
console.log(Greet({
    name:"amit",
    props:{
        Height:12,
        age:25
    }
}));


//
 interface Circule{
    redius:number,
    borderwidth?:number // this is optional either you can pass either not
 }
 interface Square{
    side:number
 }
 interface Rectangle{
     side:number,
     height:number
 }

 type Shape=Circule | Square | Rectangle

 function RenderShap(shape:Shape){
     console.log("render shape");
     
 }
 function calculateArea(shape:Shape){
    console.log("area calculated");
    
 }
 RenderShap({
    redius:29,
    height:45,
    side:45

 })

 // example
 interface NewCircuil{
    redious:number,
    borderRedious?:number
 }

 function Render(circle:NewCircuil){
    let width:(number | undefined)=circle.borderRedious
    console.log("width",width);
    
 }
 Render({
    redious:45,
    borderRedious:455466
 })