var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

/*pincel.fillStyle = "black";
pincel.beginPath();
pincel.moveTo(100-tela.offsetLeft,175-tela.offsetTop);
pincel.lineTo(100-tela.offsetLeft,350-tela.offsetTop);
pincel.lineTo(275-tela.offsetLeft,350-tela.offsetTop);
pincel.fill();*/

pincel.strokeStyle = "darkblue";
//passo1
desenhaLinha(10,400,310,400);
//passo2
desenhaLinha(80,400,80,50);
//passo 3
desenhaLinha(80,50,260,50);
//passo 4
desenhaLinha(260,50,260,100);
/*//passo 5 cabeça:
desenhaCirculo(260,132,32);
//passo 6 tronco:
desenhaLinha(260,164,260,300);
//passo 7 braços:
desenhaLinha(260,164,225,228);
desenhaLinha(260,164,295,228);
//passo 8 pernas
desenhaLinha(260,300,225,364);
desenhaLinha(260,300,295,364);*/

function desenhaLinha(x,y,x1,y1){
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x1, y1);
    pincel.stroke();
}

function desenhaCirculo(x, y, raio) {
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*3.14);
    pincel.stroke();
}


function desenhaForca(){
    switch (letrasErradas.length) {
        case 0:
            reiniciaCanvas();
            break;
        case 1:
            desenhaCirculo(260,132,32);
            break;
        case 2:
            desenhaLinha(260,164,260,300);
            break;
        case 3:
            desenhaLinha(260,164,225,228);
            break;
        case 4:
            desenhaLinha(260,164,295,228);
            break;
        case 5:
            desenhaLinha(260,300,225,364);
            break;
        case 6:
            desenhaLinha(260,300,295,364);
            setTimeout(function(){
                
                alert(`Você perdeu, a palavra correta era ${palavra}`)
            },500)
            
            break;
        default:

            break;
    }
}

function reiniciaCanvas(){
    pincel.clearRect(0,0,350,400);
    desenhaLinha(10,400,310,400);
    desenhaLinha(80,400,80,50);
    desenhaLinha(80,50,260,50);
    desenhaLinha(260,50,260,100);
}


