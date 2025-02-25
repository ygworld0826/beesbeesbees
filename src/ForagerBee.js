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

const ForagerBee = require('./ForagerBee');

const foragerBee = new ForagerBee();
console.log(foragerBee.age);       // 10
console.log(foragerBee.job);       // "find pollen"
console.log(foragerBee.color);     // "yellow" (Bee로부터 상속)
console.log(foragerBee.food);      // "jelly" (Grub으로부터 상속)
console.log(foragerBee.eat());     // "The grub is eating jelly" (Grub의 메서드)
console.log(foragerBee.canFly);    // true
console.log(foragerBee.treasureChest); // []

foragerBee.forage("gold");
console.log(foragerBee.treasureChest); // ["gold"]

foragerBee.forage("diamond");
console.log(foragerBee.treasureChest); // ["gold", "diamond"]
