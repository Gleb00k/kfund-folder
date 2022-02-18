                //if


//   let message = "Hello"
// if (2 > 1) {
//     alert(massage)   //сравнение цифрами
// }


// let a = 5
// let b = 10    //сравнение переменными 
// if (a < b) {
//     alert(massage)
// }


// if (2 + 1 === 1 || '1' == 1) {
//     alert(message)
// }



//  && - логическое и (все правда)
//  || - логическое или(что-то одно правдивое)





// if ("1") {
//     alert(message)
//}









                    //else

//let number = 3
// if (number > 10){
//     alert(message)
// }
// else{
//     alert(message)
// }




                    //условный оператор ?




// let message = "Hello "
// let messageEnd

// if (5>1) {
//     messageEnd = "Den"
// }else{
//     messageEnd = "Ann"
// }
// let messageEnd = (5 > 1) ?  "Den" : "Ann"


// message += messageEnd
// alert(message)



// let a = prompt("Офиц. название js")
// if (a === "ECMAScript") {
//     alert("хароооооош")
// } else{
//     alert("ЛОХ рил название ECMAScript")
// }





// let a = prompt("Введи число")
// if (a > 0) {
//     alert(1)
// }
// else if (a < 0) {
//     alert(-1)
// }
// else if (a == 0) {
//     alert(0)
// }



// let a = 3
// let b = 77
// result = (a + b > 4) ? "Много" : "Мало"
// alert(result)



// let login = prompt("login")
// message = (login == "Сотрудник") ? "Привет" : (login == "Директор") ? "Здравствуйте" : (login == "" ) ? "Нет логина" : ""
// alert(message)







// let opady = true
// if (opady == true){
//     alert("beri zontik")
// }
// else{
//     alert("ne beri")
// }





                    //function


// function checkStudent(name, age){
//     if (age > 17){
//         console.log(name + "okonchil/a shkolu")
//     }
//     else{
//         console.log(name + "ne okonchil/a shkolu")
//     }
// }


// checkStudent("petya ", 23)


// function sum(a,b){
//     return a+b
// }
// alert(sum(1,2))








// function numbers(a,b){
//     if (a > b){
//         return a
//     } else if (a < b){
//         return b
//     } else alert("a = b")
// }
// alert(numbers(2,5))
// alert(numbers(76,5))
// alert(numbers(5,5))









// function pow(x,n){//x = 3;n = 2
//     let result = x
//     for (let i = 1; i < n; i ++){
//         result = result*x
//     } return result
// }

// alert(pow(2,0))



// function add(a,b){
//     return a+b
// }
// function multiply(a,b){
//     return a*b
// }
// let result = add(multiply(36325, 9824), 777)
// alert(result)








// function srednee(a,b,c){
//     if ((a>b) && (b>c)){
//         return b
//     } else if ((a>c) && (c>b)){
//         return c
//     } else if ((b>a && a>c)){
//         return a
//     }
//     if ((a<b) && (b<c)){
//         return b
//     } else if ((a<c) && (c<b)){
//         return c
//     } else if ((b<a && a<c)){
//         return a
//     }
// }
// alert(srednee(1343,2435,32))




// function solver(a,b,c,d,e){
//     if ((a!=Number)||(b!=Number)||(c!=Number)||(d!=Number)||(e!=Number)){
//         alert("wrong input")
//     }
//     let s = a**2 + 5 * b * c + d / 3 + e
//     return s
// }
// alert(solver(40,-9,0.5,7,100))   






                    //while

// let num = 0 //while
// while (num < 5){
//     console.log(num)
//     num++
// }



// let num = 5
// while (num){
//     console.log(num)
//     num--
// }





// let num = 1000
// while( num>0){
//     alert(num)
//     num= num-7
// }



// for (let num= 0; num<5;num++){
//     alert(num)
// }




// for(let num=0;num<5;num++){
//     if(num==2) continue
//     console.log(num)
// }



                        //Метки



// firstFor: for(let num = 0; num < 2; num++){
//     for(let size = 0; size < 3; size++){
//         if (size == 3){
//             break firstFor
//         }
//         console.log(size)
//     }
// }




// let num = 0
// while(num <= 10){
//     console.log(num)
//     num++
// }



// let num = 0
// while(num < 3){
//     console.log(`"Число :"${num}`)
//     num++
// }



// firstFor: for(let num = 0; num<2; num++){
//     for(let size = 0; size<3; size++){
//         if (size ==1 ){
//         break firstFor
//         console.log(size)
//     }
//     }
// }





// for (let cat = 0; cat <= 10; cat++){
//     console.log(`${cat} + "=^.^="`)
// }





// for(let num = 2; num < 11; num++){
//     if(num%2 == 0){
//         console.log(num)
//     }
// }



// for(let num = 1; num < 21; num++){
//     if((num%2 == 0) && (num%3 == 0)){
//         console.log(num)
//     }
// }







// let a
// do{
//     a = prompt("chislo") 
// } while (a<=100)





//  let num = 20
//  while(num <= 1){
//      console.log(num)
//      num=num+20
// }







// let products = ['Tea','Bread','Butter','Sugar']
// products[3] - 'chocolate'
// products[10] - 'Cake'
// alert(products.length)


// products.pop()
// alert(products)
// products.push()
// alert(products)




// let arr = [1, {name: "Ann"}, true, function()]
// for(let i = 0; i < products.length; i++){
//     alert(products[i])
// }






// for(let product of products){
//     alert(product)
// }







