//Tuple is a fixed length array with fixed typing for every index

let role:(number| string)[] = ['admin', 'manager',1,3]


let roleTupleVal:[string, string, number, number] = ['abhi', 'anu', 12,15];

//The fifth element is an optional element.
let roleTuple:[string, string, number, number, boolean?] = ['abhi', 'anu', 12,15];

roleTuple.push(false);
roleTuple.push(34);

console.warn(roleTuple);

roleTupleVal.push('an');

console.warn(roleTupleVal);