const student=class{
    findgreater(){
        let a=5
        let b=6
        let c=7
        if(a>b && b>c){
            console.log("a:",a);
        }
        else if(b>a && b>c){
            console.log("b:",b)
        }
        else{
            console.log("c:",c)
        }
    }

}
const s=new student();
s.findgreater();

