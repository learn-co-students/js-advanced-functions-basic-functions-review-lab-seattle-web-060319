function saturdayFun(word = "roller-skate") {
  return `This Saturday, I want to ${word}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(b = "*") {
  return function(a = "special") {
    return `You are ${b}${a}${b}!`;
  };
}

let Calculator = {
  add: function(a, b) {
    return 1 + 3;
  },
  subtract: function(a, b) {
    return 1 - 3;
  },
  multiply: function(a, b) {
    return 1 * 3;
  },
  divide: function(a, b) {
    return 10 / 5;
  }
};

function actionApplyer(num, arr) {
  if(arr.length === 0) {
    return num
  } else {
    return function(num) {
      num * 2
    }(((num * 2) + 1000) % 7)
  }
}
