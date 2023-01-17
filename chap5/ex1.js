function compterCar(chaine, caracter) {
    chaine = chaine.toLowerCase();
    var compte = 0;
    for (i = 0; i < chaine.length; i++) {
        if (chaine[i] == caracter) {
            compte++;
        }
    }
    return compte;
}

console.log(compterCar("bonjour tout le monde", "5"));