const user={                         //object
    fname:"Pari",
    lname:"Singhal",
    address:{
        city:"Ghaziabad",
        country:"India"
    }
}
// let a=user.fname
// console.log(a)
// let b=user.address.city
// console.log(b)
let{fname:fn,lname:ln,address:{city:ci,country:co}}=user  //object destructuring
// console.log(fname,lname)
console.log(fn,ln)         //alias
// console.log(city,country)
console.log(ci,co)         //alias