//Variables formularios
const formulario = document.getElementById('enviar-mail');
const formularioEmail = document.getElementById('email');
const formularioAsunto = document.getElementById('asunto');
const formularioMensaje = document.getElementById('mensaje');

//Variables botones
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');

//Event Listener incial
document.addEventListener('DOMContentLoaded', iniciarCarga);

function iniciarCarga(){
    //Event listener secundarios
    formularioEmail.addEventListener('blur', validar);
    formularioAsunto.addEventListener('blur', validar);
    formularioMensaje.addEventListener('blur', validar);

    //Valores iniciales
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50', 'cursor-not-allowed');
}



//Funciones primaria
function validar(e){
    //Identificar el formulario (3 if)
    if(e.target.type === 'email'){
        const resultado = e.target.value.indexOf('@');
        const clase = formulario.querySelectorAll('p');
        if(resultado === -1){
            mensajeError('Email invalido');
        }else{
            if(clase.length !== 0){
                formulario.removeChild(formulario.querySelector('p'));
            }
        }
    }

    if(e.target.type === 'text'){
        console.log('asunto');
    }
    if(e.target.type === 'textarea'){
        console.log('mensaje');
    }

    //Desbloquear btnEnviar
    /*if(e.target.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50', 'cursor-not-allowed');
        
        const error = document.querySelector('#enviar-mail .error');
        if(error){
            formulario.removeChild(error);
        }

    }else{
        btnEnviar.disabled = true;
        btnEnviar.classList.add('opacity-50', 'cursor-not-allowed');
        mensajeError('Todos los campos son obligatorios');
    }*/
}


//Funciones secundaria
function mensajeError(mensaje, clase){
    const mensajeDeError = document.createElement('p');
    mensajeDeError.textContent = mensaje;
    mensajeDeError.classList.add('border','border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    
    //Insertar Mensaje erros en HTML
    const error = document.querySelectorAll('.error');
    
    if(error.length === 0){
        formulario.appendChild(mensajeDeError);
    }

}