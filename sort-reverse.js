const sorted=[2,4,6,5,3,7,9,8,0,1];//single digit sorting method
const sortedNumbers=sorted.sort();
// double or more than one digit sortin method
const multidigit=[9,2,3,5,1,29,99,77,88,66,654,87897,465465,2,55,44,55,66,33,22,11]
const sortedMulti=multidigit.sort(function(a,b){
    return a-b;
})
console.log(sortedMulti);
console.log(sortedNumbers)
const sortedText=['bc','ef','ab','cd','de','fg','hi','gh'];
const result=sortedText.sort();
console.log(result);

// revers method. ultiye fela. shes theke soro kore prothome asa.
const names=['rohime','korim','rofik','tarek','jabbar','altaf','billal'];
const namesResult=names.reverse();
console.log(namesResult);