function countLetters(str){
  var splitString = str.split(' ').join('');

  var charObject = {};

  for(var i = 0; i < splitString.length; i++){
    var char = splitString[i];

    charObject[char] = charObject[char] ? charObject[char]+1 : 1;
  }

  // console.log("string: ", str);
  console.log("character object: ", charObject);
}

countLetters('lighthouse in the house');