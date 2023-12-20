import HaikuChecker from '../src/js/haiku_checker.js';

describe('HaikuChecker', () => {
  test('should correctly create object with three line', () => {
      const haiku = new HaikuChecker("this is a poem", "this is second line", "this is third line");
      expect(haiku.line1).toMatch("this is a poem");
      expect(haiku.line2).toMatch("this is second line");
      expect(haiku.line3).toMatch("this is third line");
  });


// test('should return true for a line with 5 syllables', () => {
//   const haiku = new HaikuChecker("This is not a haiku");
//   const result = haiku.syllableCounter(5);
//   expect(result).toEqual(false);
// });

test('should return the number of syllables in the line', () => {
    const haiku = new HaikuChecker();
    const numberOfSyllables = haiku.syllableCounter('read');
    expect(numberOfSyllables).toBe(1); 
  })
});
