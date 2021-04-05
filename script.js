// specific character arrays
var lower = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbol = ['@','!','#','$','%','^','&','*','?','~','+','=']
var number = ['1','2','3','4','5','6','7','8','9','0']


var generateBtn = document.getElementById("generate");

//Prompts
var generatePassword = function(){
  var charPool = [];
  var possiblePwd = [];
  var guaranteeletter =[];

  var charPrompt = prompt('please specify how long you would like your password to be?  It can be between 8 to 128 characters')

  var length = charPrompt

  if (charPrompt = "" || charPrompt < 8 || charPrompt > 128){
    window.alert("You've entered an invalid character amount");
    return
  }

  var lowerCase = window.confirm("Do you want lower case letters in your password?")
  var upperCase = window.confirm("Do you want upper case letters in your password?")
  var symbols = window.confirm("Do you want symbols in your password?")
  var numbers = window.confirm("Do you want number in your password?")

  //putting the characters into a pool
  if(lowerCase){
    charPool = charPool.concat(lower) 
    guaranteeletter.push(lower[Math.floor((Math.random() * lower.length))])
  }

  if(upperCase){
    charPool = charPool.concat(upper)
    guaranteeletter.push(upper[Math.floor((Math.random() * upper.length))])

  }

  if(symbols){
    charPool = charPool.concat(symbol)
    guaranteeletter.push(symbol[Math.floor((Math.random() * symbol.length))])

  }

  if(numbers){
    charPool = charPool.concat(number)
    guaranteeletter.push(number[Math.floor((Math.random() * number.length))])

  }
  //if statement for when user says no to all choices
  if(lowerCase ===false && upperCase === false && symbols === false && numbers === false){
    alert("You must pick at least one criteria")
    return
  }
  //loop to generate and post the password in the dialog box
  for (var i =0; i < length; i ++){
    var random = Math.floor((Math.random() * charPool.length));
    possiblePwd.push(charPool[random]);
  }

  possiblePwd.join('')
  console.log(possiblePwd.join(''))
  var passwordbox = document.getElementById("password");

  passwordbox.value = possiblePwd.join('')
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);