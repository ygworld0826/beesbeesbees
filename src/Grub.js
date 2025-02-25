class Grub {
  constructor() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }

  eat() {
    return 'The grub is eating $(this.food}';
  }
}

module.exports = Grub;

const Grub = require('./Grub');

const grub = new Grub();
console.log(grub.age);    // 0
console.log(grub.color);  // pink
console.log(grub.food);   // jelly
console.log(grub.eat());  // "The grub is eating jelly"
