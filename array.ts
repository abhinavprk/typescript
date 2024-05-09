let arr:string[] = ['php','js', 'ts'];

arr.push('net');
arr[2]= 'roma';

console.warn(arr);
console.warn(arr.join(':'));

let ran:[string,number,string] = ['php',123, 'ts'];

let arrVal:(string | number)[] = ['php',123, 'ts'];