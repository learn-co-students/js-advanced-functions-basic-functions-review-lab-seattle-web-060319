// Your code here
function saturdayFun(arg = 'roller-skate') {
  return `This Saturday, I want to ${arg}!`
}


let mondayWork = function(arg = 'go to the office') {
  return `This Monday, I will ${arg}.`
}

function wrapAdjective(param1="*") {
  return function innerFunc(param2="special") {
    return `You are ${param1}${param2}${param1}!`
  }
}

let Calculator = {
  add: function() {
    return 1 + 3
  },
  subtract: function() {
    return 1 - 3
  },
  multiply: function() {
    return 1 * 3
  },
  divide: function() {
    return 10 / 5
  }
}

function actionApplyer(start, arr) {
  if(arr.length === 0) {
    return start
  } else {
    return function() {
      start * 2
    }(((start * 2) + 1000) % 7)
  }
}
