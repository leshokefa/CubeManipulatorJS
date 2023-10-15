r.style.left = "0px";
r.style.top = "0px";
g.style.left = "50px";
g.style.top = "50px";
b.style.left = "100px";
b.style.top = "100px";

var rPositionX = 0;
var rPositionY = 0;
var gPositionX = 50;
var gPositionY = 50;
var bPositionX = 100;
var bPositionY = 100;

let redActive = false;
let greenActive = false;
let blueActive = false;

function addOns(e) {
  switch (e.keyCode) {
    case 82:
      bob = document.getElementById("r");
      redActive = true;
      greenActive = false;
      blueActive = false;
      g.style.border = "0px";
      b.style.border = "0px";
      bob.style.border = "5px";
      bob.style.borderStyle = "solid";
      bob.style.borderColor = "black";
      document.getElementById("x").innerHTML = parseInt(r.style.left);
      document.getElementById("y").innerHTML = parseInt(r.style.top);
      break;
    case 71:
      bob = document.getElementById("g");
      redActive = false;
      blueActive = false;
      greenActive = true;
      r.style.border = "0px";
      b.style.border = "0px";
      bob.style.border = "5px";
      bob.style.borderStyle = "solid";
      bob.style.borderColor = "black";
      document.getElementById("x").innerHTML = parseInt(g.style.left);
      document.getElementById("y").innerHTML = parseInt(g.style.top);
      break;
    case 66:
      bob = document.getElementById("b");
      blueActive = true;
      redActive = false;
      greenActive = false;
      r.style.border = "0px";
      g.style.border = "0px";
      bob.style.border = "5px";
      bob.style.borderStyle = "solid";
      bob.style.borderColor = "black";
      document.getElementById("x").innerHTML = parseInt(b.style.left);
      document.getElementById("y").innerHTML = parseInt(b.style.top);
      break;
    case 67:
      bob.style.borderRadius = "50%";
      bob.style.borderStyle = "solid";
      bob.style.borderColor = "black";
      break;
    case 83:
      if (redActive) {
        r.style.borderRadius = "0%";
        r.style.borderStyle = "solid";
        r.style.borderColor = "black";
      }
      if (blueActive) {
        b.style.borderRadius = "0%";
        b.style.borderStyle = "solid";
        b.style.borderColor = "black";
      }
      if (greenActive) {
        g.style.borderRadius = "0%";
        g.style.borderStyle = "solid";
        g.style.borderColor = "black";
      }

      break;
    case 72:
      if (redActive) {
        bob.style.left = "0px";
        bob.style.top = "0px";
        rPositionX = 0;
        rPositionY = 0;
      }
      if (blueActive) {
        bob.style.left = "100px";
        bob.style.top = "100px";
        bPositionX = 0;
        bPositionY = 0;
      }
      if (greenActive) {
        bob.style.left = "50px";
        bob.style.top = "50px";
        gPositionX = 0;
        gPositionY = 0;
      }
      document.getElementById("x").innerHTML = parseInt(bob.style.left);
      document.getElementById("y").innerHTML = parseInt(bob.style.top);
      break;
    case 40:
      if (y > screen.height - 225) {
        break;
      } else {
        if (redActive) {
          r.style.top = rPositionY + 20 + "px";
          rPositionY += 20;
          document.getElementById("y").innerHTML = parseInt(rPositionY);
        } else if (blueActive) {
          bob = document.getElementById("b");
          bob.style.top = bPositionY + 20 + "px";
          bPositionY += 20;
          document.getElementById("y").innerHTML = parseInt(bPositionY);
        } else if (greenActive) {
          bob = document.getElementById("g");
          bob.style.top = gPositionY + 20 + "px";
          gPositionY += 20;
          document.getElementById("y").innerHTML = parseInt(gPositionY);
        }
      }
      break;
    case 38:
      if (y < 15) {
        break;
      } else {
        if (redActive) {
          bob.style.top = rPositionY - 20 + "px";
          rPositionY -= 20;
          document.getElementById("y").innerHTML = parseInt(rPositionY);
        } else if (blueActive) {
          bob.style.top = bPositionY - 20 + "px";
          bPositionY -= 20;
          document.getElementById("y").innerHTML = parseInt(bPositionY);
        } else if (greenActive) {
          bob.style.top = gPositionY - 20 + "px";
          gPositionY -= 20;
          document.getElementById("y").innerHTML = parseInt(gPositionY);
        }
      }
      break;
    case 37:
      if (x < 10) {
        break;
      } else {
        if (redActive) {
          bob.style.left = rPositionX - 20 + "px";
          rPositionX -= 20;
          document.getElementById("x").innerHTML = parseInt(rPositionX);
        } else if (blueActive) {
          bob.style.left = bPositionX - 20 + "px";
          bPositionX -= 20;
          document.getElementById("x").innerHTML = parseInt(bPositionX);
        } else if (greenActive) {
          bob.style.left = gPositionX - 20 + "px";
          gPositionX -= 20;
          document.getElementById("x").innerHTML = parseInt(gPositionX);
        }
      }
      break;
    case 39:
      if (x > screen.width - 65) {
        break;
      } else {
        if (redActive) {
          bob.style.left = rPositionX + 20 + "px";
          rPositionX += 20;
          document.getElementById("x").innerHTML = parseInt(rPositionX);
        } else if (blueActive) {
          bob.style.left = bPositionX + 20 + "px";
          bPositionX += 20;
          document.getElementById("x").innerHTML = parseInt(bPositionX);
        } else if (greenActive) {
          bob.style.left = gPositionX + 20 + "px";
          gPositionX += 20;
          document.getElementById("x").innerHTML = parseInt(gPositionX);
        }
      }
      break;
  }
}
onkeydown = addOns;
