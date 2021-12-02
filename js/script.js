//Variables
const form = document.getElementById("form-facturador");
const order = {
    servicio:"",
    velocidad:"",
    nombre:"",
    fecha:"",
    monto:0
}


//Funciones

const setData = (e) => {
    e.preventDefault();

    for (let index = 0; index < 4; index++) {
        if(e.target[`${index}`].checked ){
            order.servicio=e.target[`${index}`].value;
            continue;
        }
        //ayuda a setear la velodicidad
        if(order.servicio==="internet" && index===1){
            order.velocidad = e.target[`${index}`].value
            continue;
        }

        console.log(e.target[`${index}`].value);
    }
}


//Eventos

form.addEventListener('submit',setData);