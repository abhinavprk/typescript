// It is a type for function return type

function tryReturn(){
    //return true;
}

console.log(tryReturn());

//This is never type. It returns "Uncaught error". No need to write return type although it shows it is void return type but it is actually never type
function apiErrorMain(msg:string, code:number){
    throw {message:msg, apiCode:code};
}

//This is never type. It returns "Uncaught error"
function apiError(msg:string, code:number):never{
    throw {message:msg, apiCode:code};
}

console.log(apiError('Server Side Error', 500));