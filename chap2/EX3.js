var num = prompt("Entrer un nombre compris entre 1 et 7");
var res;

if (num < 1 || num > 7 || isNaN(num) || num == "") {
  console.log("Ce n'est pas un numero d'un jour");
}
// else {
//   var res = num == 1 || num == 2 ? "Debut de la semaine" :
//     num == 3 ? "Le milieu de la semaine" :
//       num == 4 || num == 5 ? "Bientot c'est le weekend" :
//         num == 6 || num == 7 ? "Weekend" :
//           "Ce n'est pas un jour de la semaine";
//   console.log(res);
// }
else {
  switch (num) {
    case "1":
      res = debut;
      break;
    case "2":
      res = "Debut de la semaine";
      break;
    case "3":
      res = "Le milieu de la semaine";
      break;
    case "4":
      res = "Bientot c'est le weekend";
      break;
    case "5":
      res = "Bientôt c'est le weekend";
      break;
    case "6":
      res = "Weekend";
      break;
    case "7":
      res = "Weekend";
      break;
  }
  console.log(res);

}
