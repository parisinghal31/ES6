const sumofsquares=class{
    sum(){
        const num=[1,4,5,6,7,8,9,2,3]
        let sum=0
        for(let i=0;i<num.length;i++){
            if(num[i]%2==0){
                console.log(num[i])
                sum+=num[i]*num[i]
            }
        }
        console.log(sum)
    }
}
const s=new sumofsquares();
s.sum()