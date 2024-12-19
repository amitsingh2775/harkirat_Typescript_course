var Arthemetic;
(function (Arthemetic) {
    Arthemetic[Arthemetic["Add"] = 0] = "Add";
    Arthemetic[Arthemetic["Sub"] = 1] = "Sub";
    Arthemetic[Arthemetic["Mul"] = 2] = "Mul";
    Arthemetic[Arthemetic["Div"] = 3] = "Div";
})(Arthemetic || (Arthemetic = {}));
function Calculate(a, b, type) {
    console.log(type);
}
Calculate(1, 2, Arthemetic.Div);
