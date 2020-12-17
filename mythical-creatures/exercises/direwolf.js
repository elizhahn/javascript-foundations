class DireWolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(familyMember) {
    if(this.starksToProtect.length < 2 && familyMember.location === this.home) {
      this.starksToProtect.push(familyMember);
      familyMember.safe = true;
      this.huntsWhiteWalkers = false;
      }
    }
    leave(familyMember) {
      for(var i = 0; i < this.starksToProtect.length; i++) {
        if(this.starksToProtect[i].name === familyMember.name) {
          this.starksToProtect.splice(i, 1);
          familyMember.safe = false;
      }
    }
  }
};

module.exports = DireWolf;
