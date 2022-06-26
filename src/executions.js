function exec(){
    var arrayButtonsOfSigns = document.querySelectorAll('.buttonForNumbers'); 
    var buttonForSign = document.querySelectorAll('.buttonForSign'); 
    var screenClassEl = document.getElementById('1'); 

    var numberOnScreen = 0;
    arrayButtonsOfSigns.forEach(btn => {

        btn.addEventListener('click', event =>{ 

            numberOnScreen = event.target.textContent;
            screenClassEl.textContent += numberOnScreen;
            //console.log(event.target.textContent)
        });  
     });

     buttonForSign.forEach(btn => {

        btn.addEventListener('click', event =>{ 
            if(btn.textContent == 'C'){
                screenClassEl.textContent = '';
                return;
            } 
            if(btn.textContent == '='){
                return;
            } 

            if(screenClassEl.textContent.substring(0, 1) == '-'){
                console.log('pastet')
            }
            if(screenClassEl.textContent.includes('+') 
                //|| screenClassEl.textContent.includes('-')
                || screenClassEl.textContent.includes('÷')
                || screenClassEl.textContent.includes('x')){
                return;
            }
            numberOnScreen = event.target.textContent;
            screenClassEl.textContent += numberOnScreen;
           // console.log(event.target.textContent)
        });  
     });
}

exec()
