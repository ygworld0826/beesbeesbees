const Bee = require('./Bee');

class ForagerBee extends Bee {
  constructor() {
    super(); // Bee (Grub 포함)의 속성을 상속받음
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}

module.exports = ForagerBee;


