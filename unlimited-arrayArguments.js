// function er vitor unlimited paremeter use korar techtic
/* function addNumbers(num1,num2) {
    const result=num1+num2;
    return result;
}
const result=addNumbers(22,33);
console.log(result); */

function addNumbers() {
    // console.log(arguments);
    // console.log(arguments[3]);
    let result=0;
    for(const num of arguments){
        result=result+num;
    }
    return result;
}
const result=addNumbers(22,55,88,99,55,66);
console.log(result);
// multi parameter use method
function getFullName(first,last) {
    // console.log(arguments);
    let fullName='';
    for(const name of arguments){
        fullName=fullName+' '+name;
    }
    return fullName;
}
const name2=getFullName('abdur','rohim','bin','abdur','rahman');
console.log(name2);