function equal(){
    var sign = document.getElementById('2');
    var onScreen = document.getElementById('1');
   sign.addEventListener('click', event =>{
       
        var str = onScreen.textContent;

        if(str.includes('+')){
            var twoNums = str.split('+');
            var fisrtNum = Number(twoNums[0]);
            var SecondNum = Number(twoNums[1]);

            var result = fisrtNum + SecondNum;
            onScreen.textContent = result;
            console.log(result);
        } 
        if(str.includes('-')){
            var result = 0;
            if(str[0] == '-')
            {
               str[0] = str[0].replace('-', ' ');
               if(str[0].includes('+')){
                    var twoNums = str.split('+');
                    var fisrtNum = Number(twoNums[1]);
                    var SecondNum = Number(twoNums[2]);
                    result = fisrtNum - SecondNum;
                    onScreen.textContent = result;
                    return;         
               }else if(str.includes('x')){
                var twoNums = str.split('x');
                var fisrtNum = Number(twoNums[0]);
                var SecondNum = Number(twoNums[1]);
                result = fisrtNum * SecondNum;
                onScreen.textContent = result;
                return;         
                }else if(str.includes('÷')){
                    var twoNums = str.split('÷');
                    var fisrtNum = Number(twoNums[0]);
                    var SecondNum = Number(twoNums[1]);
                    result = fisrtNum / SecondNum;
                    onScreen.textContent = result;
                    return;         
                    }
                else{
               var twoNums = str.split('-');
               var fisrtNum = Number(twoNums[1]);
                var SecondNum = Number(twoNums[2]);
                result = -(fisrtNum + SecondNum);
                if(!isNaN(result)){
                    onScreen.textContent = result;
                    return;
                 }
                return;
               }
            }
            else{
            var twoNums = str.split('-');
                if(str[0] == '-'){

                var fisrtNum = Number(twoNums[0]);
                var SecondNum = Number(twoNums[1]);
                if(SecondNum == 'NaN'){
                    SecondNum =0;
                }
                result = fisrtNum - SecondNum ;
                }
                else{
                var fisrtNum = Number(twoNums[0]);
                var SecondNum = Number(twoNums[1]);
                
                result = fisrtNum - SecondNum;
                }
                onScreen.textContent = result;
                return;
            }
        }  
        if(str.includes('x')){
            var twoNums = str.split('x');
            var fisrtNum = Number(twoNums[0]);
            var SecondNum = Number(twoNums[1]);

            var result = fisrtNum * SecondNum;
            onScreen.textContent = result;
        } 
        if(str.includes('÷')){
            var twoNums = str.split('÷');
            var fisrtNum = Number(twoNums[0]);
            var SecondNum = Number(twoNums[1]);

            var result = fisrtNum / SecondNum;
            onScreen.textContent = result;
        } 
   });
}
equal();