class Person{
    constructor(name, age, gender, district,state,blood_group){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.district = district;
        this.state = state;
        this.blood_group = blood_group;
    }
getName(){
    return this.name;
}
getAge(){
    return this.age;
}
getState(){
    return this.state;
}
setName(name){
    this.name = name;
}
setAge(age){
    this.age = age;
}
setState(state){
    this.state = state;
}
    
}
const person = new Person("Jo",24,"Female","Kaniyakumari","Tamil Nadu","AB+")
console.log("Initial Name = ",person.getName());
console.log("Initial Age = ",person.getAge());
console.log("Initial State = ",person.getState());

//setting new values

person.setName("Evan");
person.setAge(27);
person.setState("Bengaluru");

//Upated values
console.log("Updated Name = ",person.getName());
console.log("Updated Age = ",person.getAge());
console.log("Updated State = ",person.getState()); 


