function Task9(number1, op, number2) {
    if(op=="+"){
        console.log((number1 + number2).toFixed(2))
    }
    else if(op=="-"){
        console.log((number1 - number2).toFixed(2))
    } else if(op=="*"){
        console.log((number1 * number2).toFixed(2))
    }
    else if(op=="/"){
        console.log((number1 / number2).toFixed(2))
    }
}
Task9(5, '+', 10)
Task9(25.5, '-', 3)