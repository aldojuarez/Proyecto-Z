function calculos(valor){    
    console.log(valor);
    var pant=document.getElementById("pantalla");
    if(pant.value==null){
        pant.value=valor;
    }else{
        pant.value+=valor;
    }
    
}
function limpia(){
    document.getElementById("pantalla").value="";
}

function resultado (){
    document.getElementById("pantalla").value= eval(document.getElementById("pantalla").value);
}
    