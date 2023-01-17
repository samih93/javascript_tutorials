//b
function createarray(nbr, max) {
  let tab = [];
  let i = 0;
  while (i < nbr) {
    tab.push(Math.floor(Math.random() * max));
    i++;
  }
  return tab;
}
//a

function afficher(tab, n) {

  var res = "";

  n = n == undefined ? 10 : n;


  for (i = 0; i < tab.length; i++) {

    if ((i + 1) % n == 0) {
      res += " " + tab[i] + "\n";

    }
    else {
      res += " " + tab[i];

    }
  }
  console.log(res);

}

var Inverser = (tab) => {
  var arr = [];
  for (i = tab.length - 1; i >= 0; i--) {
    arr.push(tab[i]);
  }
  return arr;
};




//c


var tab = createarray(25, 100)
console.log("Tableau :");
afficher(tab);
console.log("Tableau : Inverser");
afficher(Inverser(tab));


