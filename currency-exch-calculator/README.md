Here are the steps to set up a new Node.js project with the latest features, including the necessary configurations:

**Steps:**


**Initialize Node.js Project:**

`npm init -y`


**Initialize TypeScript Configuration:**

`tsc --init`


**Install Required Packages:**

`npm install inquirer`

`npm install @types/inquirer --save-dev`

**Update tsconfig.json File:**

**Open tsconfig.json.**

Update the following properties:

"target": "ES2022",


"module": "NodeNext",


"rootDir": "./src",


"moduleResolution": "NodeNext",


"outDir": "./dist",


Update package.json File:

**Open package.json.**

Add the following line:

"type": "module",

These steps will configure your Node.js project to use the latest features and enable TypeScript with the specified settings.
