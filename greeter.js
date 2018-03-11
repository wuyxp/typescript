function greeter(person) {
    return "hello ," + person.firstName + person.lastName;
}
var use = greeter({ firstName: 'first', lastName: 'last' });
console.log(use);
