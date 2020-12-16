class DireWolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || "Beyond the Wall";
    this.size = size || "Massive";
    this.starksToProtect = [];
  }
  protect(familyMember) {
  while (this.starksToProtect.length < 2){
    if(familyMember.location === this.home) {
    this.starksToProtect.push(familyMember);
    }
   }
  }
};

module.exports = DireWolf;
