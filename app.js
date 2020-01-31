const { argv } = require('./config/yargs');
const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarArchivo} = require('./multiplicar/multiplicar');


let base = argv.base;
let limite = argv.limit;
let command = argv._[0];

switch (command) {
    case 'crear':
        crearArchivo(base, limite)
            .then( archivo => console.log( `Success: ${archivo}` ))
            .catch( e => console.log(e))
        break;
    case 'listar':
        listarArchivo(base, limite)
            .then( archivo => console.log( `${archivo}` ))
            .catch( e => console.log(e))
        break;
    default:
        console.log('Command not recognized');
        break;
}
