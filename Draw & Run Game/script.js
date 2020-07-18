var aremove=0;
var jremove=0;
var a=0;
var j=0;
var i=0;
var count=0;
            function play(){
                count++;
                 i=Math.floor(Math.random()*10+1);
                 document.getElementById('draw').innerHTML=i;
                
                 if(count%2!=0){
                 document.getElementById('btn').style.backgroundColor='greenyellow';
                 document.getElementById('btn').style.color='grey';
                
 
            jremove=j;
            j=j+i;
               if(j>0){
                   document.getElementById('ps1').style.visibility='hidden';
                   if(j>51){
                   j=j-i;
                   console.log(j);
               }else{     
                console.log(j);
                call1(j,jremove);
            }
               }
            }else if(count%2==0){
                document.getElementById('btn').style.backgroundColor='orange';
                document.getElementById('btn').style.color='white';
                aremove=a;
                a=a+i;
                if(a>0){
                   document.getElementById('ps2').style.visibility='hidden';
                    if(a>51){
                   a=a-i;
                   console.log(a);
               }else{     
                 console.log(a);
                call2(a,aremove);
            }
               }
               
            }
            }
            function call1(j,jremove){
                document.getElementById('ps1').style.visbility='hidden';
                if(j==51){
                     document.getElementById('draw').innerHTML='PLAYER 1 WON!';
                    document.getElementById('player1w').style.visibility='visible';
                    document.getElementById('player1w').style.padding='2px';
                   
                    document.getElementById('btn').disabled=true;
                }else{
                if(j<21){
    document.getElementsByClassName('img')[0].childNodes[j].childNodes[0].style.visibility='visible';
    }
      else if(j>=21 && j<31){
    j1=j-21;
    document.getElementById('second').childNodes[j1].childNodes[0].style.visibility='visible';
            }else if(j>=31 && j<51){
    j2=51-j;
    document.getElementsByClassName('img')[1].childNodes[j2].childNodes[0].style.visibility='visible';
    }
    }
     if(jremove<21){
    document.getElementsByClassName('img')[0].childNodes[jremove].childNodes[0].style.visibility='hidden';
    }
      else if(jremove>=21 && jremove<31){
    j1remove=jremove-21;
    document.getElementById('second').childNodes[j1remove].childNodes[0].style.visibility='hidden';
            }else if(jremove>=31 && jremove<51){
    j2remove=51-jremove;
    document.getElementsByClassName('img')[1].childNodes[j2remove].childNodes[0].style.visibility='hidden';
    }
    }
            
            function call2(a, aremove){
                document.getElementById('ps2').style.visbility='hidden';
                if(a==51){
                      document.getElementById('draw').innerHTML='PLAYER 2 WON!';
                    document.getElementById('player2w').style.visibility='visible';
                     document.getElementById('player2w').style.padding='2px';
                     document.getElementById('btn').disabled=true;
                }else{
                if(a<21){
    document.getElementsByClassName('img')[0].childNodes[a].childNodes[1].style.visibility='visible';
    }
      else if(a>=21 && a<31){
    a1=a-21;
    document.getElementById('second').childNodes[a1].childNodes[2].style.visibility='visible';
            }else if(a>=31 && a<51){
    a2=51-a;
    document.getElementsByClassName('img')[1].childNodes[a2].childNodes[2].style.visibility='visible';
    }
    }
               
    if(aremove<21){
    document.getElementsByClassName('img')[0].childNodes[aremove].childNodes[1].style.visibility='hidden';
    }
      else if(aremove>=21 && aremove<31){
    a1remove=aremove-21;
    document.getElementById('second').childNodes[a1remove].childNodes[2].style.visibility='hidden';
            }else if(aremove>=31 && aremove<51){
    a2remove=51-aremove;
    document.getElementsByClassName('img')[1].childNodes[a2remove].childNodes[2].style.visibility='hidden';
    }
    }function kill(){
                history.go(0);
            }