// let styles = ['Джаз','Блюз']
// alert(styles)
// styles.push('Рок-н-рол')
// alert(styles)
// alert(styles[0])
// styles.unshift('Реп','Реггі')
// alert(styles)
// let i = Math.floor((styles.length - 1)/2)
// styles[i] = 'Классика'
// alert(styles)



// let fruct = ['Апельсин','Банан','Груша']
// alert(fruct)
// alert(`Число фруктов в моей корзине: ${fruct.length}`)
// fruct.push('Яблоко','Ананас')
// fruct.unshift('Грейпфрут')
// alert(fruct)
// alert(`Число фруктов в моей корзине: ${fruct.length}`)
// fruct.pop()
// fruct.shift()
// alert(fruct)
// alert(`Число фруктов в моей корзине: ${fruct.length}`)






                           //splice




// let mas = [2,4,6,3,7]
// mas.splice(1,2)
// alert(mas)
// mas.splice(0,0,7)
// alert(mas)





// let fruct = ["Яблоко", "Апельсин", "Груша"]
// fruct.splice(fruct.length-2,1,"Ананас")
// alert(fruct)





// let t = a[0]
// a[0] = a[a.length-1]
// a[a.length-1] = t
// alert(a)





// let a = [1,2,3,4,5]
// let out = ''
// for(let i = 0 ; i < a.length ; i++){
//     out += a[i] + '--' 
// }

// document.querySelector('.out').innerHTML = out




// mas = [2,3,4,5,6,7,87,24,8,8,32]
// for(let i = 0;i<mas.lenght; i++){
//     if(mas[i]>5){
//         alert(`${mas[i]}`)
//     }
// }






// let mas = [2,5,9,15,0,4]
// for(let num of mas){
//     if((num>3)&&(num<10)){
//         console.log(num)
//     }
// }



// let mas = [1,2,5,9,4,13,4,10]
// for(let num of mas){
//     if(num ==4){
//         alert("EEEEE!")
//         break
//     }
// }





// mas = [10,20,30,50,235,3000]
// for(let i = 0;i<mas.length; i++){
//     let num = String(mas[i])
//     let char = num[0]
//     if((char == 1) || (char == 2) || (char == 5)){
//         console.log(num)
//     }
// }





// let a = [12,5,6,17,13]
// let max = a[0]
// for(let i = 0;i<a.length;i++){
//     if(a[i]>max){
//         max=a[i]
//     }
// }
// console.log(max)





// let a = [12,5,6,17,13]
// let min = a[0]
// for(let i = 0;i<a.length;i++){
//     if(a[i]<min){
//         min=a[i]
//     }
// }
// console.log(min)





// let a = [12,5,6,17,13]
// sum = 0
// for(let i = 0;i<a.length;i++){
//     sum +=a[i] 
// }
// alert(sum)
// alert("h")



// let titleElem = document.getElementById('main-heading')
// console.log(titleElem.innerHTML)

// let newTitle = prompt('Please provide a new title')
// titleElem.innerHTML = newTitle
                      






                            //ИГРА

let block = document.querySelector('.block')
let btnDown = document.querySelector('.btn_down')
let btnTop = document.querySelector('.btn_up')
let btnLeft = document.querySelector('.btn_left')
let btnRight = document.querySelector('.btn_right')
let inputWidth = document.getElementById('input-width')
let inputHeight = document.getElementById('input-height')
let inputRadius = document.getElementById('input-radius')
let inputColor = document.getElementById('input-color')
let inputRound = document.getElementById('input-round')
let btnCreate = document.querySelector('.btn-create')
let clr = document.querySelector('.btn-clr')


btnCreate.onclick = ()=>{
    let iwValue = inputWidth.value + 'px'
    let ihValue = inputHeight.value + 'px'
    let icValue = inputColor.value

    newBlock = document.createElement('div')
    newBlock.style.width = iwValue
    newBlock.style.height = ihValue
    newBlock.style.background = icValue
    newBlock.style.position = 'absolute'
    newBlock.style.left = '0px'
    newBlock.style.top = '0px'


    if(inputRound.checked == true){
        newBlock.style.borderRadius = inputRadius.value + 'px'
    }


    document.querySelector('.field').append(newBlock)
}
let blockTop = 0
let blockLeft = 0

clr.onclick = () => {
    newBlock.style.display = 'none'
}

btnDown.onclick = function(){
    newBlock.style.top= blockTop + 'px'
    if(blockTop <= 500){ 
    blockTop += 50 
    newBlock.style.top= blockTop + 'px'
    }else{
        alert("You lose")
        newBlock.style.top = '0px'
        newBlock.style.left = '0px'
        location.reload()
    }

}

btnTop.onclick = function(){
    if(blockTop >= 50){ 
        blockTop -= 50 
        newBlock.style.top= blockTop + 'px'
        }else{
            alert("You lose")
            newBlock.style.top = '0px'
            newBlock.style.left = '0px'
        }
}


btnLeft.onclick = function(){
    if(blockLeft <= 500){ 
        blockLeft += 50 
        newBlock.style.left= blockLeft + 'px'
        }else{
            alert("You lose")
            newBlock.style.top = '0px'
            newBlock.style.left = '0px'
        }
}

btnRight.onclick = function(){
    if(blockLeft >= 50){ 
        blockLeft -= 50 
        newBlock.style.left= blockLeft + 'px'
        }else{
            alert("You lose")
            newBlock.style.top = '0px'
            newBlock.style.left = '0px'
        }
}