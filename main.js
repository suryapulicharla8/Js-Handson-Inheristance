// Q1

const parent={
    firstName:'surya',
    lastName:'pulicharla',
    fullName(){
        return (this.firstName+" "+this.lastName)
    }
}
const child={
    __proto__:parent
}
console.log(child.fullName());

// 
arr=[2,3,4,5,6,7];
const arrsum={
    addAll:function(arr){
        let sum=0
        for(let i=0;i<=arr.length;i++){
            sum=sum+arr[i]
        }
        console.log(sum)
    }
}
Array.__proto__=arrsum;
Array.addAll(arr)

array=[2,3,4,5,6]
let sum=0
for(let i=1;i<=array;i++){
    sum=sum+array[i]
}
console.log(sum)


a=15;
b=12;
if(a>12){
    console.log(a-b);{
        if((a-b)!==3){
            console.log('hello Surya')
        }
        else{
            console.log('bye surya')
        }
    }
}else{
    console.log(b-a)
}

arr=[1,2,3,4,5,6,7];
// console.log(arr.length)
// console.log(typeof arr)
// let sum=0
// for(let i=1;i<arr.length;i++){
//     sum=sum+arr[i];{
//     }
// }
// console.log(sum);
// if(sum<=30){
//     console.log('Ur genious')
// }else{
//     console.log('u r not genious')
// }

// // arr1=[10,15,39,45,67,87,98,87]
// // let min=[];
// // for(let i=1;i<arr1.length;i++){
// //     if(arr1[i]>min){
// //         min=arr1[i]// console.log(min)
// //     }
// //     console.log(min)
// // }
// a=10;
// b=15;
// c=20;
// switch(a){
//     case "+":
//         return (b+c);
//     break;
//     case "-":
//         return (b-c);
//     break;
//         case '/':
//             return (a/b);
//         break;
//         case '%':
//             return (a%b);
        

// }



// q2

const o={
    a:1,
    b:2,
    __proto__:{
        b:3,
        c:4,
        __proto__:{
            d:5,
        }
    }
}
console.log(o.d)

// q3
arr=[1,2,3,4,5,6,7];
arr1=[2,3,4,5,6,7,8];
arr2=[4,5,6,7,7,8,9]
const arrySum={
    addAll:function(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum=sum+arr[i]
        }
        console.log(sum)
    }
}
Array.__proto__=arrySum;
Array.addAll(arr)
Array.addAll(arr1);
Array.addAll(arr2);
