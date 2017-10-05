
function countIndex(charSpace) {
  var charMap = {}
  for (var i = 0; i < charSpace.length; i++){
    var mychar = charSpace[i].toLowerCase()

    if (mychar !== " ") {
     if (!charMap[mychar]) {
          charMap[mychar] = [];
          charMap[mychar].push(i);
      } else {
        charMap[mychar].push(i)
      }
    }

  }
return charMap
};
console.log(countIndex("Lighthouse in the house"));
