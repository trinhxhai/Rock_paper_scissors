let player_choice;
let computer_choice;
let restart = document.getElementById("restart");

let player_score = document.getElementById("player_score");
let comp_score = document.getElementById("comp_score");

let computer_state = document.getElementById("computer_state");
let start=document.getElementById("start");

let rock = document.getElementById("R");
let paper = document.getElementById("P");
let scissor = document.getElementById("S");

let comp_hide = document.getElementById("comp_hide");
let player_hide = document.getElementById("player_hide");

function computerReady(){
    computer_state.style.backgroundColor="Green";
    computer_state.innerHTML="Ready!";
    }    
function rand(a,b){
    return a + Math.round( (b-a+1)*Math.random() );
  }

function compter_choose(){
    let ran = rand(1,3);
    if(ran==1) {
        computer_choice='R';
    }else if(ran==2) {
     computer_choice='P';

    }else {
        computer_choice='S';
    }
    console.log("Computer:"+ computer_choice);
    computerReady();
}
function showhide(){
    if(computer_choice=='R') {
        comp_hide.style.background="url('bua.png') no-repeat center";
        comp_hide.style.backgroundSize="cover";
    }else if(computer_choice=='P') {
     comp_hide.style.background="url('bao.png') no-repeat center";
     comp_hide.style.backgroundSize="cover";
    }else {
        comp_hide.style.background="url('keo.png') no-repeat center";
        comp_hide.style.backgroundSize="cover";
    }

}


function aWin(a,b){
    if ((a=="R")&&(b=="S")) return true ;
    if ((a=="S")&&(b=="R")) return false ;

    if ((a=="R")&&(b=="P")) return false ;
    if ((a=="P")&&(b=="R")) return true ;

    if ((a=="P")&&(b=="S")) return false ;
    if ((a=="S")&&(b=="P")) return true ;
}
restart.onclick = function (){
    comp_score.innerHTML =0;
    player_score.innerHTML =0;
    comp_hide.style.background="url('dauhoi.png') no-repeat center";
    player_hide.style.background="url('dauhoi.png') no-repeat center";
}
start.onclick = function (){

    compter_choose();
    computerReady();
    rock.onclick=function (){
        
        player_hide.style.background="url('bua.png') no-repeat center";
        player_hide.style.backgroundSize="cover";

        player_choice="R";
        console.log("Player: "+ player_choice);
        if (computer_choice==player_choice){
            showhide();
           // alert("TRY AGAIN");
            
        }else if (aWin(player_choice,computer_choice)){
            showhide();
           // alert("YOU WIN");
            player_score.innerHTML ++;

        }else {
            showhide();
           // alert("COMPUTER WIN");
            comp_score.innerHTML ++;
            

        }
        showhide();
        compter_choose();
        
    }
    paper.onclick=function (){
        player_hide.style.background="url('bao.png') no-repeat center";
        player_hide.style.backgroundSize="cover";


        player_choice="P";
        console.log("Player: "+ player_choice);

        if (computer_choice==player_choice){
            //alert("TRY AGAIN");
        }else if (aWin(player_choice,computer_choice)){
           // alert("YOU WIN");
            player_score.innerHTML ++;
        }else {
           // alert("COMPUTER WIN");
            comp_score.innerHTML ++;
        }
        
        showhide();
        compter_choose();
    }
    scissor.onclick=function (){

        player_hide.style.background="url('keo.png') no-repeat center";
        player_hide.style.backgroundSize="cover";

        player_choice="S";
        console.log("Player: "+ player_choice);
        if (computer_choice==player_choice){
           // alert("TRY AGAIN");
        }else if (aWin(player_choice,computer_choice)){
           // alert("YOU WIN");
           player_score.innerHTML ++;
        }else {
           // alert("COMPUTER WIN");
            comp_score.innerHTML ++;
        }
        showhide();
       compter_choose();
       
    }


}



