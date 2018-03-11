interface Person {
	firstName: string;
	lastName: string;
}
function greeter(person:Person){
	return "hello ,"+person.firstName + person.lastName
}
let use = greeter({firstName: 'first', lastName: 'last'})
console.log(use)
