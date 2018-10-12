function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  
}
// uppercase.toUpperCase() === uppercase;
  
//   else {
//     lowercase = 'hello';
//   }
//   lowercase.toLowerCase() === lowercase;

//   var mixedCase = 'I love you, Grandma.';
//   mixedCase.toLowerCase() === mixedCase;
//   mixedCase.toUpperCase() === mixedCase;