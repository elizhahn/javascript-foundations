class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || "Swamp";
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
    if(human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swings++;
    }
    if(this.swings % 2 === 0) {
      human.knockedOut = true;
    }
  }
  swingAt(human) {
    this.swings++;
  }
  apologize(human) {
    human.knockedOut = false; 
  }
}

module.exports = Ogre;
