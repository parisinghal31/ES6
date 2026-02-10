//document.writeln("Hello")

//console.log("hello")
//-------------------------------------------------------------
//var a=10           //var->globally accessible
//a=20
//console.log(a)

// var a=10
// function show(){
//     console.log(10)
// }
// show()

//-----------------------------------------------------------
// function varTest(){
//     if(true){
//         let a=10      //let->block scope
//     }
//     console.log(a)
// }
// varTest()

//question1:
// let age=prompt("enter an integer: ")
// console.log(age)

//question3:
// let i=1;
// for(i=1;i<=5;i++){
//     console.log(i)
// }


//-----------------------------------------------------------
// const a=10         //const->fixed value
// a=20
// console.log(a)     //gives error


//question2:
// const pi=3.14
// console.log(pi)

//------------------------------------------------------------
//question4:
//properties of a class:
// const student=(name1:"Pari")  //student(class) can't be changed,name1(object) can be.
// console.log(student.name1)    
// // const student=(name:"vikas") // won't work
// // console.log(student.name1)
// student.name1="vikas"
// console.log(student.name1)      //will work


//behaviour of a class:
// const student={
//     name1:"pari", 
//     greet:function(){
//         console.log("hello, my name is: "+ this.name1)
//     }
// }
// student.greet()


//------------------------------------------------------------
//LEXICAL SCOPE:
// function outer(){
//     let a=10
//     function inner(){        //a is not defined in inner()
//         console.log(a)       //it will search for it in its parent i.e. outer()   
//     }
//     inner()
// }
// outer()


//outer() is not the parent of inner():
// function outer(){       
//     let a=10
// }
//     function inner(){
//         console.log(a)            //won't run
//     }
//     inner()
// outer()


// let a=5;
// function outer(){
//     let b=10;
//     function inner(){
//         let c=15;
//         console.log(a,b,c);
//     }
//     inner();
// }
// outer();

//-------------------------------------------------------------
//PRIME NUMBER CHECK:
// let n=Number(prompt("Enter an integer: "))
// if(n<=2){
//     console.log(n+ " is not a prime number")
// }
// else{
//     let flag=1
//     for(let i=2;i<=n/2;i++){
//         if(n%i===0){
//             flag=0
//             break
//         }
//     }
//     if(flag===1){
//         console.log(n+ " is a prime number")
//     }
//     else{
//         console.log(n+ " is not a prime number")
//     }
// }


//-------------------------------------------------------------

    // let marks=[20,25,34,12,19,30,40,32,21,40,80]
    // let names=['a','f','q','d','g','i','b','f','r','j','h']
    // for(let i=0;i<marks.length;i++){
    //     for(let j=0;j<marks.length-i-1;j++){
    //         if(marks[j]>marks[j+1]){
    //             let temp=marks[j]
    //             marks[j]=marks[j+1]
    //             marks[j+1]=temp
    //         }
    //     }
    // }
    // console.log(marks)

    // for(let )

//-----------------------------------------------------------
//TEMPLATE LITERALS:  avoids complex string concatenation
// let fname="Pari"
// let lname="Singhal"
// console.log(fname+" "+lname)
//console.log("hello my name is "+fname+lname)


// let fname="Pari"
// let lname="Singhal"
// console.log(`Hello my name is ${fname} ${lname}`) // ``->backtick

// let msg=`hello dear students
// welcome to the class of js
// focus on your topics`
// console.log(msg)

//------------------------------------------------------------
//ARROW FUNCTION:
// let add=function(a,b){
// return (a+b)
// }
// console.log("Sum is: "+add(2,3))

// let add=(a,b)=> a+b
// console.log(add(2,3))

// let a=20
// let b=10
// console.log(`The sum of ${a} and ${b} is ${a+b}`)

//------------------------------------------------------------
//this->current context/reference
// const obj={
//     name:"Pari",
//     age:18,
//     welcome:function(){
//         console.log("My name is:",this.name,"and my age is:",this.age)
//         console.log(this)
//     }
// }
// obj.welcome();
// obj.name="Naman"
// obj.welcome()
//console.log(this)

//-----------------------------------------------------------
//this is not used with functions
// function abc(){
//     let a=10
//     console.log(this.a)
// }
// abc()

//-----------------------------------------------------------
// `use strict`
// function abc(){
//     a=10
//     console.log(a);
// }
// abc();

//-----------------------------------------------------------
//Arrow function => : doesn't have its 'this'
// let add=(a,b)=>a+b
// console.log(add(7,8))

// let add=(a,b)=>({name:"Pari"})
// console.log(add(2,3))


// const obj={                    //object
//     name:"Rahul",              //name:attribute   
//     normalfn:function(){       //functions:behaviour
//         console.log("normal:",this.name)
//     },
//     arrowfn:()=>{
//         console.log("arrowfn:",this.name)
//     }
// }
// obj.normalfn()
// obj.arrowfn()

//-----------------------------------------------------
//Lexical scope of "this":
// const obj={
//     name:"Rahul",
//     showname:function(){
//         const arrowfn=()=>{
//             console.log("arrow:",this.name)
//         }
//         arrowfn()
//     }
// }
// obj.showname()


//=========================================================
//CALCULATOR:
// function calculator(a,b){
//     let op=prompt("Enter an operation: ")
//     switch(op){
//         case '+': console.log(a+b)
//         break;
//         case '-': console.log(a-b)
//         break;
//         case '*': console.log(a*b)
//         break;
//         case '/': if(b!=0){
//             console.log(a/b)
//         }
//         else{
//             console.log("cannot divide")
//         }
//         break;
//        default: console.log("invalid operator")
//        break;

//     }
// }
// calculator(3,4);


//---------------------------------------------------------------
// let number=[1,2,3,4,5]
// let [a,b,c]=number
// console.log(a,b,c)      //4,5 will be ignored

//-------------------------------------------------------------
// let numbers=[1,2,3,4,5]
// let[d,e,f,,h]=number
// console.log(d,h)        //4 will be ignored

//--------------------------------------------------------------
// let colors=['red','green','yellow']
// let[i,,k]=colors
// console.log(i,k)           //green will be skipped

//------------------------------------------------------------


