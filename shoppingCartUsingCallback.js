//PYRAMID OF DOOM

function checkLogin(callback){
    setTimeout(()=>{
        console.log("Log in to the application")
        callback()
    },3000)
}
function verifyCart(callback){
    setTimeout(()=>{
        console.log("Verify cart")
        callback()
    },3000)
}
function proceedToPayment(callback){
    setTimeout(()=>{
        console.log("Payment done")
        callback()
    },3000)
}
function placeOrder(callback){
    setTimeout(()=>{
        console.log("Order placed")
        callback()
    },3000)
}
checkLogin(()=>{
    verifyCart(()=>{
        proceedToPayment(()=>{
            placeOrder(()=>{
                console.log("All tasks done")
            })
        })
    })
})