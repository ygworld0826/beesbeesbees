
const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  constructor() {
    super(); // Bee (그리고 Grub)의 속성을 상속받음
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot += 1;
  }

  giveHoney() {
    if (this.honeyPot > 0) {
      this.honeyPot -= 1;
    }
  }
}

module.exports = HoneyMakerBee;


