let nome = "Filipe";
let xp = 8000;
let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} if (xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
} if (xp > 2000 && xp <= 5000) {
    nivel = "Prata";
} if (xp > 5000 && xp <= 7000) {
    nivel = "Ouro";
} if (xp > 7000 && xp <= 8000) {
    nivel = "Platina";
} if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente";
} if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal";
} if (xp >= 10001) {
    nivel = "Radiante";
} 

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);