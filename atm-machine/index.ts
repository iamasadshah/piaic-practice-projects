import inquirer from "inquirer";

let pin: number = 1122;
let Balance = 10000;

inquirer.prompt({
    type: 'number',
    name: 'yourPin',
    message: 'Enter your Pin'
}).then((answers) => {
    let yourPin = answers.yourPin;

    if (yourPin === pin) {
        console.log("Correct PIN");

        inquirer.prompt({
            type: "list",
            name: "selection",
            message: "Please Select Option",
            choices: ["Check balance", "Withdraw"]
        }).then((answer) => {
            if (answer.selection === "Check balance") {
                console.log(`Your Current Balance is ${Balance}`);
            } else if (answer.selection === "Withdraw") {
                inquirer.prompt({
                    type: "number",
                    name: "selection2",
                    message: `Your Current balance is ${Balance}. Please Enter Amount to Withdraw.`
                }).then((answer2) => {
                    if (answer2.selection2 <= Balance){
                      console.log(`You Witdraw ${answer2.selection2}. \n \n Your Remaining Balance is ${Balance - answer2.selection2}`);
                    }else if (answer2.selection2 != Balance){
                      console.log(`Insufficient balance. Please enter an amount within the range of ${Balance}`);
                    }
                });
            }
        });
    }
});
