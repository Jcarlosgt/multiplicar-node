/* Yargs es un paquete que nos ayuda a crear comandos y obtener sus valores con su funcion 
.command('Nombre del comando', 'Descripcion del mismo', {'parametros{'parametros del comando'}}) */

let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea una archivo con la tabla de multiplicar dentro', opts)
    .help()
    .argv;

module.exports = {
    argv
}