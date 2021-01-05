class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }
  execute(targets){
    var sentences = [];
    if(Array.isArray(targets)) {
    for(var i = 0; i < targets.length; i++) {
      sentences.push(`Success! The ${targets[i]} is levitating.`);
      this.executionHistory.push(`${targets[i]}`);
    }
    return sentences.join(" ");
   }
   else {
     return `Success! The ${targets} is levitating.`
   }
  }
  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;
