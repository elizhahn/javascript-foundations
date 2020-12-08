var dragonEats = [];

class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    if(dragonEats.length < 2) {
    dragonEats.push("yum");
  } else {
    this.hungry = false;
  }
}
}


module.exports = Dragon;
