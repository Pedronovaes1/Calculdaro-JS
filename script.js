var caracter = "";
var display = document.getElementById('display');
//display.innerHTML = eval("1-1");

let aux = "";

function add(caracter){
    aux += caracter;
    display.innerHTML = aux;
}

function calc(){
    display.innerHTML = eval(aux);
    aux = eval(aux);
}

function del(){
    display.innerHTML = "";
    caracter = "";
    aux = "";
}

function delLast(){
    aux = aux.slice(0, -1);
    display.innerHTML = aux;
}