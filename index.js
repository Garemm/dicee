  var randomNumber1 = Math.random();
  var deci = (randomNumber1 * 6)+1 ;
  var fijoA = Math.floor(deci);

  if (fijoA == 1) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
  } else if (fijoA == 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
  } else if (fijoA == 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
  } else if (fijoA == 4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
  } else if (fijoA == 5) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
  } else if (fijoA == 6) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
  }

  var randomNumber1 = Math.random();
  var deci = (randomNumber1 * 6)+1 ;
  var fijoB = Math.floor(deci);

  if (fijoB == 1) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
  } else if (fijoB == 2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
  } else if (fijoB == 3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
  } else if (fijoB == 4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
  } else if (fijoB == 5) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
  } else if (fijoB == 6) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
  }

  if (fijoA>fijoB)
  {
    document.querySelector(".titulo").textContent="¡Jugador 1 gana!!";
  }
  if (fijoA<fijoB)
  {
    document.querySelector(".titulo").textContent="¡Jugador 2 gana!";
  }
  if (fijoA==fijoB)
  {
    document.querySelector(".titulo").textContent="¡Empate!";
  }
