//UC5
//pre-define password rule
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the password : " , function(password){
      const pet=/[a-zA-Z0-9]{8,}/;
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
      rl.close();
   }
   );
}
module.exports={userRegistration};