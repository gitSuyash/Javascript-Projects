var op1=document.getElementById('one');
            var op2=document.getElementById('two');
             var op3=document.getElementById('three');
              var op4=document.getElementById('four');
               var op5=document.getElementById('five');
                var op6=document.getElementById('six');
                 var op7=document.getElementById('seven');
                  var op8=document.getElementById('eight'); 
                  var op9=document.getElementById('nine');
                
           
            count=1;
            
            function c1(){
                
                if(count%2!=0){
                    op1.value='X';
                    count++;
                    won();
                    op1.disabled=true;
                }else{
                    op1.value='O';
                     count++;
                     won();
                     op1.disabled=true;
                }
            
            }
             function c2(){
                
                if(count%2!=0){
                    op2.value='X';
                    count++;
                    won();
                    op2.disabled=true;
                }else{
                    op2.value='O';
                     count++;
                     won();
 op2.disabled=true;
        }
            }
             function c3(){
                
                if(count%2!=0){
                    op3.value='X';
                    count++;
                    won();
                    op3.disabled=true;
                }else{
                    op3.value='O';
                     count++;
                     won();
                     op3.disabled=true;
                }
            }
             function c4(){
                
                if(count%2!=0){
                    op4.value='X';
                    count++;
                    won();
                    op4.disabled=true;
                }else{
                    op4.value='O';
                     count++;
                     won();
                     op4.disabled=true;
                }
            }
             function c5(){
                
                if(count%2!=0){
                    op5.value='X';
                    count++;
                    won();
                    op5.disabled=true;
                }else{
                    op5.value='O';
                     count++;
                     won();
                     op5.disabled=true;
                }
            }
             function c6(){
                
                if(count%2!=0){
                    op6.value='X';
                    count++;
                    won();
                    op6.disabled=true;
                }else{
                    op6.value='O';
                     count++;
                     won();
                     op6.disabled=true;
                }
            }
             function c7(){
                
                if(count%2!=0){
                    op7.value='X';
                    count++;
                    won();
                    op7.disabled=true;
                }else{
                    op7.value='O';
                     count++;
                     won();
                     op7.disabled=true;
                }
            }
             function c8(){
                
                if(count%2!=0){
                    op8.value='X';
                    count++;
                    won();
                    op8.disabled=true;
                }else{
                    op8.value='O';
                     count++;
                     won();
                     op8.disabled=true;
                }
            }
             function c9(){
                
                if(count%2!=0){
                    op9.value='X';
                    count++;
                    won();
                    op9.disabled=true;
                }else{
                    op9.value='O';
                     count++;
                     won();
                     op9.disabled=true;
                }
            }
            function won(){
                if(op1.value==op2.value && op2.value==op3.value && op3.value=='X'){    //1,2,3
             document.getElementById('result').innerHTML='PLAYER 1 WON!';  
             dis();
            
                }
                else if(op1.value==op2.value && op2.value==op3.value && op3.value=='O'){   //1,2,3
                 document.getElementById('result').innerHTML='PLAYER 2 WON!'; 
                 dis();
            
                }
                else if(op4.value==op5.value && op5.value==op6.value && op6.value=='X'){  //4,5,6
             document.getElementById('result').innerHTML='PLAYER 1 WON!';        
             dis();
            
                }
                else if(op4.value==op5.value && op5.value==op6.value && op6.value=='O'){  //4,5,6
             document.getElementById('result').innerHTML='PLAYER 2 WON!';        
           dis();
                }
                else if(op7.value==op8.value && op8.value==op9.value && op9.value=='X'){   //7,8,9
             document.getElementById('result').innerHTML='PLAYER 1 WON!';  
           dis();
                }
                else if(op7.value==op8.value && op8.value==op9.value && op9.value=='O'){  //7,8,9
             document.getElementById('result').innerHTML='PLAYER 2 WON!'; 
            dis();
                }
                else if(op1.value==op4.value && op4.value==op7.value && op7.value=='X'){   //1,4,7
             document.getElementById('result').innerHTML='PLAYER 1 WON!'; 
            dis();
                }
                else if(op1.value==op4.value && op4.value==op7.value && op7.value=='O'){   //1,4,7
             document.getElementById('result').innerHTML='PLAYER 2 WON!'; 
           dis();
                }
                else if(op2.value==op5.value && op5.value==op8.value && op8.value=='X'){   //2,5,8
             document.getElementById('result').innerHTML='PLAYER 1 WON!';      
           dis();
                }
                else if(op2.value==op5.value && op5.value==op8.value && op8.value=='O'){   //2,5,8
             document.getElementById('result').innerHTML='PLAYER 2 WON!'; 
            dis();
                }
                else if(op3.value==op6.value && op6.value==op9.value && op9.value=='X'){   //3,6,9
             document.getElementById('result').innerHTML='PLAYER 1 WON!'; 
            dis();
                }
                else if(op3.value==op6.value && op6.value==op9.value && op9.value=='O'){   //3,6,9
             document.getElementById('result').innerHTML='PLAYER 2 WON!';         
            dis();
                }
                else if(op1.value==op5.value && op5.value==op9.value && op9.value=='X'){   //1,5,9
             document.getElementById('result').innerHTML='PLAYER 1 WON!'; 
            dis();
                }
                else if(op1.value==op5.value && op5.value==op9.value && op9.value=='O'){   //1,5,9
             document.getElementById('result').innerHTML='PLAYER 2 WON!'; 
            dis();
                }
                else if(op3.value==op5.value && op5.value==op7.value && op7.value=='X'){    //3,5,7
             document.getElementById('result').innerHTML='PLAYER 1 WON!'; 
           dis();
                }
                else if(op3.value==op5.value && op5.value==op7.value && op7.value=='O'){     //3,5,7
             document.getElementById('result').innerHTML='PLAYER 2 WON!'; 
           dis();
                }
               
               
            }
            function res(){
                history.go(0);
            }
            function dis(){
                op1.disabled=true;
                op2.disabled=true;
                op3.disabled=true;
                op4.disabled=true;
                op5.disabled=true;
                op6.disabled=true;
                op7.disabled=true;
                op8.disabled=true;
                op9.disabled=true;
                
            }