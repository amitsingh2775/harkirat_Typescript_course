function Greet(Person) {
    return "your name is " + Person.name + "height is " + Person.props.Height;
}
console.log(Greet({
    name: "amit",
    props: {
        Height: 12,
        age: 25
    }
}));
function RenderShap(shape) {
    console.log("render shape");
}
function calculateArea(shape) {
    console.log("area calculated");
}
RenderShap({
    redius: 29,
    height: 45,
    side: 45
});
function Render(circle) {
    var width = circle.borderRedious;
    console.log("width", width);
}
Render({
    redious: 45,
    borderRedious: 455466
});
