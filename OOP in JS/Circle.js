class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
getRadius(){
    return this.radius;
}
getColor(){
    return this.color;
}
getAreaCalculate(){
    return Math.PI * this.radius ** 2;
}
getCircumference(){
    return 2*Math.PI * this.radius;
}
setRadius(radius){
    this.radius = radius;
}
setcolor(color){
    this.color = color;
}
}
const circle = new Circle(5,"Red");

const radius = circle.getRadius();
const color = circle.getColor();
const area = circle.getAreaCalculate();
const circumference = circle.getCircumference();

circle.setRadius(8);
circle.setcolor("Green");

//console.log(circle.getRadius());
console.log("Initial Radius =",radius);
console.log("Initial Color =",color);
console.log("Area of the Circle =",area);
console.log("Circumference of the circle = ",circumference)

console.log("Updated Radius =",circle.getRadius())
console.log("Updated Color =",circle.getColor())
console.log("Updated Area =",circle.getAreaCalculate())
console.log("Updated Circumference",circle.getCircumference())