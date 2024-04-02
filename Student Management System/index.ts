import inquirer from "inquirer"

//add new students,
let registration = await inquirer.prompt(
  [
  {
    type: "input",
    name: "name",
    message: "What's Your Nice Name?"
  },
  {
    type: "input",
    name: "fname",
    message: "What's Your Father Name?"
  },
  {
    type: "number",
    name: "number",
    message: "What's Your Phone Number?"
  }
  ]
);

/// how to generate a 5 digit unique studentID for each student, 

function generateStudentId(): string {
  const min = 10000; // Minimum value for 5-digit number
  const max = 99999; // Maximum value for 5-digit number
  const id = Math.floor(Math.random() * (max - min + 1)) + min; // Generate random number between min and max
  return id.toString(); // Convert number to string
}

let studentID = generateStudentId();

// how to enroll students in the given courses. 

let courceChoice = await inquirer.prompt([
  {
    type: "list",
    name: "courses",
    message: "What Do You Want To Learn? Select Course:",
    choices: ["Web3.0", "Artificial Intelligence", "Cloud Native and Mobile web", "BlockChain", "Internet Of Things"]
  },
]);

// view balance, 
let enterBalance = await inquirer.prompt([
  {
    type:"number",
    name: "balance",
    message: "Enter Your Balance: "
  }
]);

// pay tuition fees, 
let courseFee = 5000;

if(courceChoice.Courses === "Web3.0" && enterBalance.balance >= courseFee){
  console.log("Your Are Enrolled in Web3.0 course. \n Thank You");
} else if(courceChoice.Courses === "Artificial Intelligence. \n Thank You" && enterBalance.balance >= courseFee){
  console.log("Your Are Enrolled in Artificial Intelligence Course");
} else if(courceChoice.Courses === "Cloud Native and Mobile web" && enterBalance.balance >= courseFee){
  console.log("Your Are Enrolled in Cloud Native and Mobile web Course. \n Thank You");
} else if(courceChoice.Courses === "BlockChain" && enterBalance.balance >= courseFee){
  console.log("Your Are Enrolled in BlockChain course. \n Thank You");
} if(courceChoice.Courses === "Internet Of Things" && enterBalance.balance >= courseFee){
  console.log("Your Are Enrolled in Internet Of Things course. \n Thank You");
} else if(enterBalance.balance < courseFee){
  console.log("Insufficient Balance. Please Recharge.");
};


// show status,
let showStatus = await inquirer.prompt([
  {
    type: "list",
    name: "Status",
    message: "Do You Want To See Your Details?",
    choices: ["Yes", "No"],
  }
]);

if(showStatus.Status === "Yes"){
  console.log(`\n Name: ${registration.name}. \n Father Name: ${registration.fname}. \n Phone Number: ${registration.number}. \n Your ID: ${studentID}. \n Course: ${courceChoice.courses}. \n`);
} else if(showStatus.Status === "No"){
  console.log("Data Saved. You Will Be Notify Latter. \n Thank You");
}

if(enterBalance.balance < courseFee){
  console.log("Not Enrolled in Any Course, Due to Insufficient Balance");
}else if(enterBalance.balance >= courseFee){
  console.log(`Remaining Balance: ${enterBalance.balance - courseFee}`);
}

