const student={
    id:20,
    name:"Pari",
    course:"WebTech",
    address:{
        city:"Modinagar",
        country:"India"
    },
    marks:[100,200,150,180],
    admissionStatus:true
}
function displayData({id,name,course,address:{city,country},marks,admissionStatus}){
    let sum=0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i];
    }
    const avgMarks=sum/marks.length
    console.log("Student details: ")
    console.log("Name:",name,",","ID:",id,",","Course:",course,",","City:",city,",","Country:",country,",","Average Marks:",avgMarks,",","Admission status:",admissionStatus)
    if(avgMarks>=80 && admissionStatus===true){
        console.log("Eligible for Merit Scholarship")

    }
    else{
        console.log("Regular Admission")
    }

}
displayData(student)