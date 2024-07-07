// Variaveis
let nome= "Antonio"
let xp= 656
// Constante
const parabenizacao = "O Herói de nome "
const nivelAtual = " está no nível de" 
// Condição
if(xp<=1000)
    console.log(parabenizacao + nome + nivelAtual + " Ferro")
else if(1000<xp && xp<=2000)
    console.log(parabenizacao + nome + nivelAtual + " Bronze")
else if(2000<xp && xp<=5000)
    console.log(parabenizacao + nome + nivelAtual + " Prata")
else if(5000<xp && xp<=7000)
    console.log(parabenizacao + nome + nivelAtual + " Ouro")
else if(7000<xp && xp<=8000)
    console.log(parabenizacao + nome + nivelAtual + " Platina")
else if(8000<xp && xp<=9000)
    console.log(parabenizacao + nome + nivelAtual + " Ascendente")
else if(9000<xp && xp<=10000)
    console.log(parabenizacao + nome + nivelAtual + " Imortal")
else if(xp>10000)
    console.log(parabenizacao + nome + nivelAtual + " Radiante")
