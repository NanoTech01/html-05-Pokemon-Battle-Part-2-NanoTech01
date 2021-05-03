var gameStates;
var enemyHp = 100;
var enemyHpBar = document.getElementById("enemyHp");
var playerHp = 100;
var playerHpBar = document.getElementById("playerHp");
var textBox = document.getElementById("textBox")
var ranAtk;

function attack(strength){
  if(strength == "scratch"){
    var dmg = 40;
  } else if(strength == "ember"){
    var dmg = 40;
  } else if(strength == "flamethrower"){
    var dmg = 95;
  }

  textBox.innerHTML = "Charizard used " + strength + ".";

  enemyHp -= dmg;

  if (enemyHp < 0){
    enemyHp = 0;
  }

  var enemyBarWidth = enemyHp/100*250;
  enemyHpBar.style.width = enemyBarWidth + "px";
}

if(enemyHp <= 0){
    textBox.innerHTML = "The enemy has fainted";
  } else{
    enemyAttack();
  }

function enemyAttack(){
  ranAtk = Math.ceil(Math.random()*3+1)

  if(ranAtk === 1){
      var enyDmg = Math.floor(Math.random()*10)
  } else if(enyDmg === 2){
      var enyDmg = Math.floor(Math.random()*10+10)
  } else if(enyDmg === 3){
      var enyDmg = Math.floor(Math.random()*10+20)
  }

    playerHp -= enyDmg;

    textBox.innerHTML = "The enemy attacks.";

    if(playerHp < 0){
      playerHp = 0;
    }

    var playerBarWidth = playerHp/100*250;
    playerHpBar.style.width = playerBarWidth + "px";
}