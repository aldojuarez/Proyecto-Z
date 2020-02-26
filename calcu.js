function calculos(valor){    
    console.log(valor);
    var pant=document.getElementById("pantalla");
    if(pant.value==null){
        pant.value=valor;
    }else{
        pant.value+=valor;
    }
    
}

function resultado(){
    var pant=document.getElementById("pantalla").value;
    var suma = pant.indexOf("+");
    var resta = pant.indexOf("-");
    var multi = pant.indexOf("*");
    var division = pant.indexOf("/");
    var residuo = pant.indexOf("%");
    var raiz = pant.indexOf("√");
    if(suma!=-1){
        var primero= pant.split("+");
        var resultado= parseInt(primero[0])+parseInt(primero[1]);
        limpia();
        document.getElementById("pantalla").value=resultado;
    }else if(resta!=-1){
        var primero= pant.split("-");
        var resultado= parseInt(primero[0])-parseInt(primero[1]);
        limpia();
        document.getElementById("pantalla").value=resultado;
    }else if(multi!=-1){
        var primero= pant.split("*");
        var resultado= parseInt(primero[0])*parseInt(primero[1]);
        limpia();
        document.getElementById("pantalla").value=resultado;
    } else if(division!=-1){
        var primero= pant.split("/");
        var resultado= parseInt(primero[0])/parseInt(primero[1]);
        limpia();
        document.getElementById("pantalla").value=parseFloat(resultado);
    }else if(residuo!=-1){
        var primero= pant.split("%");
        var resultado= parseInt(primero[0])%100;
        limpia();
        document.getElementById("pantalla").value=resultado;
    }else if(raiz!=-1){
        var primero= pant.split("√");
        var resultado=Math.sqrt(parseFloat(primero[1]));
        limpia();
        document.getElementById("pantalla").value=parseFloat(resultado);
    }     
}
function limpia(){
    document.getElementById("pantalla").value="";
}
    