var myVal = "10";
myVal = 44;
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + ' ' + b.toString();
    }
}
console.warn(combine(5, 20));
console.warn(combine("Abhinav", "Prakash"));
