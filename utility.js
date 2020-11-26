//UC3
//checking valid email
function userRegistration()
{
   var readline = require('readline');

   var rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });
   rl.question("Enter the email : " , function(email){
      const pet=/[a-zA-Z0-9]+([.+-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[a-z]{2,4}([.][a-z]{2})*/;
      if(!pet.test(email))
      console.log("Invalid");
      else
      console.log("Valid email");
      rl.close();
   }
   );
}
module.exports={userRegistration};