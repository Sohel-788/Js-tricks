const products=[
    'lanovo i5 6gen laptop',
    'Hp I7 7Gen Laptop',
    'Dell core i5 6gen laptoP',
    'Toshiba 3rd gen laptop',
    'apple latest model Laptop',
    'silver color i7 8gen Laptop',
    'Mi 3rd gen laPtop',
    'Pixel latest model ',
    'walton i7 8gen ',
    'Pixel latest model Laptop',
    'walton i7 8gen lapTop'
]
const searching='laptop';
//indexOf laptop
const output=[];
for(const product of products){
    if (product.indexOf(searching)!=-1) {
        // output.push(product);
    }
}
console.log(output);

// javascript যেহেতু case sensitive language তাই শুধু মাত্র মেচিং রিজাল্ট কে আউট পুট দিচ্ছে। 
// case convertion method দিয়ে সব গুলো কে আউটপুট হিসেবে নেওয়া যায়। নিম্নরুপ
//by indexOf method
for(const product of products){
    if (product.toLowerCase().indexOf(searching.toLowerCase())!=-1) {
        // output.push(product);
    }
}
console.log(output);

//by includesOf
for(const product of products){
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
console.log(output);

//by startsWith method
for(const product of products){
    if  (product.toLowerCase().startsWith(searching.toLowerCase())){
        // output.push(product);
    }
}
console.log(output);

// endsWith method
for(const product of products){
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output);