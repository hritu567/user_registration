console.log("Welcome to User registration program");
const Utility= require('./utility');
var user= new Utility.userRegistration();
user.firstNamePattern();
user.lastNameePattern();
user.validEmail();
user.passordPattern();
user.mobilePattern();
user.passordPatternUpperCase();
user.passwordPatternNumericNum();
user.passwordPatternSpeChar();

