class Product{
    static productCount=0
    static ls=[]
    constructor(id,name,price){
        this.id=id
        this.name=name
        this.price=price
        Product.productCount++
        this.dict={id:this.id,name:this.name,price:this.price,count:Product.productCount}
        Product.ls.push(this.dict)
    }
    static totalPrice(){
        let sum=0
        for(let x of Product.ls){
            sum +=x.price
        }
        return sum
    }
}
class CareProduct extends Product{
    constructor(id,name,price,warrantyPeriod){
        super(id,name,price)
        this.warrantyPeriod=warrantyPeriod
    }
    static totalDiscount(){
        let sum=0
        for(let x of Product.ls){
            let dis;
            switch(this.warrantyPeriod){
                case 5: dis=0.1; break
                case 4: dis=0.2; break
                case 3: dis=0.3; break
                case 2: dis=0.4; break
                case 1: dis=0.5; break
                default: dis=0 //negalini urganib kyn qulladim
            }
            sum +=(1-dis)*x.price
        }
        return sum
    }
}
let pro1=new Product(2343,"Samsung S24",700)
let pro2=new Product(2343,"Xiomi",200)
let pro3=new Product(2343,"Apple",1000)
console.log("Jami:",Product.totalPrice())

let care1=new CareProduct(433,"Zivobook",2000,3)
let care2=new CareProduct(657,"HP",400,2)
let care3=new CareProduct(867,"Acer",900,0)

let care4=new CareProduct(999,"Asus",500,5)
console.log("Jammi(chegirma bilan):",CareProduct.totalDiscount())