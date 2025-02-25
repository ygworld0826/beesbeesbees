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

