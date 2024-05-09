var literal = 5;
literal = "abhinav";
function combineHere(a, b, inputType) {
    if (inputType === 'number') {
        return (+a) + (+b);
    }
    else if (inputType === 'boolean') {
        return a && b;
    }
    else {
        return a.toString().concat(' ').concat(b.toString());
    }
}
console.warn(combineHere(6, 6, 'number'));
console.warn(combineHere(true, true, 'boolean'));
console.warn(combineHere('Abhinav', 'Prakash', 'string'));
