

function roll(){
    let dice = document.getElementsByClassName("dice");
    let CB = document.getElementsByClassName('CBox');
    for (let i = 0; i < 5; i++){
        if (!CB[i].checked){
            let number = Math.floor(Math.random()*6) + 1;
            dice[i].src = "dices/dice"+number+".png";
        }
    }
}
