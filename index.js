// Your code here
function saturdayFun(doing="roller-skate"){
    return `This Saturday, I want to ${doing}!`
}
function mondayWork(vari="go to the office"){
    return `This Monday, I will ${vari}.`
}

function wrapAdjective(visflair = "*"){
    return function(param = "special"){
        return `You are ${visflair}${param}${visflair}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
      },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1, num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        return num1 / num2;
    }
}
function actionApplyer(start, funcarr){
    if(funcarr.length === 0){
        return start
    } else {
        for (let i = 0; i < funcarr.length; i++) {
            start = funcarr[i](start)
        }
        return start
    }

}