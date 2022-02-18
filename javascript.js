// let x = 5
// x = -x
// alert(x)


// let x = 25
// let y = 3
// alert(y%x)   остаток деления




// let a = 3
// let b = 0.5
// alert(a**b)     //степень





// let x = "learning "
// let y = "JS"
// alert(x+y)




// let n = 7
// n = n + 2
// n += 2
// n = n/3
// n /=3     //различные действия





// let counter = 6
// alert(counter-1)




// let a = 1 , b = 1
// let c = ++a
// let d = b++
// console.log(c,d)


function calculate(){
    let result
    let num1 = +document.getElementById("num1").value
    let num2 = +document.getElementById("num2").value
    if (op === '+') {
        result = num1 + num2
    }

    else if (op === '-') {
        result = num1 - num2
    }
    else if (op === '*') {
        result = num1 * num2
    }
    else if (op === '/') {
        result = num1 / num2
    }
    else if (op === '**') {
        result = num1 ** num2
    }
    document.getElementById("result").innerHTML=result
    if (num1 == "") {
        alert("Введи первое число")
    }
    else{
        
    }
    if (num2 == "") {
        alert("Введи второе число")
    }
    else{
        
    }
}