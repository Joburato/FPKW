function home(){
    window.location.replace("index.html")
}

var rek = 0

function relogio(){
    rek++
    if(rek == 1){
        div = document.getElementById('btns')
        div.style.display = "none"
        div = document.getElementById('timer')
        div.style.color = "black"
        div = document.getElementById('minute')
        div.style.color = "black"
        div = document.getElementById('seconds')
        div.style.color = "black"
    }
    if(rek == 2){
        div = document.getElementById('btns')
        div.style.display = "block"
        div = document.getElementById('timer')
        div.style.color = "white"
        div = document.getElementById('minute')
        div.style.color = "white"
        div = document.getElementById('seconds')
        div.style.color = "white"
        rek = 0
    }
}

function hreset(){
    window.location.replace("sanda.html")
}

var ptcounter = 0
var ptver = 0
var ptazul = 0
var vermelho = 0
var azul = 0

function ptred(){
    ptcounter++
    if(ptcounter == 1){
        vermelho++
        const element = document.querySelector('.ponto1');
        element.style.backgroundColor = 'red';
        document.getElementById('ponto1').style.border = '10px solid white';
        
    }

    if(ptcounter == 2){
        vermelho++
        const element = document.querySelector('.ponto2');
        element.style.backgroundColor = 'red';
        document.getElementById('ponto2').style.border = '10px solid white';
    }

    if(ptcounter == 3){
        vermelho++
        const element = document.querySelector('.ponto3');
        element.style.backgroundColor = 'red';
        document.getElementById('ponto3').style.border = '10px solid white';

        if(vermelho == 3){
            ptcounter = 6;
        }

    }

    if(ptcounter == 4){
        vermelho++
        const element = document.querySelector('.ponto4');
        element.style.backgroundColor = 'red';
        document.getElementById('ponto4').style.border = '10px solid white';

        if(vermelho == 3){
            ptcounter = 6;
        }
    }

    if(ptcounter == 5){
        vermelho++
        const element = document.querySelector('.ponto5');
        element.style.backgroundColor = 'red';
        document.getElementById('ponto5').style.border = '10px solid white';

        if(vermelho == 3){
            ptcounter = 6;
        }

    }

    if(ptcounter == 6){

        if (vermelho > azul){
            ptver++;
            document.getElementById("PTVER").innerHTML = ptver;
        }

        if (vermelho < azul){
            ptazul++;
            document.getElementById("ptazul").innerHTML = ptazul;
        }
        
        vermelho = 0
        azul = 0
        ptcounter = 0
        document.getElementById('ponto1').style.backgroundColor = 'black';
        document.getElementById('ponto1').style.border = '10px solid black';
        document.getElementById('ponto1').style.backgroundImage = 'none';

        document.getElementById('ponto2').style.backgroundColor = 'black';
        document.getElementById('ponto2').style.border = '10px solid black';
        document.getElementById('ponto2').style.backgroundImage = 'none';

        document.getElementById('ponto3').style.backgroundColor = 'black';
        document.getElementById('ponto3').style.border = '10px solid black';
        document.getElementById('ponto3').style.backgroundImage = 'none';

        document.getElementById('ponto4').style.backgroundColor = 'black';
        document.getElementById('ponto4').style.border = '10px solid black';
        document.getElementById('ponto4').style.backgroundImage = 'none';

        document.getElementById('ponto5').style.backgroundColor = 'black';
        document.getElementById('ponto5').style.border = '10px solid black';
        document.getElementById('ponto5').style.backgroundImage = 'none';
    }

}

