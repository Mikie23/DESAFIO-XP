let XP = [0]; //digite aqui um numero, de 0 a 10.001+
let nome = "Playerzinho123";
let nomeNivel = "";

for (let XPS = 0; XPS < XP.length; XPS++){
let nivel = XP[XPS];

if (nivel < 1000){
   nomeNivel = "Ferro";
   console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
   break;
}
else if (nivel >= 1001 && nivel <= 2000) {
  nomeNivel = "Bronze";
  console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
  break;
}

else if (nivel >= 2001 && nivel <= 5000) {
    nomeNivel = "Prata";
    console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
    break;
}

else if (nivel >= 5001 && nivel <= 7000) {
    nomeNivel = "Ouro";
    console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
    break;
}

else if (nivel >= 7001 && nivel <= 8000) {
    nomeNivel = "Platina";
    console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
    break;
}

else if (nivel >= 8001 && nivel <= 9000) {
    nomeNivel = "Ascendente";
    console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
    break;
  }

  else if (nivel >= 9001 && nivel <= 10000) {
    nomeNivel = "Imortal";
    console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
    break;
  }

  else if (nivel = 10.001) {
    nomeNivel = "Radiante";
    console.log(`O Herói de nome **${nome}** está no nível de **${nomeNivel}** (XP: ${nivel})`);
    break;
  }
}
