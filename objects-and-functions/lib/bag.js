class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.candies.push(candy);
    this.count ++;
  }
  contains(candy) {
    for(var i = 0; this.candies.length; i++) {
    if(this.candies[i].type === candy) {
      return true;
      //return a boolean value when calling the contain method,
      //steps need to see if the argument given in the invoking of the method is an element on the candies array
    } else {
      return false;
    }
  }
}
}
module.exports = Bag;
