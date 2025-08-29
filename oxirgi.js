// Bu masalani test qilishda faqat Object kirtiladigan qilib oldim
class Database{
    constructor(){
        this.ls=[]
        this.idCounter=1
    }
    createOne(item){
        let newDate={id: this.idCounter++,...item}
        this.ls.push(newDate)
        console.log("Mufaqiyatlik qushildi: ",newDate)
        return newDate
    }
    createMany(items){
        return items.map(item => this.createOne(item))
    }
    findAll(){
       return this.ls
    }
    findOne(qidir){
        return this.ls.find(item => Object.keys(qidir).every(key =>item[key]===qidir[key]))
    }
    updateOne(query, updates) {
    const item = this.findOne(query);
    if (item) {
      Object.assign(item, updates);
      return item;
    }
    return null;
    }

    updateMany(query, updates) {
    let updated = [];
    for (let item of this.ls) {
      if (Object.keys(query).every(key => item[key] === query[key])) {
        Object.assign(item, updates);
        updated.push(item);
      }
    }
     return updated;
    }

  
  deleteOne(el) {
    const index = this.ls.findIndex(item =>
      Object.keys(el).every(key => item[key] === el[key])
    );
    if (index !== -1) {
      return this.ls.splice(index, 1)
    }
    return "Topilmadi";
    }

  deleteMany(baza) {
    let deleted = [];
    this.ls = this.ls.filter(item => {
    const bormi = Object.keys(baza).every(key => item[key] === baza[key]);
      if (bormi) deleted.push(item);
      return !bormi;
    })
    return "Tozalandi"
  }
}
const db = new Database();


db.createOne({ name: "jamshid", age: 21 });
db.createMany([{ name: "Sharapat", age: 17 }, { name: "Jumagul", age: 19 }]);
console.log("Baza:", db.findAll());
console.log("Qidirilgan> ", db.findOne({ name: "Sharapat" }));


db.updateOne({ name: "jamshid" }, { age: 129 });
db.updateMany({ age: 30 }, { active: true });
console.log("update:", db.findAll());


db.deleteOne({ name: "Jumagul" });
db.deleteMany({ active: true });
console.log("baza", db.findAll());







