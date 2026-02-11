const promiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({userName:"Pari",pass:123})
        }
        else{
            reject("Something went wrong")
        }
    },2000)
})
async function consumepromiseOne(){
    try{
        const response=await promiseOne
        console.log(response.userName)
    }
    catch(error){
        console.log(error)
    }
}
consumepromiseOne()