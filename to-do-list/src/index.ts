import inquirer from "inquirer";

//Empty array for todo list
let todolist = [];
let status = true;

 
while(status){
  let newTask = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "Add a Task"
    }, 

    {
     type: "confirm",
     name: "addMore",
     message: "Do You Want to add more?",
     default: false,
    }
  ]);
  todolist.push(newTask.todo);
  status = newTask.addMore;

};

 let veiwlist = await inquirer.prompt([
  {
    type: "confirm",
    name: "watchlist",
    message: "Do You Want To watch the list:",
    default: false,
  }
 ]);

  console.log(todolist);
 

