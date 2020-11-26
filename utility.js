//UC8
//password rule-has exactly 1 special character 
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the password : " , function(password){
      const pet=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%*+]).{8,}/;
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
      rl.close();
   }
   );
}
module.exports={userRegistration};