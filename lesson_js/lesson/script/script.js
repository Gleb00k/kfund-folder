// let mas = [1,-10,-4,3,34,-25,25,5,-8,43]
// let length = mas.length;
// let total = 1
//   for (i = 0; i < length; i = i + 1) {
//       if (mas[i]>0){
//     total *= mas[i]
//       }
//       console.log(total)
// }



let textBlock = document.querySelectorAll('.info')
let btn = document.querySelectorAll('.btn')
for(let i = 0;i< btn.length;i++){
    btn[i].onclick = ()=>{
        if(textBlock[i].style.display === 'block'){
            textBlock[i].style.display = 'none'
        } else{
            textBlock[i].style.display = 'block'
        }
    }
}