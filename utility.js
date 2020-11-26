//UC1
//checking valid first name
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the first name : " , function(firstName){
      const pet=/[A-Z]{1}[a-z]{2,}/;
      if(!pet.test(firstName))
      console.log("Invalid");
      else
      console.log("Valid First Name");
      rl.close();
   }
   );
}
module.exports={userRegistration};