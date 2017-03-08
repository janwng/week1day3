//input: input string
//output: return all the indices [i] where each characrer is found
//so... return 1) number of occurences, 2) number to represent the indice of the character

//eg.
//'hello' would



function countLetters(str){
  var splitString = str.split(' ').join('').toLowerCase();

  var charObject = {};

  for(var i = 0; i < splitString.length; i++){
    var char = splitString[i];

    if(charObject[char]){
      charObject[char].push(i);
    } else {
      charObject[char] = [i];
      // console.log(ch);
    }}

  // console.log("string: ", str);
  console.log( charObject);
}

countLetters('lighthouse in the house');