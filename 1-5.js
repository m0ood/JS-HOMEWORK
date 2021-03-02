function Task5(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log("yes")
    }
    else console.log("no")
}
Task5(1984)
Task5(2003)
Task5(4)