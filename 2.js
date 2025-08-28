class Point{
    static disx=[]
    static disy=[]
    constructor(point1,point2){
        this.point1=point1
        this.point2=point2
        Point.disx.push(point1)
        Point.disy.push(point2)
    }
    static distance(){
        let mas_x=(Point.disx[0]-Point.disx[1])**2
        let mas_y=(Point.disy[0]-Point.disy[1])**2
        let son=(mas_x+mas_y)**0.5
        return son.toFixed(3)
        }
}
let qiy1=new Point(31,13)
let qiy2=new Point(7,3)
console.log(Point.distance(qiy1,qiy2))

    
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));