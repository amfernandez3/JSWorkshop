function generartablero(){
    var cantidad=64;//document.getElementById('cantidad').value;
    var alto=110 //ò document.getElementById('alto').value;
    var ancho=110  //ó document.getElementById('ancho').value;
    document.getElementById('cuadros').innerHTML='';
    document.getElementById('cuadros').style.width = ((2 + parseInt(ancho)) * 8) + "px";
    
    for (var i=0;i<cantidad;i++){
        if(Math.floor(i/8)%2 == i%2){
            document.getElementById('cuadros').innerHTML+='<div id="cuadros" style="border:solid 1px;width:'+ ancho +'px;height:' + alto +'px;background-color:rgb(126, 196, 126);float:left;"><div>';
        }else{
            document.getElementById('cuadros').innerHTML+='<div id="cuadros" style="border:solid 1px;width:'+ ancho +'px;height:' + alto +'px;background-color:rgb(62, 74, 62);float:left;"><div>';
    
        }
        }
    }