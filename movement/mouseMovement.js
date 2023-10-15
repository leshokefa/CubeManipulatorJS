var x = 0;
var y = 0;
var bob;
function move(e) {
  if (r.style.border === "5px") {
    bob = document.getElementById("r");
    bob.style.left = "0";
    bob.style.top = "0";
    document.getElementById("x").innerHTML = parseInt(bob.style.left);
    document.getElementById("y").innerHTML = parseInt(bob.style.top);
  } else if (b.style.border === "5px") {
    bob = document.getElementById("b");
    bob.style.left = "0";
    bob.style.top = "0";
    document.getElementById("x").innerHTML = parseInt(bob.style.left);
    document.getElementById("y").innerHTML = parseInt(bob.style.top);
  } else if (g.style.border === "5px") {
    bob = document.getElementById("g");
    bob.style.left = "0";
    bob.style.top = "0";
    document.getElementById("x").innerHTML = parseInt(bob.style.left);
    document.getElementById("y").innerHTML = parseInt(bob.style.top);
  }
  if (e.pageX > screen.width - 290 && e.pageY < screen.height - 330) {
  } else {
    bob.style.left = e.pageX - 25 + "px";
    bob.style.top = e.pageY - 25 + "px";
    document.getElementById("x").innerHTML = parseInt(bob.style.left);
    document.getElementById("y").innerHTML = parseInt(bob.style.top);
    x = e.pageX;
    y = e.pageY;
  }
}
onclick = move;
