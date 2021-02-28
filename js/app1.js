//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const forma = document.getElementById('enviar-mail');
let validacionEmail = null;
let validacionAsunto = null;
let validacionMensaje = null;


const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');

//Event Listener
document.addEventListener('DOMContentLoaded', iniciarCarga);
email.addEventListener('blur', validarEmail);
asunto.addEventListener('blur', validarAsunto);
mensaje.addEventListener('blur', validarMensaje);
btnEnviar.addEventListener('click', enviarForma);
btnReset.addEventListener('click', resetForma);


//Funciones
function iniciarCarga(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50', 'cursor-not-allowed');
    email.value = '';
    mensaje.value = '';
    asunto.value = '';

}

function validarEmail(e){
    const error = document.querySelector('p.error');
    if(e.target.value.length !== 0){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(e.target.value)){
            if(error !== null){
                error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
            validacionEmail = true;
        }else{
            if(error !== null){
                error.remove();
            }
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email invalido');
            validacionEmail = false;
        }
    }else{
        if(error !== null){
            error.remove();
        }
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
        validacionEmail = false;
    }
    validacion();
}

function validacion(){
    if(validacionEmail && validacionMensaje && validacionAsunto){
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('opacity-50', 'cursor-not-allowed');
    }
    if(validacionEmail === false || validacionMensaje === false || validacionAsunto === false){
        btnEnviar.disabled = true;
        btnEnviar.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function validarAsunto(e){
    validar(e);
}
function validarMensaje(e){
    validar(e);
}

function validar(e){
    const error = document.querySelector('p.error');
    if(e.target.value.length > 0){
        if(error !== null){
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        if(e.target.type === 'textarea'){
            validacionMensaje = true;
        }else{
            validacionAsunto = true;
        }
    }else{
        if(error !== null){
            error.remove();
        }
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
        if(e.target.type === 'textarea'){
            validacionMensaje = false;
        }else{
            validacionAsunto = false;
        }
    }
    validacion();
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        forma.appendChild(mensajeError);
    }
}

function enviarForma(e){
    e.preventDefault();
    
    //Mostrar spinner
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'flex';
    const mensajeEnviado = document.createElement('p');
    mensajeEnviado.textContent = 'Envio exitoso';
    mensajeEnviado.classList.add('border','border-green-500', 'background-green-100', 'text-green-500', 'p-3', 'mt-5', 'text-center');

    //Hide spinner
    setTimeout(() => {
        spinner.style.display = 'none';
        forma.insertBefore(mensajeEnviado, spinner);
        
        setTimeout(() => {
            forma.removeChild(mensajeEnviado);

            resetForma(e);
        }, 2000);


    }, 3000);
}

function resetForma(e){
    e.preventDefault();
    email.value = '';
    mensaje.value = '';
    asunto.value = '';
    email.classList.remove('border', 'border-green-500');
    email.classList.remove('border', 'border-red-500');
    mensaje.classList.remove('border', 'border-green-500');
    mensaje.classList.remove('border', 'border-red-500');
    asunto.classList.remove('border', 'border-green-500');
    asunto.classList.remove('border', 'border-red-500');
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50', 'cursor-not-allowed');
}
