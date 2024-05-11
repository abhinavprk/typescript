let myData;
let unknownData;
//'any' type allows any type to be assigned to any type of variable. 
//'unknown' also allows any data to be assigned to the variable but when this variable is assigned to a specific type, it is not allowed
myData = 30;
myData = true;
let item;
//This will work
item = myData;
//The following will not work
//item = unknownData; 
if (typeof unknownData === "string") {
    item = unknownData;
}
