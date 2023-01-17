var num = prompt("Entrer un nombre compris entre 1 et 7");
var res = "Aujourd'hui est ";

if (num < 1 || num > 7 || isNaN(num) || num == "") {
   console.log("Ce n'est pas un numero d'un jour");
}
else {
   switch (num) {
      case "1":
         res += "Lundi";
         break;
      case "2":
         res += "Mardi";
         break;
      case "3":
         res += "Mercredi";
         break;
      case "4":
         res += "Jeudi";
         break;
      case "5":
         res += "Vendredi";
         break;
      case "6":
         res += "Samedi";
         break;
      case "7":
         res += "Dimanche";
         break;
   }
   console.log(res);
}