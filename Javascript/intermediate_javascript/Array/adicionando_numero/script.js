array = []
var contator = 0
function fizzBuzz(){
    contator =  contator + 1

    if (contator % 3 == 0 && contator % 5 == 0 ){
        array.push("FizzBuzz")
    }else if (contator % 3 == 0){
        array.push("Fizz")
    }else if (contator % 5 == 0 ) {
        array.push("Buzz")
    }else{
        array.push(contator)
    }

    console.log(array)
}

