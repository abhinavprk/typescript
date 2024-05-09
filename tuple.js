//Tuple is a fixed length array with fixed typing for every index
var role = ['admin', 'manager', 1, 3];
var roleTupleVal = ['abhi', 'anu', 12, 15];
//The fifth element is an optional element.
var roleTuple = ['abhi', 'anu', 12, 15];
roleTuple.push(false);
roleTuple.push(34);
console.warn(roleTuple);
roleTupleVal.push('an');
console.warn(roleTupleVal);
