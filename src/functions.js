function cal(){    
    var screen = document.getElementsByClassName("retangleForFoundation")[0];

    for (let index = 1; index <= 9; index++) {
        var div = document.createElement("div");
        div.setAttribute('class','buttonForNumbers');
        if(index == 1 || index == 4 || index == 7){
            var numLeft = 15 + index ;
            var numLTop = 180 + index * 35;
            div.style.left = numLeft +'px';
            div.style.top = numLTop +'px';

            if(index == 7){
                div.textContent = 1;
            }
            if(index == 4){
                div.textContent = 4;
            }
            if(index == 1){
                div.textContent = 7;
            }
        }
        else if(index == 2 || index == 5 || index == 8){
            var numRight = 120+ index ;
            var numLTop = 145 + index * 35;
            div.style.left = numRight+'px';
            div.style.top = numLTop+'px';

            if(index == 8){
                div.textContent = 2;
            }
            if(index == 5){
                div.textContent = 5;
            }
            if(index == 2){
                div.textContent = 8;
            }
        }
        else {
            var numRight = 220 + index ;
            var numLTop = 110 + index * 35;
            div.style.left = numRight+'px';
            div.style.top = numLTop+'px';

            if(index == 9){
                div.textContent = '3';
            }
            if(index == 6){
                div.textContent = '6';
            }
            if(index == 3){
                div.textContent = '9';
            }
        }
        screen.appendChild(div);
    }

    for (let i = 0; i < 4; i++) {
        var divSign = document.createElement("div");
        divSign.setAttribute('class','buttonForSign');     
        var numTop= 216 + i * 98 ;
        divSign.style.left = 325 +'px';
        divSign.style.top = numTop +'px';

        if(i == 0){
            divSign.textContent = '÷';
        }
        if(i == 1){
            divSign.textContent = 'x';
        }
        if(i == 2){
            divSign.textContent = '-';
        }
        if(i == 3){
            divSign.textContent = '+';
        }
        screen.appendChild(divSign);
    }

    var equals = document.createElement("div");
    equals.setAttribute('class','buttonForSign');
    equals.setAttribute('id','2');       
    equals.style.left = 190 +'px';
    equals.style.top = 520 +'px';
    equals.textContent = '=';
    equals.style.color = 'red'
    screen.appendChild(equals);

    var divZero = document.createElement("div");
    divZero.setAttribute('class','buttonForNumbers');
    divZero.textContent = '0';
    divZero.style.left = 20 +'px';
    divZero.style.top = 520 +'px';
    screen.appendChild(divZero);

    var reset = document.createElement("div");
    reset.setAttribute('class','buttonForSign');
    reset.textContent = 'C';
    reset.style.left = 120 +'px';
    reset.style.top = 520 +'px';
    reset.style.width = 60 + 'px';
    reset.style.color = 'green'
    screen.appendChild(reset);
}

cal();
