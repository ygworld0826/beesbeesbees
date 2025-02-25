class Grub {
  constructor() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }

  eat() {
    return 'The grub is eating ${this.food}';
  }
}

module.exports = Grub;

