class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.favoriteAccessory = magician.clothing || "top hat";
    this.confidencePercentage = 10;
  }
  performTrick() {
    if(this.favoriteAccessory === "top hat") {
      this.confidencePercentage += 10;
      return "PULL RABBIT FROM TOP HAT";
    }else {
      this.confidencePercentage += 10;
      return "PULL DOVE FROM SLEEVE";
    }
  }
  performIncantation(magicWords) {
    return `${magicWords.toUpperCase()}!`;
  }
  performShowStopper() {
    if(this.confidencePercentage >= 100 && this.assistant === true) {
      return "WOW! The magician totally just sawed that person in half!";
    }else {
      return "Oh no, this trick is not ready!";
    }
  }

  }



module.exports = Magician;
