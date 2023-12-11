function animateFight() {
    const heracles = document.getElementById('heracles');
    const boar = document.getElementById('boar');
    const combatDetails = document.getElementById('combat-details');
    
    let heraclesLife = 100;
    let boarLife = 100;
    let round = 1;

    const interval = setInterval(() => {
        if (boarLife <= 0 || round > 16) {
            clearInterval(interval);
            combatDetails.innerHTML += `🏆 Winner: 🧔 Heracles 💙 ${heraclesLife}<br>`;
            combatDetails.innerHTML += `💀 Defeated: 🐗 Erymanthian Boar`;
        } else {
            // Simulate the fight logic (simplified version)
            boarLife -= Math.floor(Math.random() * 10 + 1);
            heraclesLife -= Math.floor(Math.random() * 5 + 1);

            boarLife = Math.max(0, boarLife);
            heraclesLife = Math.max(0, heraclesLife);

            // Display the round details
            combatDetails.innerHTML += `Round ${round}:<br>`;
            combatDetails.innerHTML += `🧔 Heracles 🗡️ attacks 🐗 Erymanthian Boar 💙 ${boarLife}<br>`;
            combatDetails.innerHTML += `🐗 Erymanthian Boar 🗡️ attacks 🧔 Heracles 💙 ${heraclesLife}<br><br>`;

            round++;
        }
    }, 1000); // Delay of 1 second for each round
}

document.addEventListener('DOMContentLoaded', animateFight);
