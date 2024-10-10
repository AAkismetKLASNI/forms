function getChange(product, sum) {
  const products = {
    cross: 1000,
    shirt: 900,
    ball: 400,
  };

  if (products[product]) {
    const change = sum - products[product];

    if (change >= 0) {
      console.log(`Ваша сдача ${change}`);
    } else {
      console.log('Вам не хватает средств');
    }
  } else {
    console.log('Такого продукта нет!');
  }
}

// getChange('ball', 400);

function searchNearestPoint(a, b) {
  const d1 = Math.pow(a[0], 2) + Math.pow(a[1], 2);
  const d2 = Math.pow(b[0], 2) + Math.pow(b[1], 2);

  d1 > d2
    ? console.log(`Ближе всего к началу ${b}`)
    : console.log(`Ближе всего к началу ${a}`);
}

// searchNearestPoint([2, 2], [1, 1]);

function outputGreating(course) {
  switch (course) {
    case 1:
      console.log('Привет 1 курс');
      break;
    case 2:
      console.log('Привет 2 курс');
      break;
    case 3:
      console.log('Привет 3 курс');
      break;
    case 4:
      console.log('Привет 4 курс');
      break;
    default:
      console.log('Неверное. Введите число от 1 до 5 НЕ ВКЛЮЧИТЕЛЬНО');
  }
}

// outputGreating(1);
// outputGreating(2);
// outputGreating(3);
// outputGreating(4);
// outputGreating(0);

function calculateWorkTime(count, startTimeinMin) {
  let result = startTimeinMin;

  for (let i = 1; i < count; i++) result += startTimeinMin + 20;

  console.log(result);
}

// calculateWorkTime(2, 60);

function getIndexMinNumber(numbers) {
  let min = numbers[0];
  let minIndex = 0;

  numbers.forEach((num, index) => {
    if (num < min) {
      min = num;
      minIndex = index;
    }
  });

  console.log(min, minIndex);
}

// getIndexMinNumber([2, 3, 1, 5]);
