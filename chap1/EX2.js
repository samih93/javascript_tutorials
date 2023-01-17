var nom = prompt("Entrer votre nom");
var civ = prompt("Entrer votre civilite (M,Mme,Mlle)");

if (nom == "") {
  console.log("Entrer votre nom NON VIDE!");
}
else {
  civ = civ.toLowerCase();
  if (civ == "m") {
    console.log(`Bonjour Monsieur ${nom}`);
  }
  else if (civ == "mme") {
    console.log(`Bonjour Madame ${nom}`);
  }
  else if (civ == "mlle") {
    console.log(`Bonjour Mademoiselle ${nom}`);
  }
  else {
    console.log(`Bonjour Monsieur , Madame`);
  }
}


