function birxil(obj1,obj2){
    let res={}
    for(let x in obj1){
        if(obj2.hasOwnProperty(x)){
            if(typeof obj1[x]=="object" && obj1[x] !==null && typeof obj2[x]==="object" && obj2[x] !==null){
                let  qaytar=birxil(obj1[x],obj2[x])
                res[x]=qaytar
            }else{
                if(obj1[x]===obj2[x]){
                    res[x]=obj1[x]
                }
            }
        }
    }
    return res

}
 const jsonData1 = {
    user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000"
    }
  },
  active: true
};

const jsonData2 = {
  user: {
  name: "Ali",
  age: 30,
      address: {
        city: "Tashkent",
        zip: "200000"
      }
    },
  active: true
};

console.log(birxil(jsonData1, jsonData2));
