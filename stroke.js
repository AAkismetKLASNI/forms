const stroke = 'test';

const outputOfAllDublicateChar = (text) => {
  const arrChars = text.split('');

  const result = {};

  arrChars.forEach((el) => (result[el] ? (result[el] += 1) : (result[el] = 1)));

  console.log(result);
};

// outputOfAllDublicateChar(stroke);

const string = 'купить молоко а потом помыть кроссовки';

const getLengthEveryWord = (text) => {
  const arrWords = text.split(' ');

  let minWord = arrWords[0];
  let maxWord = arrWords[0];

  arrWords.map((word) => {
    if (word.length > maxWord.length) maxWord = word;

    if (word.length < minWord.length) minWord = word;
  });
  return {
    maxWord,
    minWord,
    maxLength: maxWord.length,
    minLength: minWord.length,
  };
};

// console.log(getLengthEveryWord(string));

const words = 'купить молоко а потом помыть кроссовки';

const outputAverage = (text) =>
  console.log(text.length / text.split(' ').length);

// outputAverage(words);
