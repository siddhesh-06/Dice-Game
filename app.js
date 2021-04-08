/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//-----------------------------DOM-----------------

var  scores, roundscorse, activeplayer , dice,gamePlaying;

/*scores=[0,0];
roundscorse=0;
activeplayer=0;

//dice=Math.floor(Math.random()*6) +1;   //setter=set the value



//document.querySelector('#current-' + activeplayer).textContent=dice;

//document.querySelector('#current-' + activeplayer ).innerHTML='<em>'+dice+'</em>';  //using innerhtml we can change html style in that class

//Dom manupaltion means we change the elements using queeyselector or manupulate them

//var x=document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display='none';//u can change the or edit the class through js

//queyselector=getelementbtid but getelementbyid is sma;; bit faster
document.getElementById('score-0').textContent='0'; //dont use # because it not required for gei
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';*/
init();


//-------------Events handling------------------------


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
                // 1. Generate random no.
                var dice=Math.floor(Math.random()*6) +1;

                // 2. Display the result
                var diceDOM=document.querySelector('.dice');
                diceDOM.style.display='block';
                diceDOM.src='dice-' + dice + '.png';

                if(dice !== 1){
                    //Add score
                    roundscorse += dice;
                    document.querySelector('#current-' + activeplayer).textContent=roundscorse;
                   }
                else{
                    //Next player
                    nextPlayer();
                   }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){
            //Add the current score in globle score
    scores[activeplayer] += roundscorse;
    //upadate UI
    document.querySelector('#score-' + activeplayer).textContent=scores[activeplayer];
    
    //Check player won the game
    if(scores[activeplayer]>=20){
        
        document.querySelector('#name-' + activeplayer).textContent='WINNER !';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active'); 
        gamePlaying=false;
    }
    else{
        //Next player
        nextPlayer();
       }
    }
    
});

function nextPlayer(){
    
    activeplayer === 0 ? activeplayer=1 : activeplayer=0; //it is ternary operator
            
            roundscorse=0;
        
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            
            document.querySelector('.dice').style.display='none';
        
};

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    roundscorse=0;
    activeplayer=0;
    gamePlaying=true;
    
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
}












