

//-----------------------------DOM-----------------

var  scores, roundscorse, activeplayer , dice,gamePlaying;

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
    
    var input=document.querySelector('.final-score').value;
    var wininScore;
        if(input){
                wininScore=input;     
           } 
        else{
               wininScore=20; 
           }
        
    //Check player won the game
    if(scores[activeplayer]>=wininScore){
        
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