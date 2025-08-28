class university{
    static department=[]
    constructor(name){
        this.name=name
        
    }
    addDepartment(name){
        university.department.push(name)
    }
    deleteDepart(name){
        let index=university.department.indexOf(name)
        if(index !==-1){
            university.department.splice(index,1)
            console.log("Ucirildi")
        }else{
            console.log("Topilmadi")
        }
    }
    showDepart(){
      
        for(let x of university.department){
            console.log(x)
        }
    }
}



const uni= new university("TSUE");
uni.addDepartment("Bugalteri");
uni.addDepartment("Managar");
uni.addDepartment("Faculity");
uni.addDepartment("HR");
console.log("**************Qoshilgandan kyn*****************")
uni.showDepart();
console.log("**************Amal*****************")

uni.deleteDepart("Managar");
uni.deleteDepart("Faculity");

console.log("**********Uchirilgan kyn*********************")

uni.showDepart(); 





