

const fs=require('fs');

let crearArchivo= (base)=>{

    return new Promise((resolve, reject)=>{
        if (!Number (base)){
            reject(`el valor ${base}no es un numero`)
            return;
        }
    
        let data=''
    for(let i=1;i<=10; i++){
        let resultado = `${ base } * ${i} = ${base*i}\n`;
        data+=(resultado);
    }

    fs.writeFile(`tablas/tabla-${base} .txt`, data, (err) => {
        if (err) 
            reject (err)
        else
            resolve(`tabla-${base}.txt`);
        });
 

    });

}

module.exports={
    crearArchivo
}