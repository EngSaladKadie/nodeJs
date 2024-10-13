// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })



// rl.question('What is your name? ', (name ,) => {
  
//     console.log(`Asc, ${name}`);
   
//     rl.close();
// } )
// const rls= readline.createInterface({
//     input: process.stdin,
//     output: process.output,
// })
// rls.question('what is your age',(age)=>{
//     console.log(`i am years ${age} old` );
//     rls.close();
    
// });




// const pink= 
// Import readline module
const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user and take input
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

// Example flow
async function main() {
  // Prompt for user's name
  const name = await askQuestion("What is your name? ");
  console.log(`Hello, ${name}!`);
  const phone = await askQuestion("What is your phne? ");
  console.log(`Hello, ${phone}!`);

  // Prompt for user's age
  const age = await askQuestion("How old are you? ");
  console.log(`You are ${age} years old.`);

  // Close the readline interface when done
  rl.close();
}

// Run the example
main();




// let balances = 3000,pin=1111;
// let yourPIN =  Number(prompt("fadlan gali pinkaga(enter your pin)"))
// if(yourPIN===pin){
//     let Options= Number(prompt(`
//           1.itus haraagaaga
//           2.kaarka ku hadlka
//           3.bixi biil 
//         `));
//         switch(Options){
//             case 1:
//                 console.log(`haraagaaga waa: $${balances}`)
//                 break;
//         }
// }