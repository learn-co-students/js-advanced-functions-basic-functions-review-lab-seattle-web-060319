// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(cool='*') {
  return function (var1='special') {
    return `You are ${cool}${var1}${cool}!`;
  };
}

const Calculator = {
  add: function (a,  b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },
};


function actionApplyer(number, array) {
  if (array.length == 0) {
    return number;
  } else {
    array.forEach(fn => {
      number = fn(number);
    });
    return number;
  }
}
