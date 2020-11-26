//UC4
//pre-define mobile formate
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the mobile number : " , function(number){
      const pet=/((\+){1}91){1}[ ]*[0-9]{10}/;
      if(!pet.test(number))
      console.log("Invalid number");
      else
      console.log("Valid number");
      rl.close();
   }
   );
}
module.exports={userRegistration};