import inquirer from "inquirer";

let maxUserHealth = 100;
let maxEnemyHealth = 75;
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let randomIndex = Math.floor(Math.random() * enemies.length);
let randomEnemy = enemies[randomIndex];
let oneAttack = 30;
let drinkPower = 50;

console.log(`\n \t Welcome to the Text Based Adventure Game. \n \n \t *ENEMY APPEARED* \n \t Your Health: ${maxUserHealth} \n \t Enemy Health: ${maxEnemyHealth} \n \t Your Enemy: ${randomEnemy}`);

let running = true;

while (running) {
    let userQuestion = await inquirer.prompt([
        {
            type: "list",
            name: "question",
            message: "What would you like to do?",
            choices: ["Attack", "Take Energy Drink", "Run!"]
        }
    ]);

    if (userQuestion.question === "Attack") {
        let userFirstHealth = maxUserHealth - oneAttack;
        let enemyFirstHealth = maxEnemyHealth - oneAttack;

        console.log(`You Attacked: \n \t Your Remaining Health: ${userFirstHealth}. \n \t Enemy Remaining Health: ${enemyFirstHealth}`);

        if (userFirstHealth <= 20) {
            console.log("Your health is critically low. Please take some energy!");
        }

        maxUserHealth = userFirstHealth;
        maxEnemyHealth = enemyFirstHealth;

        if (maxEnemyHealth <= 0) {
            console.log("You defeated the enemy!");
            running = false;
        }
    } else if (userQuestion.question === "Take Energy Drink") {
        if (maxUserHealth < 100) {
            maxUserHealth += drinkPower;

            if (maxUserHealth > 100) {
                maxUserHealth = 100;
            }

            console.log("Health Restored Successfully!");
        } else {
            console.log("Energy is full. Go and attack!");
        }
    } else if (userQuestion.question === "Run!") {
        console.log("Do or die. Fear not.");
        running = false;
    }
}
