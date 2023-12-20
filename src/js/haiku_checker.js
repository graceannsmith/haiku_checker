
export default class HaikuChecker{
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  
  syllableCounter(line) {
    const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
    const matchSyllables = line.match(syllableRegex); // matchSyllables = ['so', 'met', 'hing']
    
    
    // the below code was what wasw breaking my terminal... oops
    // for (let i =0; i < matchSyllables.length; i++) {
    //   if (matchSyllables[i].includes('e')) {
    //     i--;
    //   }
    // }

    return matchSyllables ? matchSyllables.length : 0;
  }
    // let lineArray = line.split(' ');
    // let syllableCount = 0;
    // for (let i = 0; i < lineArray.length; i++) {
    //   const wordArray = lineArray[i].split(/[aeiouy]{1,2}(?![e$])/gi);
    //   const result = wordArray.filter(Boolean).length;
    //   syllableCount += result;
      
    //  }
    //  return syllableCount;
    

    //var syllableCount = word.match(/[aeiouy]{1,2}/gi).length;
    // var syllableCount = word.match(/[aeiouy]{1,2}(?![e$])/gi).length;

  // lineCountVerifyer(line1, line2, line3){
  //   if(line)
  // }
//const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[   ^aeiouy]*$|[^aeiouy](?=[   ^aeiouy]))?/gi;

  }
//   /*
// syllableCounter(line) {
//   if (typeof line !== 'string') {
//     throw new Error('Input must be a string');
//   }

//   let lineArray = line.split(' ');
//   let syllableCount = 0;

//   for (let i = 0; i < lineArray.length; i++) {
//     const wordArray = lineArray[i].split(/[aeiouy]/gi);
//     const result = wordArray.filter(Boolean).length;
//     syllableCount += result;
//   }

//   return syllableCount;
// }
//   /*