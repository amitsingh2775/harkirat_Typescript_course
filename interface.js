// interface spacie the type of object i think its same like class and object
function greet(user) {
    return "hello mr " + user.name + " you are " + user.age + " years old ";
}
function signup(data) {
    return "your name is " + data.name + " and " + data.email + "and" + data.password;
}
console.log(greet({
    name: "amit",
    age: 21
}));
console.log(signup({
    name: "aradhya",
    email: "aradjya@gmail.com",
    password: "wretrertr"
}));
