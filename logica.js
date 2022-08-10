const BotonHola = document.getElementById('ejecutar');
BotonHola.addEventListener("click",saludo);

function saludo(){
    const persona = document.getElementById('nombre');
    const Texto = document.getElementById('res');
    respuesta = 'Saludos';
    Texto.innerText('respuesta');

}