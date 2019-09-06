// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function (x = "special") {
        return `You are ${flair}${x}${flair}!`
    }
}

const Calculator = {
    add() { return 1 + 3 },
    subtract() { return 1 - 3 },
    multiply() { return 1 * 3 },
    divide() { return 10 / 5 }
}

function actionApplyer(int, fxarr) {
    if (fxarr.length == 0) {
        return 0
    }
    else {
        let xint = int
        fxarr.forEach(fx => {
            xint = fx(xint)
        });
        return xint
    }
}