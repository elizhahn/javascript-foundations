var drinks = [];

class Vampire {
  constructor(name, pet = "bat", thirsty, ouncesDrank) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  //Why didn't the while loop on this??
  drink() {
   if(this.ouncesDrank < 50) {
    this.ouncesDrank += 10;
      if(drinks.length < 0) {
        drinks.push("slurp");
    } else {
        this.thirsty = false;
      }
  } else {
    return "I'm too full to drink anymore!"
  }
  }
}


module.exports = Vampire;
