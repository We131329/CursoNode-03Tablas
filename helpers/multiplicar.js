const fs = require('fs');

const crearArchivo = async(base = 5,listar,hasta = 10) =>{
    
    try{
        
        let salida = ''; 
        for(i = 1;i<=hasta;i++)
        {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log('============');
            console.log('TABLA DEL ',base);
            console.log('============');
            console.log(salida);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida);
        return `Tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}