var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

// Escuchar eventos
socket.on('disconnect', function() {

    console.log('Conexion perdida');

});

// Enviar eventos
socket.emit('enviarMensaje', {
    usuario: 'Agustin',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log(mensaje);

});