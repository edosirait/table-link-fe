const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 22},
    {name: 'David', age: 35},
]

function findMinAge(people) {
    return people.reduce((min, person) => (
        person.age < min.age ? person : min
    ), people[0]);
}

function findMaxAge(people) {
    return people.reduce((max, person) => (
        person.age > max.age ? person : max
    ), people[0]);
}

function sortByMinAge(people) {
    return [...people].sort((a, b) => a.age - b.age);
}

function sortByMaxAge(people) {
    return [...people].sort((a, b) => b.age - a.age);
}

console.log('Min Age', findMinAge(people));
console.log('Max Age', findMaxAge(people));
console.log('Sorted Min Age', sortByMinAge(people));
console.log('Sorted Max Age', sortByMaxAge(people));
