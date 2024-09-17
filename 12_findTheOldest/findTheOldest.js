const findTheOldest = function (people) {
  let oldestPerson;
  let greatestAge = 0;

  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = 2024;
      console.log("undefined now is " + person.yearOfDeath);
    }

    let age = person.yearOfDeath - person.yearOfBirth;
    console.log("next age is" + age);
    console.log(greatestAge);

    if (age > greatestAge) {
      console.log("here");

      oldestPerson = person;
      greatestAge = age;
      console.log(age);
      console.log("new oldest is " + person.name);
    }
  });

  console.log(oldestPerson.name);

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
