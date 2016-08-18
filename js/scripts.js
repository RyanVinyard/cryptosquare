var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var characterString = "";
var dirtyArray = [];
var cleanArray = [];
var squareDimensionRough ="";


var encrypt = function (input) {
  characterString = input.toLowerCase();
  dirtyArray = characterString.split("");

  dirtyArray.forEach(function(dirtyIndex) {
  function checkChar (character) {
    return character === dirtyIndex;
  }
    if (alphabetArray.some(checkChar)) {
      cleanArray.push(dirtyIndex);
    }
  });

    console.log(cleanArray);

  // squareDimensionRough = Math.sqrt(characterString.length);
  // squareDimension = Math.ceil(squareDimensionRough);
}




//front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    encrypt(userInput);
  });
});
