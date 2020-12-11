

class Pirate {
  constructor(name, job) {
    this.name = name;
    if(job) {
    this.job = job;
  } else {
    this.job = "scallywag";
  }
    this.cursed = false;
    this.booty = 0;
    this.robCount = 0

  }
  robShip() {
    this.robCount += 1;
    if(this.robCount < 6) {
    this.booty += 100;
    return "YAARRR!";
    }else  {
      this.cursed = true
      return "ARG! I've been cursed!";
    }
 };
  liftCurse() {
    if(this.cursed) {
    this.booty -= 300;
    this.cursed = false;
    return "Your curse has been lifted!";
  }
    return "You don't need to lift a curse!";
  };
};




module.exports = Pirate;
