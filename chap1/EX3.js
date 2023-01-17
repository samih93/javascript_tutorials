let note = prompt("Entrer votre NOTE!");

if (note != "" && !isNaN(note) && note <= 20) {
  // if (note >= 14) {
  //   console.log("Recu avec mention Bien");
  // }
  // // note always <14
  // else {
  //   if (note >= 12) {
  //     console.log("Recu avec mention A.Bien");
  //   }
  //   // note always < 12
  //   else {
  //     if (note >= 10) {
  //       console.log("Recu sans mention, Passable");
  //     }
  //     // note always <10
  //     else {
  //       console.log("Insuffisant");

  //     }
  //   }
  // }

  if (note < 10) {
    console.log("Insuffisant");
  }
  // note >10
  else {
    if (note < 12) {
      console.log("Recu sans mention, Passable");
    }

    // note>12 
    else {
      if (note < 14)  // note >=12 && <14 
      {
        console.log("Recu avec mention A.Bien");
      }
      else {
        console.log("Recu avec mention Bien");

      }
    }
  }

}
else {
  console.log("Enter valid note");
}

