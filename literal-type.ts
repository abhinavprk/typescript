let literal: 5|"abhinav" = 5;

literal = "abhinav";

//In literal types you can only assign the already decided values
//literal= 54;

type input = 'number' | 'boolean' | 'string';

function combineHere(a:number|boolean|string, b:number|boolean|string, inputType:input){
    if(inputType === 'number' ){
        return (+a) + (+b);

    } else if(inputType === 'boolean') {
        return a && b ;

    } else{
        return a.toString().concat(' ').concat(b.toString());
    }
}

console.warn(combineHere(6,6, 'number'));
console.warn(combineHere(true, true, 'boolean'));
console.warn(combineHere('Abhinav', 'Prakash', 'string'));