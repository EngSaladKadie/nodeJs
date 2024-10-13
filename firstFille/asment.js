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

let balances = 3000,kaarka=200;
let pind = 3333;

// Example flow with switch case
async function main() {
  // Prompt the user with the menu
  const hara = await askQuestion(`
    1. Itus haraagaaga
    2. Kaarka ku hadlka
    3. Bixi biil 
    4. Uwareeji Evcplus
    5. Warbixin kooban
    6. Salaam bank
    7. Maareynta 
    8. Taaj
    9. Bill payment
    Please select an option (1-9): `);

  // Convert the input to an integer for comparison
  const option = parseInt(hara);

  switch (option) {
    case 1:
      console.log(`Haraagaagu waa $${balances} lacag`);
      break;
    case 2:
        let kuhadal= await askQuestion(`
             1:ku shubo Airtime
             2: ugu shub Airtime
             3:MIFI Packages
             4:ku shubi internet
             5: ugu shub qof kle(MMT)
            
            `)
            if(kuhadal==1){
                let num= await askQuestion(`  fadlan gali lacagt $`)
                let loo= await askQuestion(`  gali number loo rabo `)
                let hops= await askQuestion(` ma hubtaa $${num} ugu shubtid ${loo} undefined
                    1:haa
                    2:maya
                    `)
                    if(hops==1){
                        if(num>kaarka){
                            console.log(`Haraaga xisabtaadu kuguma filna`);
                        } else{
                            console.log( `waxaad ugu shubaty $${num} number no: ${loo} haraaga card ka waa $${kaarka-num} mahadsanid`)
                        }
                        
                    }
            }
            if(kuhadal==2){
                let tell = 61852001;
                let numberka = await askQuestion(`fadlan gali-numberk `)
                let lacagt= await askQuestion(`fadlan gali lacagta $`)
                let mahubtaa= await askQuestion(`ma hubtaa inaad $${lacagt} ugu shubtaty ${numberka}
                    1:haa
                    2:maya
                    `)
                    if(mahubtaa==1){
                        if(lacagt>kaarka){
                            console.log(`haraaga xisaabtaadu kuguma filna,
                                mobile no: ${tell}`);
                            
                        }else{
                            console.log(`waxaad ugu shubtid numberkas ${numberka} Haragaagu waa $${kaarka-lacagt} Mahadsanid`)
                        }
                    }
            }
    
      break;
    // case 3:
    //   console.log("Bixi biil...");
      
      break;
    case 4:
        let lacagta= await askQuestion(`fadlan lacagta gali $`);
        let lorabo= await askQuestion(`gali mobeilka `);
        let hupin= await askQuestion(`ma hubtaa inaad ${lacagta} wareejisay ${lorabo}
        1.Haa
        2.maya
        `)
        if(hupin==1) {
            if(lacagta>balances){
                console.log("haraagaaga kuguma filno")
            }else{
                console.log(`Evc-plus: $${lacagta} waxaad u wareejisay ${lorabo} haragaaga waa $${balances-lacagta} mahadsanid`)
             }
            

            
        } 
    //   console.log("Uwareeji Evcplus...");
      // Additional logic for option 4 can go here
      break;
    // case 5:
    //   console.log("Warbixin kooban...");
    //   // Additional logic for option 5 can go here
    //   break;
    // case 6:
    //   console.log("Salaam bank...");
    //   // Additional logic for option 6 can go here
    //   break;
    // case 7:
    //   console.log("Maareynta...");
    //   // Additional logic for option 7 can go here
    //   break;
    // case 8:
    //   console.log("Taaj...");
    //   // Additional logic for option 8 can go here
    //   break;
    // case 9:
    //   console.log("Bill payment...");
    //   // Additional logic for option 9 can go here
    //   break;
    default:
      console.log("Invalid option, please select a valid number between 1-9.");
      break;
  }

  // Close the readline interface when done
  rl.close();
}

// Run the example
main();
