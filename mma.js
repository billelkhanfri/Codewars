// Get references to the form elements
const typeVehicule = document.getElementById("typeVehicule");
const nbEssieux = document.getElementById("nbEssieux");
const ptacPorteur = document.getElementById("ptacPorteur");
const ptra = document.getElementById("ptra");
const pvTracteur = document.getElementById("pvTracteur");
const pvRemorque = document.getElementById("pvRemorque");
const ptacSemiRemorque = document.getElementById("ptacSemiRemorque");
const resultat = document.getElementById("resultat");
const mmaDisplay = document.getElementById("mmaDisplay");
const btnCalculMMA = document.getElementById("btnCalculMMA");
const ptacRemorque = document.getElementById("ptacRemorque");

// Add event listener to the button
btnCalculMMA.addEventListener("click", function () {
  // Get the selected values from the form
  const vehiculeType = typeVehicule.value;
  const essieux = nbEssieux.value;
  const porteurPtac = Number(ptacPorteur.value);
  const ptraValue = Number(ptra.value);
  const pvTracteurValue = Number(pvTracteur.value);
  const pvRemorqueValue = Number(pvRemorque.value);
  const semiRemorquePtac = Number(ptacSemiRemorque.value);
  const ptacRemorq = Number(ptacRemorque.value);
  if (
    porteurPtac < 0 ||
    porteurPtac > 100 ||
    ptraValue < 0 ||
    ptraValue > 100 ||
    pvTracteurValue < 0 ||
    pvTracteurValue > 100 ||
    pvRemorqueValue < 0 ||
    pvRemorqueValue > 100 ||
    semiRemorquePtac < 0 ||
    semiRemorquePtac > 100 ||
    ptacRemorq < 0 ||
    ptacRemorq > 100
  ) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.innerText = "le tonnage doit etre entre 0 et 100T";

    const cardDiv = document.getElementsByClassName("card")[0];
    cardDiv.appendChild(alertDiv);

    return;
  }

  // Calculate the MMA based on the selected options
  let mma = 0;

  if (vehiculeType === "isole") {
    mma = porteurPtac;
    console.log(essieux);
  } else if (vehiculeType === "articule" && essieux <= 4) {
    const ptraOption1 = ptraValue;
    const ptraOption2 = pvTracteurValue + semiRemorquePtac;
    mma = Math.min(ptraOption1, ptraOption2, 38);
  } else if (vehiculeType === "articule" && essieux > 4) {
    const ptraOption1 = ptraValue;
    const ptraOption2 = pvTracteurValue + semiRemorquePtac;
    mma = Math.min(ptraOption1, ptraOption2, 44);
  } else if (vehiculeType === "train" && essieux <= 4) {
    const ptraOption1 = ptraValue;
    const ptraOption2 = porteurPtac + ptacRemorq;
    mma = Math.min(ptraOption1, ptraOption2, 38);
  } else if (vehiculeType === "train" && essieux > 4) {
    const ptraOption1 = ptraValue;
    const ptraOption2 = porteurPtac + ptacRemorq;
    mma = Math.min(ptraOption1, ptraOption2, 44);
  }

  // Display the result

  mmaDisplay.innerText = `${mma} T`;
});
