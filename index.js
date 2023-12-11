const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

/** Create Heracles */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Create the opponent */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/** Create a weapon and a shield */
const sword = new Weapon("Sword", 10);
const basicShield = new Shield("Basic Shield", 10);

/** Equip Heracles with the weapon and shield */
heracles.equipWeapon(sword);
heracles.equipShield(basicShield);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️ attacks ${fighter2.name} 💙 ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

// Start the fight
let round = 1;
while (heracles.isAlive() && boar.isAlive()) {
  console.log(`Round ${round}:`);
  heracles.fight(boar);
  console.log(roundDisplay(heracles, boar));
  if (boar.isAlive()) {
    boar.fight(heracles);
    console.log(roundDisplay(boar, heracles));
  }
  round++;
}

const { winner, loser } = score(heracles, boar);
console.log(`🏆 Winner: ${winner.name} 💙 ${winner.life}`);
console.log(`💀 Defeated: ${loser.name}`);
