//UC6
//password rule-should have atleast 1 upper case
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the password : " , function(password){
      const pet=/([a-zA-Z0-9]*[A-Z]+[a-zA-Z0-9]*)/;
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
      rl.close();
   }
   );
}
module.exports={userRegistration};