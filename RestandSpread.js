// oldarr=[1,2,3,4,5,6]
// newarr=[...oldarr,7,8,9]  //SPREAD
// console.log(newarr)


//-----------------------------------------------------------
// function add(a,b,c){
//     return a+b+c
    
// }
// nums=[1,2,3]
// //console.log(add(1,2,3))
// console.log(add(...nums))


//------------------------------------------------------------
//merge two arrays using the spread operator
// const csStudents=["Akash","Ashish","Naresh"]
// const itStudents=["Rahul","Raman","Shyam"]
// const allStudents=[...csStudents,...itStudents]
// console.log(allStudents)


//------------------------------------------------------------
//REST
//create a function using the rest operator to accept multiple numbers and return their sum
// const sum=(...num)=>{
//     total=0
//     num.forEach((n)=>{
//         total+=n
//     })
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7)


//------------------------------------------------------------
//passing array elements as function arguments using spread
// function showDetails(name,...skills){
//     console.log(name)
//     console.log(skills)
// }
// showDetails("Akash","JS","Java","Dart")


//------------------------------------------------------------
//copy and update an object using spread:
// const num=[1,3,4,5,7]
// const nums=[...num]

// const student={
//     name:"Pari",
//     age:18,
//     city:"Modinagar",
//     country:"India"
// }
// const updatedStudent={...student,city:"Moradabad",country:"India"}
// console.log(student)
// console.log(updatedStudent)

//-----------------------------------------------------------
// let marks=[80]
// let[math=0,science=0]=marks
// console.log(math)
// console.log(science)


// let marks=[]
// let[math=80,science=70]=marks
// console.log(math)
// console.log(science)


// let marks=[0,null]
// let[math=10,science=20]=marks
// console.log(math)
// console.log(science)
//-----------------------------------------------------------

// let product={
//     name:"Laptop"
// }
// let{name,price=0}=product;
// console.log(name)
// console.log(price)


