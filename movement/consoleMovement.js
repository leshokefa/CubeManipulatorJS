function upMovement() {
  //Трябва да създавам y в всяка функция иначе не работи (не ми показва грешки в конзолата)
  let y = document.getElementById("step").value;
  bob.style.top = `${bob.offsetTop - y}px`;
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function downMovement() {
  let y1 = parseInt(document.getElementById("step").value);
  bob.style.top = parseInt(bob.style.top) + y1 + "px";
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function leftMovement() {
  let x = document.getElementById("step").value;
  bob.style.left = `${bob.offsetLeft - x}px`;
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function rightMovement() {
  let x1 = parseInt(document.getElementById("step").value);
  bob.style.left = parseInt(bob.style.left) + x1 + "px";
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function upRightMovement() {
  let x1 = parseInt(document.getElementById("step").value) / 2;
  bob.style.left = parseInt(bob.style.left) + x1 + "px";
  bob.style.top = parseInt(bob.style.top) - x1 + "px";
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function upLeftMovement() {
  let x1 = parseInt(document.getElementById("step").value) / 2;
  bob.style.left = parseInt(bob.style.left) - x1 + "px";
  bob.style.top = parseInt(bob.style.top) - x1 + "px";
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function downRightMovement() {
  let x1 = parseInt(document.getElementById("step").value) / 2;
  bob.style.left = parseInt(bob.style.left) + x1 + "px";
  bob.style.top = parseInt(bob.style.top) + x1 + "px";
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function downLeftMovement() {
  let x1 = parseInt(document.getElementById("step").value) / 2;
  bob.style.left = parseInt(bob.style.left) - x1 + "px";
  bob.style.top = parseInt(bob.style.top) + x1 + "px";
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}

function centerMovement() {
  bob.style.left = "0";
  bob.style.top = "0";
  document.getElementById("x").innerHTML = parseInt(bob.style.left);
  document.getElementById("y").innerHTML = parseInt(bob.style.top);
}