function ptblue(){
    ptcounter++
    if(ptcounter == 1){
        azul++
        const element = document.querySelector('.ponto1');
        element.style.backgroundColor = '#0098db';
        document.getElementById('ponto1').style.border = '10px solid white';
        
    }

    if(ptcounter == 2){
        azul++
        const element = document.querySelector('.ponto2');
        element.style.backgroundColor = '#0098db';
        document.getElementById('ponto2').style.border = '10px solid white';
    }

    if(ptcounter == 3){
        azul++
        const element = document.querySelector('.ponto3');
        element.style.backgroundColor = '#0098db';
        document.getElementById('ponto3').style.border = '10px solid white';

        if(azul == 3){
            ptcounter = 6;
        }

    }

    if(ptcounter == 4){
        azul++
        const element = document.querySelector('.ponto4');
        element.style.backgroundColor = '#0098db';
        document.getElementById('ponto4').style.border = '10px solid white';

        if(azul == 3){
            ptcounter = 6;
        }
    }

    if(ptcounter == 5){
        azul++
        const element = document.querySelector('.ponto5');
        element.style.backgroundColor = '#0098db';
        document.getElementById('ponto5').style.border = '10px solid white';

        if(azul == 3){
            ptcounter = 6;
        }

    }

    if(ptcounter == 6){

        if (vermelho > azul){
            ptver++;
            document.getElementById("PTVER").innerHTML = ptver;
        }

        if (vermelho < azul){
            ptazul++;
            document.getElementById("ptazul").innerHTML = ptazul;
        }
        
        vermelho = 0
        azul = 0
        ptcounter = 0
        document.getElementById('ponto1').style.backgroundColor = 'black';
        document.getElementById('ponto1').style.border = '10px solid black';
        document.getElementById('ponto1').style.backgroundImage = 'none';

        document.getElementById('ponto2').style.backgroundColor = 'black';
        document.getElementById('ponto2').style.border = '10px solid black';
        document.getElementById('ponto2').style.backgroundImage = 'none';

        document.getElementById('ponto3').style.backgroundColor = 'black';
        document.getElementById('ponto3').style.border = '10px solid black';
        document.getElementById('ponto3').style.backgroundImage = 'none';

        document.getElementById('ponto4').style.backgroundColor = 'black';
        document.getElementById('ponto4').style.border = '10px solid black';
        document.getElementById('ponto4').style.backgroundImage = 'none';

        document.getElementById('ponto5').style.backgroundColor = 'black';
        document.getElementById('ponto5').style.border = '10px solid black';
        document.getElementById('ponto5').style.backgroundImage = 'none';
    }

}

function ptredblue(){
    ptcounter++
    if(ptcounter == 1){
        document.getElementById('ponto1').style.backgroundImage = 'url(redblue.png)';
        document.getElementById('ponto1').style.border = '10px solid white';
        
    }

    if(ptcounter == 2){
        document.getElementById('ponto2').style.backgroundImage = 'url(redblue.png)';
        document.getElementById('ponto2').style.border = '10px solid white';
    }

    if(ptcounter == 3){
        document.getElementById('ponto3').style.backgroundImage = 'url(redblue.png)';
        document.getElementById('ponto3').style.border = '10px solid white';

    }

    if(ptcounter == 4){
        document.getElementById('ponto4').style.backgroundImage = 'url(redblue.png)';
        document.getElementById('ponto4').style.border = '10px solid white';
    }

    if(ptcounter == 5){
        document.getElementById('ponto5').style.backgroundImage = 'url(redblue.png)';
        document.getElementById('ponto5').style.border = '10px solid white';

    }

    if(ptcounter == 6){

        if (vermelho > azul){
            ptver++;
            document.getElementById("PTVER").innerHTML = ptver;
        }

        if (vermelho < azul){
            ptazul++;
            document.getElementById("ptazul").innerHTML = ptazul;
        }
        
        vermelho = 0
        azul = 0
        ptcounter = 0
        document.getElementById('ponto1').style.backgroundColor = 'black';
        document.getElementById('ponto1').style.border = '10px solid black';
        document.getElementById('ponto1').style.backgroundImage = 'none';

        document.getElementById('ponto2').style.backgroundColor = 'black';
        document.getElementById('ponto2').style.border = '10px solid black';
        document.getElementById('ponto2').style.backgroundImage = 'none';

        document.getElementById('ponto3').style.backgroundColor = 'black';
        document.getElementById('ponto3').style.border = '10px solid black';
        document.getElementById('ponto3').style.backgroundImage = 'none';

        document.getElementById('ponto4').style.backgroundColor = 'black';
        document.getElementById('ponto4').style.border = '10px solid black';
        document.getElementById('ponto4').style.backgroundImage = 'none';

        document.getElementById('ponto5').style.backgroundColor = 'black';
        document.getElementById('ponto5').style.border = '10px solid black';
        document.getElementById('ponto5').style.backgroundImage = 'none';
    }

}





