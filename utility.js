//UC2
//checking valid last name
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the last name : " , function(lastName){
      const pet=/[A-Z]{1}[a-z]{2,}/;
      if(!pet.test(lastName))
      console.log("Invalid");
      else
      console.log("Valid last Name");
      rl.close();
   }
   );
}
module.exports={userRegistration};