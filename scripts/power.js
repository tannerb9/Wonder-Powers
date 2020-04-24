let flight = document.querySelector("#flight");
const flightHandlerFunction = () => {
  flight.classList.remove("disabled");
  flight.classList.add("enabled");
};

document
  .querySelector("#activate-flight")
  .addEventListener("click", flightHandlerFunction);

let mindReading = document.querySelector("#mindreading");
let xRay = document.querySelector("#xray");

function enabler(targetId) {
  targetId.classList.remove("disabled");
  targetId.classList.add("enabled");
}

document
  .querySelector("#activate-mindreading")
  .addEventListener("click", () => enabler(mindReading));
document
  .querySelector("#activate-xray")
  .addEventListener("click", () => enabler(xRay));

let powersList = document.querySelectorAll(".power");

document.querySelector("#activate-all").addEventListener("click", () => {
  for (power of powersList) {
    power.classList.remove("disabled");
    power.classList.add("enabled");
  }
});

document.querySelector("#deactivate-all").addEventListener("click", () => {
  for (power of powersList) {
    power.classList.remove("enabled");
    power.classList.add("disabled");
  }
});
