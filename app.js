function limpiar(){
    document.getElementById('miformulario').reset();
}

function sumar(){        
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);    
    document.getElementById('el-resultado').innerHTML = x+y;
    const sumarflecha=()=>{console.log(`la suma de ${x} y ${y} es: ${x+y}`)}
    sumarflecha()                              
}

function restar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x-y;
    const restarflecha=()=>{console.log(`la resta de ${x} y ${y} es: ${x-y}`)}
    restarflecha()    
}    

function multiplicar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);       
    document.getElementById('el-resultado').innerHTML = x*y;    
    const multiplicarflecha=()=>{console.log(`la multiplicacion de ${x} y ${y} es: ${x*y}`)}
    multiplicarflecha()
}

function dividir() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x/y;
    const dividirflecha=()=>{console.log(`la division de ${x} y ${y} es: ${x/y}`)}
    dividirflecha()
}