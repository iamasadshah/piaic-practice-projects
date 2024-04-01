import inquirer from "inquirer";

inquirer.prompt([
    {
        type: "input",
        name: "paragraph",
        message: "Please Enter a Paragraph or Sentence:",
    },
]).then((answers) => {
    const paragraph = answers.paragraph;

    const trimmedParagraph = paragraph.trim();   // remove Spaces OR To Not Count

    const wordsArray = trimmedParagraph.split(/\s+/);  // Split the input into an array

    const wordsCount = wordsArray.length;   // Count the number of words

    console.log("Number of words:", wordsCount);
});
