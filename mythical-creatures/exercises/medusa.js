var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = []
  }
  gazeAtVictim(victim) {
    var statue = new Statue (victim.name);
      if(this.statues.length < 3) {
      this.statues.push(statue);
    }else {
      var savedPerson = this.statues.shift(statue);
      var turnToPerson = new Person(savedPerson.name);
      turnToPerson.mood = "relieved";
      this.statues.push(statue);
    };
    return turnToPerson
    };
 };


module.exports = Medusa;
