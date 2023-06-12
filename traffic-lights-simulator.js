const greenLight = document.getElementById("green");
const yellowLight = document.getElementById("yellow");
const redLight = document.getElementById("red");

function trafficLights() {
  greenLight.classList.add("green");

  setTimeout(() => {
    greenLight.classList.remove("green");
    yellowLight.classList.add("yellow");
  }, 2000);

  setTimeout(() => {
    yellowLight.classList.remove("yellow");
    redLight.classList.add("red");
  }, 4000);
  setTimeout(() => {
    redLight.classList.remove("red");
    greenLight.classList.add("green");
  }, 6000);
}
trafficLights();
setInterval(trafficLights, 6000);
