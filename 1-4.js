
function Task4(count, category, day) {
    var price
    if (day=="Friday" && category=="Students"){
        price=8.45
        if(count>=30)
        {
            price*=0.85
        }
    }
    else if (day=="Friday" && category=="Corporate"){
        price=10.90
        if(count>=100){
            count-=10
        }
    }
    else if (day=="Friday" && category=="Regular"){
        price=15
        if(count>=10 && count<=20){
            price *=0.95
        }
    }
    else if (day=="Saturday" && category=="Students"){
        price=9.80
        if(count>=30)
        {
            price*=0.85
        }
    }
    else if (day=="Saturday" && category=="Corporate"){
        price=15.60
        if(count>=100){
            count-=10
        }
    }
    else if (day=="Saturday" && category=="Regular"){
        price=20
        if(count>=10 && count<=20){
            price *=0.95
        }
    }
    else if (day=="Sunday" && category=="Students"){
        price=10.46
        if(count>=30)
        {
            price*=0.85
        }
    }
    else if (day=="Sunday" && category=="Corporate"){
        price=16
        if(count>=100){
            count-=10
        }
    }
    else if (day=="Sunday" && category=="Regular"){
        price=22.50
        if(count>=10 && count<=20){
            price *=0.95
        }
    }
    console.log("Total price:"+count*price)
}

Task4(30, "Students", "Sunday");
Task4(40, "Regular", "Saturday");