var age = prompt("Entrer l'age :");

if (isNaN(age) && age!="exit") {
    console.log("enter valid numb");
}
else {
    while (age != "exit") {
        var res = age >= 6 && age <= 9 ? "Poussin" :
            age >= 10 && age <= 15 ? "Cadet" :
                age >= 16 && age <= 18 ? "Junior" :
                    age >= 19 && age <= 100 ? "Senior" :
                        "Non classifie dans les autres cas";
        console.log(res);

        var age = prompt("Entrer l'age :");

    }

}
