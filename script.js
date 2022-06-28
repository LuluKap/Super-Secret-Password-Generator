generateBtn = document.querySelector("#generate");

function generatePassword(){
  var L = "abcdefghijklmnopqrstuvwxyz";
  var U = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var N = "0123456789";
  var S = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var length = 0
  var password = []
  var lowercase = 0
  var uppercase = 0
  var numbers = 0   
  var special = 0
  var i = 0

  function getUserInput(){
    lowercase = confirm("Do you want lowercase letters?");
    uppercase = confirm("Do you want uppercase letters?");
    numbers = confirm("Do you want numbers?");
    special = confirm("Do you want special characters?");

    length = prompt("How many characters would you like your password to be?");
    while (length < 8 || length > 128){
      length = prompt("Your password must be between 8 and 126 characters. Do you want to try again?");
    }
  }

  getUserInput();
  while (lowercase == false && uppercase == false && numbers == false && special == false) {
    var confirmation = confirm("You must choose at least one character type. Do you want to try again?");
    if (confirmation == true){
      getUserInput();
    }
  }

  while (password.length < length){
    if (lowercase == true){
      password[i]= L[Math.floor(Math.random() * L.length)];
      i++;
      
    }
    if (uppercase == true){
      password[i]= U[Math.floor(Math.random() * U.length)];
      i++;
      
    }
    if (numbers == true){
      password[i]= N[Math.floor(Math.random() * N.length)];
      i++;
      
    }
    if (special == true){ 
      password[i]= S[Math.floor(Math.random() * S.length)];
      i++;
      
    }
  }
// takes the password array and turns it into a string - Stack Overflow
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  return array;
  }

// takes the array and shuffles it
  shuffle(password);
  var password = password.join("");

  return password;
}

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
