class hisobla{
    constructor(start,end){
        this.start=start
        this.end=end
    }
    
    calculate(){
        let l1=this.start.split(":").map(Number)
        let l2=this.end.split(":").map(Number)
        if(l1.length<2 ||l2.length<2){
            console.log("Xatolik soatni 'HH:MM' kurinishda krtng!")
            return
        }
        let sH=l1[0]
        let sM=l1[1]
        let eH=l2[0]
        let eM=l2[1]
        let sInterval=eH-sH
        let mInterval=eM-sM;
        if(sInterval<0){
            console.log("Xato:tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas")
            return
        }else if(eM<sM){
            eH -=1
            eM +=60
            mInterval=eM-sM
        }
        console.log(`Ish vaqti ${sInterval} soat ${mInterval} minut`)

    }
}
let h1=new hisobla("8:00","17:50")
h1.calculate()
let h2=new hisobla("10:00","8:00")
h2.calculate()
let h3=new hisobla("4","8:00")
h3.calculate()