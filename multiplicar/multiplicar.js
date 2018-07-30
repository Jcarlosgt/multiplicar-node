/* Los requireds son librerias que trae node implicitas, adisionalmente estas pueden ser de otra fuente: 
cons fs = required('express') o de nuestra autorioa: cons fs = required('path del archivo') en este caso
vamos a utilizar una de nodo para el manejo de archivos */
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!base) {
            reject(`Error, el dato introducido ${base} no es valido`);
            return;
        }

        console.log('===================='.green);
        console.log(`=== Tabla del ${base} ===`.green);
        console.log('===================='.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let respuesta = base * i;
            data += `${base} * ${i} = ${respuesta}\n`;
        }

        resolve(data);
    });
}


let CrearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Error, el dato introducido "${base}" no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let respuesta = base * i;
            data += `${base} * ${i} = ${respuesta}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}`);
            }
        });
    });
}

/*module es un objeto el cual tiene una parte de exportaciones, esta parte nos permite poner objetos para
que sean trabajados de forma global */
module.exports = {
    CrearArchivo,
    listarTabla
}