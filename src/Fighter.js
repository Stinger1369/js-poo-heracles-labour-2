// src/Fighter.js

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null;
    this.shield = null;
  }

  equipWeapon(weapon) {
    this.weapon = weapon;
  }

  equipShield(shield) {
    this.shield = shield;
  }

  getDamage() {
    return this.strength + (this.weapon ? this.weapon.damage : 0);
  }

  getDefense() {
    return this.dexterity + (this.shield ? this.shield.protection : 0);
  }

  fight(enemy) {
    const damage = Math.max(0, Math.floor(Math.random() * this.getDamage() + 1) - enemy.getDefense());
    enemy.life = Math.max(0, enemy.life - damage);
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
