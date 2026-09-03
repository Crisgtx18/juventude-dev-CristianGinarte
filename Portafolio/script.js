// Esperamos a que la página web termine de cargar completamente
document.addEventListener('DOMContentLoaded', function () {

    // 1. Guardamos en variables los elementos HTML que vamos a usar
    var formularioDeContacto = document.getElementById('form-contacto');
    var cuadroDeMensajeEstado = document.getElementById('mensaje-estado');

    // 2. Escuchamos el evento cuando la persona presiona el botón de enviar
    formularioDeContacto.addEventListener('submit', function (evento) {

        // Evitamos que la página se recargue automáticamente
        evento.preventDefault();

        // Limpiamos los mensajes anteriores
        cuadroDeMensajeEstado.textContent = '';
        cuadroDeMensajeEstado.className = '';

        // 3. Obtenemos lo que escribió el usuario en cada campo
        var textoNombre = document.getElementById('nombre').value;
        var textoCorreoElectronico = document.getElementById('email').value;
        var textoAsunto = document.getElementById('asunto').value;
        var textoMensaje = document.getElementById('mensaje').value;

        // 4. Validamos que ningún campo esté vacío
        if (textoNombre === '' || textoCorreoElectronico === '' || textoAsunto === '' || textoMensaje === '') {
            cuadroDeMensajeEstado.textContent = 'Por favor, llena todos los campos.';
            cuadroDeMensajeEstado.className = 'error';
            return; // Detenemos la ejecución si falta algún dato
        }

        // 5. Validamos el formato del correo electrónico con la expresión regular
        var patronCorreoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (patronCorreoValido.test(textoCorreoElectronico) === false) {
            cuadroDeMensajeEstado.textContent = 'Ingresa un correo electrónico válido.';
            cuadroDeMensajeEstado.className = 'error';
            return; // Detenemos la ejecución si el correo es inválido
        }

        // 6. Si todo está correcto, mostramos el mensaje de éxito
        cuadroDeMensajeEstado.textContent = '¡Gracias ' + textoNombre + '! Tu mensaje ha sido enviado con éxito.';
        cuadroDeMensajeEstado.className = 'exito';

        // 7. Borramos los datos ingresados en el formulario
        formularioDeContacto.reset();
    });

});