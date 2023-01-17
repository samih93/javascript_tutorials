function estPalin(tab) {
  for (let i = 0; i < parseInt(tab.length / 2); i++) {
    if (tab[i] != tab[tab.length - 1 - i])
      return false;
  }
  return true;
}

console.log(estPalin([1, 2, 3, 2, 1]));