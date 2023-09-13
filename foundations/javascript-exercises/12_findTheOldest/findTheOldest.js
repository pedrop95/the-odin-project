const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    return array.reduce((oldestPerson, person) => {
        if (!person.yearOfDeath) {
            const age = currentYear - person.yearOfBirth;
            if (!oldestPerson || age > oldestPerson.age) {
                return { ...person, age };
            }
        } else {
            const age = person.yearOfDeath - person.yearOfBirth;
            if (!oldestPerson || age > oldestPerson.age) {
                return { ...person, age };
            }
        }
        return oldestPerson;
    }, null);
}

// Do not edit below this line
module.exports = findTheOldest;