//UC9
//cpmbining all use cases
var readlinesync=require('readline-sync');
class userRegistration
{  //UC1
   firstNamePattern=()=>{
      const pet=/[A-Z]{1}[a-z]{2,}/;
      var firstName=readlinesync.question("Enter the first name: ");
      if(!pet.test(firstName))
      console.log("Invalid");
      else
      console.log("Valid First Name");
   } 
   //UC2
   lastNameePattern=()=>{
      const pet=/[A-Z]{1}[a-z]{2,}/;
      var lastName=readlinesync.question("Enter the last name: ");
      if(!pet.test(lastName))
      console.log("Invalid");
      else
      console.log("Valid last Name");
   }
   //UC3
   validEmail=()=>{
      const pet=/[a-zA-Z0-9]+([.+-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[a-z]{2,4}([.][a-z]{2})*/;
      var email=readlinesync.question("Enter the email: ");
      if(!pet.test(email))
      console.log("Invalid");
      else
      console.log("Valid email");
   }
   //UC4
   mobilePattern=()=>{
      const pet=/((\+){1}91){1}[ ]*[0-9]{10}/;
      var number=readlinesync.question("Enter the number: ");
      if(!pet.test(number))
      console.log("Invalid number");
      else
      console.log("Valid number");
   }
   //UC5
   passordPattern=()=>{
      const pet=/[a-zA-Z0-9]{8,}/;
      var password=readlinesync.question("Enter the password pattern1: ");
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
   }
   //UC6
   passordPatternUpperCase=()=>{
      const pet=/([a-zA-Z0-9]*[A-Z]+[a-zA-Z0-9]*)/;
      var password=readlinesync.question("Enter the password pattern2: ");
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
   }
   //UC7
   passwordPatternNumericNum=()=>{
      const pet=/(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/;
      var password=readlinesync.question("Enter the password pattern3: ");
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
   }
   //UC8
   passwordPatternSpeChar=()=>
   {
      const pet=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%*+]).{8,}/;
      var password=readlinesync.question("Enter the password pattern4: ");
      if(!pet.test(password))
      console.log("Invalid password");
      else
      console.log("Valid passord");
   }
}
module.exports={userRegistration};