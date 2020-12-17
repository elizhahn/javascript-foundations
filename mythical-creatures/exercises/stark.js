const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(familyMember) {
    if(familyMember) {
    this.name = familyMember.name
    this.safe = false;
    }
    if(familyMember) {
    this.location = familyMember.area || "Winterfell";
    }
    }
    sayHouseWords() {
      if(!this.safe) {
      return "Winter is Coming";
    } else {
      return "The North Remembers";
    }
  }
    callDirewolf(name, home) {

      var direwolf = new Direwolf(name, home);
      //need to change location of direwolf to match stark's locations
      direwolf.home = this.location;
      //call protect method with the right stark object
      direwolf.protect(this);
      return direwolf;
  }
};

module.exports = Stark;
