var actions = [];

class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }
  shootBow() {
    while(this.layingDown === false) {
      if(actions.length < 2) {
      actions.push("shot")
      return "Twang!!!"
    } else {
      this.cranky = true;
      return "NO!";
  }
  }
    return "NO!";
  }
  run() {
   while(this.layingDown === false) {
      if(actions.length < 2) {
      actions.push("ran");
      return "Clop clop clop clop!!!";
    } else {
      this.cranky = true;
      return "NO!";
    }
  }
  return "NO!";

}

sleep() {
  if(this.layingDown === true) {
    actions.splice(0);
    this.cranky = false;
    return "ZZZZ";
  } else {
  return "NO!";
}
}
layDown() {
  this.standing = false;
  this.layingDown = true;
}
standUp() {
  this.standing = true;
  this.layingDown = false;
}
drinkPotion() {
  if(this.standing === true) {
  this.cranky = false;
} else {
  return "Not while I'm laying down!";
}
}
}

module.exports = Centaur
