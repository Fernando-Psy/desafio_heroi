let heroName = "capitão Cebola";
let heroXP = 9500;

if (heroXP < 1000) {
    console.log(`O jogador do Free-Fire ${heroName} é classificado como bronze.`);
} else if (heroXP >= 1001 <= 2000) {
    console.log(`O jogador do Free-Fire ${heroName} é classificado como prata.`);
}else if (heroXP >= 2001 <= 5000) {
    console.log(`O jogador do Free-Fire ${heroName} é classificado como ouro.`);
}else if (heroXP >= 5001 <= 8000) {
    console.log(`O jogador do Free-Fire ${heroName} é classificado como platina.`);
}else if (heroXP >= 8001 <= 9000) {
    console.log(`O jogador do Free-Fire ${heroName} é classificado como diamante.`);
}else if (heroXP >= 9001 <= 10000) {
    console.log(`O jogador do Free-Fire ${heroName} é classificado como mestre.`);
}else {
    console.log(`O jogador do Free-Fire ${heroName} é classificado como desafiante.`);
}