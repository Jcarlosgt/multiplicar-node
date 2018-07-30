const argv = require('./Config/yargs.js').argv;
const { CrearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        {
            listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => console.log(err));

        }
        break;
    case 'crear':
        {
            CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        }
        break;

    default:
        {
            console.log('Comando no reconocido');
        }

}


/*--- Forma de obtener un valor de un process.argv --- */

/*  Process es un objeto global el cual tiene informacion de todos los procesos del sistema, dentro de 
los cuales existe argv, que guarda los parametros de los comandos de node */

/*Guardando los parametros de argv */
/* let argv2 = process.argv; */
/*Guardando en la variable el parametro que acabamos de agregar  */
/* let parametro = argv[2]; */
/*Split es una funcion que divide o fracciona un arreglo a partir de indice que se le indique
en este caso se divide a partir del = y se toma el valor 1 que es la base */
/* let base = parametro.split('=')[1]; */