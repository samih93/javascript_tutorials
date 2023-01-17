var pays = new Array("France", "USA", "Japon", "Italy", "UK", "Germany");

function estVoiture() {
  var txtvoiture = document.querySelector("#voiture").value;
  if (txtvoiture.trim() == "") return false;

  var atleastOneLower = false;
  var atleastOneCapital = false;

  if (txtvoiture.length >= 2) {
    for (i = 0; i < txtvoiture.length; i++) {
      // check if lower

      if (txtvoiture[i] == txtvoiture[i].toLowerCase()) atleastOneLower = true;

      if (txtvoiture[i] == txtvoiture[i].toUpperCase())
        atleastOneCapital = true;

      if (atleastOneCapital && atleastOneLower) return true;
    }
  }
  return false;
}

function estAnnee() {
  var annee = document.querySelector("#annee").value;

  console.log(annee);
  if (isNaN(annee)) return false;
  else {
    if (annee > 1880 && annee < 2000) return true;
  }

  return false;
}
function estPays() {
  // à compléter
}
function verifier() {
  //! is Voiture
  var isvoiture = estVoiture();
  var icons = document.querySelectorAll(".tr_voiture i");

  if (isvoiture == true) {
    icons[0].classList.remove("hidden");
    icons[1].classList.add("hidden");
  } else {
    icons[0].classList.add("hidden");
    icons[1].classList.remove("hidden");
  }

  //! isAnne
  var isyear = estAnnee();

  var icons = document.querySelectorAll(".tr_pays i");

  if (isyear == true) {
    icons[0].classList.remove("hidden");
    icons[1].classList.add("hidden");
  } else {
    icons[0].classList.add("hidden");
    icons[1].classList.remove("hidden");
  }
}
