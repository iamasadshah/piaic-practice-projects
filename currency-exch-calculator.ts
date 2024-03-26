import inquirer from "inquirer";

let answer = await inquirer.prompt([
   { message: "Enter the Amount you Want to Exchange to Pakistani Rupee(PKR)", type: "number", name: "amount" },

   {
      message: "Enter currency to convert from",
      type: "list",
      name: "first",
      choices: ["United States Dollar (USD)",
         "Euro (EUR)",
         "Japanese Yen (JPY)",
         "British Pound Sterling (GBP)",
         "Australian Dollar (AUD)",
         "Canadian Dollar (CAD)",
         "Swiss Franc (CHF)",
         "Chinese Yuan Renminbi (CNY)",
         "Swedish Krona (SEK)",
         "New Zealand Dollar (NZD)",
         "Mexican Peso (MXN)",
         "Singapore Dollar (SGD)",
         "Hong Kong Dollar (HKD)",
         "Norwegian Krone (NOK)",
         "South Korean Won (KRW)",
         "Turkish Lira (TRY)",
         "Russian Ruble (RUB)"
      ]
   }
])

if (answer.first === "United States Dollar (USD)") {
   console.log(answer.amount * 278.25)
} else if (answer.first === "Euro (EUR)") {
   console.log(answer.amount * 300.66)
} else if (answer.first === "Japanese Yen (JPY)") {
   console.log(answer.amount * 1.84)
} else if (answer.first === "British Pound Sterling (GBP)") {
   console.log(answer.amount * 350.53)
} else if (answer.first === "Australian Dollar (AUD)") {
   console.log(answer.amount * 181.24)
} else if (answer.first === "Canadian Dollar (CAD)") {
   console.log(answer.amount * 204.50)
} else if (answer.first === "Swiss Franc (CHF)") {
   console.log(answer.amount * 310.07)
} else if (answer.first === "Chinese Yuan Renminbi (CNY)") {
   console.log(answer.amount * 38.49)
} else if (answer.first === "Swedish Krona (SEK)") {
   console.log(answer.amount * 26.33)
} else if (answer.first === "New Zealand Dollar (NZD)") {
   console.log(answer.amount * 166.76)
} else if (answer.first === "Mexican Peso (MXN)") {
   console.log(answer.amount * 16.61)
} else if (answer.first === "Singapore Dollar (SGD)") {
   console.log(answer.amount * 206.17)
} else if (answer.first === "Hong Kong Dollar (HKD") {
   console.log(answer.amount * 35.58)
} else if (answer.first === "Norwegian Krone (NOK)") {
   console.log(answer.amount * 25.88)
} else if (answer.first === "South Korean Won (KRW)") {
   console.log(answer.amount * 0.21)
} else if (answer.first === "Turkish Lira (TRY)") {
   console.log(answer.amount * 8.69)
} else if (answer.first === "Russian Ruble (RUB)") {
   console.log(answer.amount * 3.02)
}else{
   console.log("Invalid input")
}
