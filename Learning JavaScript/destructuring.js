const user = {
    name: "John",
    age: 19,
    city: "Calauag",
}

let {name, age, city} = user;

console.log({name, age, city});
name = "Bob";

console.log(user);
console.log(name);