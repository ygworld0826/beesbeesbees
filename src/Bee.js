const Grub = require('./Grub');

class Bee extends Grub {
  constructor() {
    super(); // Grub의 속성 및 메서드를 상속
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

module.exports = Bee;

const Bee = require('./Bee');

const bee = new Bee();
console.log(bee.age);   // 5
console.log(bee.color); // "yellow"
console.log(bee.food);  // "jelly" (Grub에서 상속됨)
console.log(bee.eat()); // Grub의 eat() 메서드 사용
console.log(bee.job);   // "Keep on growing"
