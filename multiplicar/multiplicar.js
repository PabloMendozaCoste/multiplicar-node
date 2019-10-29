const fs = require('fs');
const colors= require('colors');

let listarTabla = (base, limite) =>{


    console.log('===================='.green);
    console.log(`tabla de ${ base }`.rainbow);
    console.log('===================='.green);


    if(!Number(base) ){
        reject(`El valor introducido ${ base } no es un numero`)
        return;
    }

    for(let i = 1;i<=limite;i++){
         console.log(`${base} * ${i} = ${base*i}\n`); 
    }

}


let crearArchivo = ( base, limite ) =>{

    return new Promise((resolve, reject) => {

        if(!Number(base) ){
            reject(`El valor introducido ${ base } no es un numero`)
            return;
        }
        
        let datos = '' ; 

        for(let i = 1;i<=limite;i++){
            datos += `${base} * ${i} = ${base*i}\n`; 
        }

        const data = new Uint8Array(Buffer.from( datos ));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        
            if (err) reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.rainbow)
       

        });



    })

} 

module.exports = {
    crearArchivo,
    listarTabla    
}