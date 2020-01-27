
const colors= require('colors')
const argv = require('yargs')

            .command('listar','imprime en consola la tabla de multiplicar',{
                base:{
                     demand: true,
                     alias:'b'
                },
                limite:{
                    alias: 'l',
                    default:10
                }
            })
            .help()
            .argv;
            

const {crearArchivo} =require('./multiplicar/multiplicar')

console.log('hola'.red);
            
//let argv2= process.argv;

//console.log(argv.base);
//console.log(argv.limite);

//let parametro= argv[2];
//split convierte un string a un arreglo,
//let base=parametro.split('=')[1]

 
 //console.log(base);
  //  crearArchivo(base)
//0   .then(archivo=> console.log(`archivo ${archivo} creado exitosamente`)) 