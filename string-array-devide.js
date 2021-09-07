const anthem='Aamar sonar bangla ami tomai valo basi';
// split method. এটা দিয়ে নির্দিষ্ট অংশ বাদে বাকি দের কে ভাগ করা যায় কোন একটা এরে থেকে। 
const word=anthem.split(' ');
// const word=anthem.split(' ',3); একটা নির্দিষ্ট সংখ্যা পর্যন্ত
// const withoutA=anthem.split('a')

//slice method.//array theke index diye ekta specific portion ke slice kora jai
const portion=anthem.slice(5,13) /* //array theke index diye ekta specific portion ke slice kora jai. tobe 2nd parameter er index number theke ager index number porjonto */

//substr method. eta diye 1st parameter index number theke, porer যথগুলো দরকার 
const portion13=anthem.substr(5,13) // mane 5 number index theke porer 13 ta character dorkar

//sub string method. jus like slice method
const portion12=anthem.substring(5,11);

//concat method. eta diye doi ta string k add kora jai
const first='Aamar';
const second='Sonar';
// const full=first+second+'bangla'; // without concat method
// const full =first.concat(second).concat('bangla')
const full =first.concat(second).concat('bangla');

// join method. eta diye array element k eksathe add kora jai
const joinMethod=['a','m','r','s','o','nar'];
const joinMethod2=['amar','sonar','bangla'];
// const joinM=joinMethod.join('');
// const joinM=joinMethod.join(' ');
const joinM=joinMethod2.join(',')
console.log(joinM);

/* //splice method. specific element delete kora, arra theke. slice diye array theke ekta portion neoya jai and array ta thik thake but splic diye array theke ekta portion neoyar por r oi array ta thik thake na */
const array=[1,2,3,5,4,6,4,7,5];
/* const splice=array.splice(3,3); // 3rd index theke porer 3 elements delete kora hoise
console.log(array);
console.log(splice); */
// splice diye element delete korar por new element add korra jai, perameter diye
const splice2=array.splice(4,3,44,55,66,77);
console.log(splice2);
console.log(array);