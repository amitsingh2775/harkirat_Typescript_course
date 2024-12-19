enum Arthemetic{   
    Add,
    Sub,
    Mul,
    Div
}
// by default it take vaules in enum
// enum Arthemetic{   
//     Add=0,
//     Sub=1,
//     Mul=2,
//     Div=3
// }

function Calculate(a:number,b:number,type:Arthemetic){
    console.log(type);
    
}
Calculate(1,2,Arthemetic.Div)