const people = require('./module.js');

var names = ['John', 'Jane', 'Maria', 'David', 'Anna'];

for (let i = 0; i < people.length; i++) {
    console.log(names[i] + ' tiene ' + people[i].age + ' años, es de ' + people[i].nationality + ' y trabaja como ' + people[i].work);  
}