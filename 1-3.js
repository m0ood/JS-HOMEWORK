function Task3 (number) {
    if (number % 2 == 0 && number % 5 == 0) {
        console.log("Число делится на 10")
    }else if (number % 2 == 0 && number % 3 == 0) {
        console.log("Число делится на 6")
    } else if (number % 7 == 0) {
        console.log("Число делится на 7")
    } else if (number % 5 == 0) {
        console.log("Число делится на 5")
    } else if (number % 3 == 0) {
        console.log("Число делится на 3")
    } else if (number % 2 == 0) {
        console.log("Число делится на 2")
    }
    else {
        console.log("Число не делится")
    }
}
Task3(100)
Task3(7863453413)
Task3(77)
Task3(22)
Task3(33)