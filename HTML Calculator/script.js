var operand=document.getElementById('op1');
           var operator;
           var arr=[];
           var opr1;
           var opr2;
           var sub=true;
           var arr1=[];
          var in1=document.getElementById('op2');
var c=0;
    function one(){
            
                switch(c){
                 case (0):
                      arr.push(1);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                   
              
             }

           if(sub==false){
                   arr1.push(1);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
           function two(){
                switch(c){
                 case (0):
                      arr.push(2);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                   
             
             }
               if(sub==false){
                   arr1.push(2);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
     function three(){
               switch(c){
                 case (0):
                      arr.push(3);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                  
               
             }
               if(sub==false){
                   arr1.push(3);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function four(){
                switch(c){
                 case (0):
                      arr.push(4);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
               
              
             }
               if(sub==false){
                   arr1.push(4);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function five(){
             switch(c){
                 case (0):
                      arr.push(5);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                   
              
             }
             if(sub==false){
               
         
                   arr1.push(5);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function six(){
               switch(c){
                 case (0):
                      arr.push(6);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                  
             
             }
               if(sub==false){
                   arr1.push(6);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function seven(){
               switch(c){
                 case (0):
                      arr.push(7);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                   
               
             }
               if(sub==false){
                   arr1.push(7);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function eight(){
               switch(c){
                 case (0):
                      arr.push(8);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                  
               
             }
               if(sub==false){
                   arr1.push(8);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function nine(){
               switch(c){
                 case (0):
                      arr.push(9);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                   
              
             }
               if(sub==false){
                   arr1.push(9);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function zero(){
               switch(c){
                 case (0):
                      arr.push(0);
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                   
               
             }
               if(sub==false){
                   arr1.push(0);
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
            function point(){
               switch(c){
                 case (0):
                      arr.push('.');
               operand.value= arr.join('');
               break;
             
               case(1):
                   arr.unshift(operand.value);
                   
               
             }
               if(sub==false){
                   arr1.push('.');
                  opr2=arr1.join('');
                  console.log(opr2);
               }
           }
    function sum(){
        
               opr1=operand.value;
               console.log(opr1);
               arr.push('+');
               if(c==0){
               operand.value=arr.join('');
           }
               sub=false;
                operator='+';
           }
    function min(){
               opr1=operand.value;
               console.log(opr1);
               arr.push('-');
                if(c==0){
               operand.value=arr.join('');
           }
               sub=false;
                operator='-';
           }
           function pro(){
               opr1=operand.value;
               console.log(opr1);
               arr.push('*');
                if(c==0){
               operand.value=arr.join('');
           }
               sub=false;
                operator='*';
           }
           function div(){
               opr1=operand.value;
               console.log(opr1);
               arr.push('/');
                if(c==0){
               operand.value=arr.join('');
           }
               sub=false;
               operator='/';
           }
            function mod(){
               opr1=operand.value;
               console.log(opr1);
               arr.push('%');
               if(c==0){
               operand.value=arr.join('');
           }
               sub=false;
                operator='%';
           }
           function pow(){
               opr1=operand.value;
               console.log(opr1);
               arr.push('pow');
                if(c==0){
               operand.value=arr.join('');
           }
               sub=false;
                operator='pow';
           }
    function answer(){
        switch(operator){
            case('+'):
            
              if(c==0){
                  in1.value=operand.value ;
              }else{
                in1.value=( operand.value + '+' + opr2 );
            }
            operand.value= Number(opr1) + Number(opr2);
        c++; 
                 while(arr.length>0){
         arr.pop();
     }
    while(arr1.length>0){
         arr1.pop();
     }
            break;
            case('-'):
                if(c==0){
                  in1.value=operand.value ;
              }else{
                in1.value=( operand.value + '-' + opr2 );
            }
                 
                operand.value= Number(opr1) - Number(opr2);
             c++;
                while(arr.length>0){
         arr.pop();
     }
    while(arr1.length>0){
         arr1.pop();
     }
                break;
                case('*'):
                    if(c==0){
                  in1.value=operand.value ;
              }else{
                in1.value=( operand.value + '*' + opr2 );
            }
                    operand.value= Number(opr1) * Number(opr2);
                    c++;
                      while(arr.length>0){
         arr.pop();
     }
    while(arr1.length>0){
         arr1.pop();
     }
                    break;
                    case('/'):
                        if(c==0){
                  in1.value=operand.value ;
              }else{
                in1.value=( operand.value + '/' + opr2 );
            }
                         
                        operand.value= Number(opr1) / Number(opr2);
                c++;         
                while(arr.length>0){
         arr.pop();
     }
    while(arr1.length>0){
         arr1.pop();
     }
                        break;
                        case('%'):
                           if(c==0){
                  in1.value=operand.value ;
              }else{
                in1.value=( operand.value + '%' + opr2 );
            }
                         operand.value= Number(opr1)%Number(opr2);
                         c++;
                           while(arr.length>0){
         arr.pop();
     }
    while(arr1.length>0){
         arr1.pop();
     }
                        break;
                        case('pow'):
                            if(c==0){
                  in1.value=operand.value ;
              }else{
                in1.value=( operand.value + 'pow' + opr2 );
            }
                         operand.value=Math.pow(Number(opr1),Number(opr2));
                         c++;
                           while(arr.length>0){
         arr.pop();
     }
    while(arr1.length>0){
         arr1.pop();
     }
                         break;
                    default:
                        'good try';
                }
           }
             function kill(){
     while(arr.length>0){
         arr.pop();
     }
    while(arr1.length>0){
         arr1.pop();
     }
        operand.value=arr;
    console.log(arr);
    history.go(0);
    }