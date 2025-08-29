class Bank{
    constructor(kun){
        this.kun=kun
    }
    calculate(){
        let cnt=1
        let now=new Date().getFullYear()
        let sana=new Date(now,0,1)
        while(cnt<this.kun){
            sana.setDate(sana.getDate()+1)
            cnt++
        }
        let ls=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","August","Sentabr","Oktabr","Noyabr","Dekabr"]
    
        console.log(sana.getDate()+"-"+ls[sana.getMonth()])
    
    }
}
let s1=new Bank(60)
s1.calculate()
let s2=new Bank(100)
s2.calculate()