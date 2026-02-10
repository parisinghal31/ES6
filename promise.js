// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing Asynchronous tasks")
//     },3000)
// })
// promiseOne.then(function(){
//     console.log("Promise executed")
// })

//-----------------------------------------------------------

// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing Asynchronous tasks")
//         resolve()      // connects with then()
//     },3000)
// })
// promiseOne.then(function(){
//     console.log("Promise executed")
// })


//-----------------------------------------------------------
// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing Asynchronous tasks")
//         resolve()      // connects with then()
//     },3000)
// }).then(function(){
//     console.log("Promise executed")
// })

//-----------------------------------------------------------
// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing Asynchronous ops")
//         resolve({userName:"Pari",id:3123})
//     },3000)
// })
// promiseOne.then(function(u1){
//     console.log(u1)
//     console.log(u1.userName)
//     console.log(u1.id)
// })

//-----------------------------------------------------------
//PROMISE PENDING
// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing Asynchronous ops")
//         resolve({userName:"Pari",id:3123})
//     },3000)
// })
// const u2=promiseOne.then(function(u1){
//     console.log(u1)
//     return u1.userName  //PROMISE RETURNS AN OBJECT NOT A VALUE
// })
// console.log(u2)


//************************************************************
//.then() chaining
// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Doing Asynchronous ops")
//         resolve({userName:"Pari",id:3123})
//     },3000)
// })
// promiseOne.then(function(u1){
//     console.log(u1)
//     return u1.userName
// }).then((userName)=>{
//     console.log(userName)
// })


//------------------------------------------------------------
const promiseOne=new Promise(function(resolve,reject){
    let error=false
    if(!error){
        resolve({userName:"Pari",id:3123})
    }
    else{
        reject("Something went wrong")
    }
})
promiseOne.then(function(u1){
    console.log(u1)
    return u1.userName
}).then((userName)=>{
    console.log(userName)
}).catch(function(err){
    console.log("error")
}).finally(()=>{
    console.log("All ops executed")
})

