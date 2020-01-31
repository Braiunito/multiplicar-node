const fs = require('fs');
const colors = require('colors');

let crearArchivo = async (base, limite) => {
    return new Promise((resolve, reject)=>{
        if (!Number(base)) reject(`Error: la base '${base}' no es un numero`)

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        let filename = `tabla-${base}-to-${limite}.txt`;
        let route = `./tablas/${filename}`;
        fs.writeFile(route, data, async (err) =>{
            if (err)
                reject(err)
            else
                resolve('Archivo '+filename.green+' creado con exito!')
        });
    })
}

let listarArchivo = async (base, limite) => {
    return new Promise((resolve, reject)=>{
        if (!Number(base)) reject(`Error: la base '${base}' no es un numero`)

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}