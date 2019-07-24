// Your code here

function saturdayFun(string='roller-skate'){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string='go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string = '*'){
    return function(name = 'a hard worker') {
        return `You are ${string}${name}${string}!`
    }    
};

let Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function() {
        return 1 - 3;
    },
    multiply: function () {
        return 1 * 3;
    },
    divide: function () {
        return 10 / 5;
    }
}

function actionApplyer(integer, array){
    if(array.length == 0) {
        return integer;
      }else {
        array.forEach(fn => {
          integer = fn(integer)
        })
        return integer;
      }
}