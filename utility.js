//UC7
//password rule-should have atleast 1 numeric umber
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the password : " , function(password){
      const pet=/(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/;
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
      rl.close();
   }
   );
}
module.exports={userRegistration};