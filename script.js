// class Car{
//     constructor(brand,color){
//         this.brand=brand;
//         this.color=color;
//     }
// }
//  var test= new Car("audi","black");
// console.log(test.brand);
// console.log(test.color);
//TASK:
//class Person{
//     properties(name,age,salary){
//         my.name=name;
//         my.salary=salary;
//         my.age=age;
//     }
    
// }
// var check=Deatails ("vignesh","21","21000");
// console.log(test.name);
// console.log(test.age);
// console.log(test.salary);
//methods:
// class Car{
//     constructor(brand,color){
//         this.brand=brand;
//         this.color=color;
//     }
//     printcolor(){
//    return this.color;    
// }
// }
// var test= new Car("Audi","black");
// var test= new Car("Audi","white");


// console.log(`the color of my car is ${test.printcolor()}`);
// console.log(`the color of my car is ${test.color}`);
//parameter:
// class Car{
//         constructor(brand,color){
//             this.brand=brand;
//             this.color=color;
//         }
//         printcolor(str){
//        return str+this.color;    
//     }
//     }
//     var test= new Car("Audi","black");
//     var result=test.printcolor("the color of my car is ");
//     console.log(result);
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
        return this.radius;
        
    }
    get colorCircle(){
        return this.color;
    }
    set radiusCircle(radius){
        return this.radius;
    }
    set colorCircle(circle){
        return this.color;
    }
    get tostring(){
        return`"Circle[return=${this.radius}, color=${this.color}]"`;
    }
    get areacircle(){
        return Math.PI*this.radius*this.radius;
    }
    get circumferenceCircle(){
        return2*Math.PI*this.radius;
    }
}
var obj1=new Circle(1.0,"red");
console.log(obj1.radiusCircle);
//console.log(obj1.radiusCircle);//get radiusCircle
obj1.radiusCircle=2.2
console.log(obj1.radiusCircle);


    
    


    

    


