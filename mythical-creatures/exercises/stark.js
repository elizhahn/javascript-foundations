class Stark {
  constructor(familyMember) {
    if(familyMember) {
    this.name = familyMember.name
    }
    if(familyMember) {
    this.location = familyMember.area || "Winterfell";
    }
  }
};

module.exports = Stark;
