<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virtual Pet</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f9f9f9;
        }
        #menu {
            margin: 20px;
        }
        #pet-image {
            width: 300px;
            height: auto;
        }
        .health-bar {
            width: 100%;
            background-color: #ddd;
            border-radius: 5px;
            overflow: hidden;
            margin: 10px 0;
        }
        .health-bar-inner {
            height: 20px;
            background-color: green;
            text-align: center;
            color: white;
            line-height: 20px;
        }
    </style>
</head>
<body>
    <h1>Your Virtual Pet</h1>
    <img id="pet-image" src="./Idledog.gf" width=200 alt="Dog GIF">
    <div class="health-bar">
        <div id="happiness-bar" class="health-bar-inner">Happiness: 5/10</div>
        <div id="hunger-bar" class="health-bar-inner">Hunger: 5/10</div>
    </div>
    <div id="menu">
        <button onclick="checkStatus()">Check Status</button>
        <button onclick="feedPet()">Feed Pet</button>
        <button onclick="playWithPet()">Play with Pet</button>
        <button onclick="exitGame()">Exit</button>
    </div>
    <script>
        class VirtualPet {
            constructor(name) {
                this.name = name;
                this.hunger = 5;  // Scale from 0 (not hungry) to 10 (very hungry)
                this.happiness = 5;  // Scale from 0 (sad) to 10 (very happy)
            }

            feed(amount) {
                this.hunger -= amount;
                if (this.hunger < 0) {
                    this.hunger = 0;
                }
                this.updateBars();
                console.log(`You fed ${this.name}. Hunger is now: ${this.hunger}`);
            }

            play(time) {
                this.happiness += time;
                if (this.happiness > 10) {
                    this.happiness = 10;
                }
                this.updateBars();
                console.log(`You played with ${this.name}. Happiness is now: ${this.happiness}`);
            }

            checkStatus() {
                console.log(`${this.name}'s Status:`);
                console.log(`Hunger: ${this.hunger}/10`);
                console.log(`Happiness: ${this.happiness}/10`);
            }

            updateBars() {
                const hungerPercent = (this.hunger / 10) * 100;
                const happinessPercent = (this.happiness / 10) * 100;
                
                document.getElementById("hunger-bar").style.width = hungerPercent + '%';
                document.getElementById("hunger-bar").textContent = `Hunger: ${this.hunger}/10`;

                document.getElementById("happiness-bar").style.width = happinessPercent + '%';
                document.getElementById("happiness-bar").textContent = `Happiness: ${this.happiness}/10`;
            }
        }

        const petName = prompt("What do you want to name your virtual pet?");
        const pet = new VirtualPet(petName);
        pet.updateBars(); // Initialize the health bars display

        function checkStatus() {
            pet.checkStatus();
        }

        function feedPet() {
            const amount = parseInt(prompt("How much food to give? (1-5): "));
            if (!isNaN(amount) && amount >= 1 && amount <= 5) {
                pet.feed(amount);
            } else {
                console.log("Invalid amount! Please choose a number between 1 and 5.");
            }
        }

        function playWithPet() {
            const time = parseInt(prompt("How long to play? (1-5): "));
            if (!isNaN(time) && time >= 1 && time <= 5) {
                pet.play(time);
            } else {
                console.log("Invalid time! Please choose a number between 1 and 5.");
            }
        }

        function exitGame() {
            console.log("Goodbye!");
        }
    </script>
</body>
<html