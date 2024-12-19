// how to define arrray in typescript
function solve(arr) {
    return arr[0];
}
var ans = solve([1, 2, 3]);
console.log(ans);
function solve1(arr) {
    return arr[0];
}
var ans1 = solve1([1, 2, 3]);
var ans2 = solve1(["one", "3", "three"]);
console.log(ans1);
console.log(ans2);
// when here you want to to convert asn2 into lower now it will throw error
//-------------------------------------------------------//
// genric template -> it's solve this kind of problems
function getFirst(arr) {
    return arr[0];
}
var fist = getFirst([1, 3, 4]); // or let fist=getFirst<number>([1,3,4])
var second = getFirst(["no", "hi"]); // or let second=getFirst<string>(["no","hi"])
console.log(second.toLocaleLowerCase());
function getUser(arr) {
    return arr[0];
}
var res = getUser([
    {
        name: "amit",
        age: 21
    },
    {
        name: "ashish",
        age: 21
    }
]);
console.log("result ", res.name);
function swap(nums) {
    var c = nums.a;
    nums.a = nums.b;
    nums.b = c;
    return nums;
}
console.log(swap({ a: 5, b: 6 }));
console.log(swap({ a: "hii", b: "bey" }));
// using genric template
function swap1(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log(swap1(8, 9));
console.log(swap1("amit", "kumar"));
function swap2(val1, val2) {
    var temp = val1;
    val1 = val2;
    val2 = temp;
    return [val1, val2];
}
console.log(swap2(8, "am")); // Correct function name used here
