var enemyHp = 100;
var enemyHpBar = document.getElementById("enemyHp");
var playerHp = 100;
var playerHpBar = document.getElementById("playerHp");
var textBox = document.getElementById("textBox")
var buttons = document.getElementById("buttons");
var screen = document.body;

function charSelect(pokemons){

  if(pokemons === "charizard"){
    screen.innerHTML = '<div id = "texts"><div id = "textBox">Your are Charizard</div></div><div id = "screen"><div class="hpBarBox"><div class = "hpBar" id = "enemyHp"></div></div><div id="enemyImg"><img src = "https://cdn2.bulbagarden.net/upload/9/98/Missingno_RB.png" id ="enemy"></div><div id = "playerImg"><img src = "https://cdn2.bulbagarden.net/upload/archive/0/06/20090826153650%21Spr_b_g1_006.png" id = "player"></div><div class = "hpBarBox"><div class = "hpBar" id = "playerHp"></div></div></div><div id = "buttons"><button onClick = "attack("scratch")">Scratch</button></li><button onClick = "attack("ember")">Ember</button></li><button onClick = "attack("flamethrower")">Flamethrower</button></li></div>'
  } else if(pokemons === "ivysaur"){
    screen.innerHTML = '<div id = "texts"><div id = "textBox">Your are Ivysaur</div></div><div id = "screen"><div class="hpBarBox"><div class = "hpBar" id = "enemyHp"></div></div><div id="enemyImg"><img src = "https://cdn2.bulbagarden.net/upload/9/98/Missingno_RB.png" id ="enemy"></div><div id = "playerImg"><img src = "https://cdn2.bulbagarden.net/upload/9/9c/Spr_b_g1_002.png" id = "player"></div><div class = "hpBarBox"><div class = "hpBar" id = "playerHp"></div></div></div><div id = "buttons"><button onClick = "attack("tackle")">Tackle</button></li><button onClick = "attack("vinewhip")">Vinewhip</button></li><button onClick = "attack("takedown")">Takedown</button></li></div>'
  } else if(pokemons === "squirtle"){
    screen.innerHTML = '<div id = "texts"><div id = "textBox">Your are Squirtle</div></div><div id = "screen"><div class="hpBarBox"><div class = "hpBar" id = "enemyHp"></div></div><div id="enemyImg"><img src = "https://cdn2.bulbagarden.net/upload/9/98/Missingno_RB.png" id ="enemy"></div><div id = "playerImg"><img src = "https://cdn2.bulbagarden.net/upload/e/e7/Spr_b_g1_007.png" id = "player"></div><div class = "hpBarBox"><div class = "hpBar" id = "playerHp"></div></div></div><div id = "buttons"><button onClick = "attack("tackle")">Tackle</button></li><button onClick = "attack("watergun")">Water gun</button></li><button onClick = "attack("bubble")">Bubble</button></li></div>'
  }
}

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
  buttons.style.display = "none";

  if(enemyHp <= 0){
    setTimeout(function(){textBox.innerHTML = "The enemy has fainted"}, 2000);
  } else{
    setTimeout(enemyAttack, 2000);
  }
}

function enemyAttack(){
  var ranAtk = Math.ceil(Math.random()*3+1)

  if(ranAtk === 1){
      var enyDmg = Math.floor(Math.random()*20)+10;
  } else if(ranAtk === 2){
      var enyDmg = Math.floor(Math.random()*50)+40;
  } else if(ranAtk === 3){
      var enyDmg = Math.floor(Math.random()*90)+80;
  }

    playerHp -= enyDmg;

    if(playerHp < 0){
      playerHp = 0;
    }

    var playerBarWidth = playerHp/100*250;
    playerHpBar.style.width = playerBarWidth + "px";

    textBox.innerHTML = "The enemy attacks."

    if(playerHp <= 0){
    setTimeout(function(){textBox.innerHTML = "Charizard has fainted"}, 2000);
    } else{
    setTimeout(function(){buttons.style.display = "block"}, 2000);
  }
}