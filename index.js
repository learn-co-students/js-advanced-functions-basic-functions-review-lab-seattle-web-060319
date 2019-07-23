// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrapper = "*"){
    return function(param = "special"){
        return `You are ${wrapper}${param}${wrapper}!`
    }
}

let Calculator = {add: function(x, y){return x + y}, subtract: function(x, y){return x - y}, multiply: function(x, y){return x*y}, divide: function(x, y){return x/y}}

function actionApplyer(base, functions){
    let iterator = base
    if(functions.length === 0){
        return base
    }else{
    for (let index = 0; index < functions.length; index++) {
        iterator = functions[index](iterator);
    };
    }
    return iterator
}