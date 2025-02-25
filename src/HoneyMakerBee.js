
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

const HoneyMakerBee = require('./HoneyMakerBee');

const honeyBee = new HoneyMakerBee();
console.log(honeyBee.age);      // 10
console.log(honeyBee.job);      // "make honey"
console.log(honeyBee.color);    // "yellow" (Bee로부터 상속)
console.log(honeyBee.food);     // "jelly" (Grub으로부터 상속)
console.log(honeyBee.eat());    // "The grub is eating jelly" (Grub의 메서드)

console.log(honeyBee.honeyPot); // 0
honeyBee.makeHoney();
console.log(honeyBee.honeyPot); // 1
honeyBee.giveHoney();
console.log(honeyBee.honeyPot); // 0
