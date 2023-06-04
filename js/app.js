'use strict'

const carrfon = document.querySelector('.carrfon');
const punto = document.querySelectorAll('.punto');

/*Defino cada click en un punto retorna posición de ese punto
    Aplica un transform translateX al carr-fon
    quita la calse activo de los elementos punto
    agrega el activo al punto seleccionado
    */
punto.forEach((doPunto, i)=>{
    punto[i].addEventListener('click',()=>{
        let pos= i
        let oper = pos * -50
        carrfon.style.transform = `translateX(${oper}%)`
        punto.forEach((doPunto,l)=>{
            punto[l].classList.remove('imgactivo')
        })
        punto[i].classList.add('imgactivo')
        document.getElementsByClassName('imgactivo').style.backgroundColor = "orange";

    })

})
