var NomeHeroi = "Jusbiscledson Junior";
var Exp = 8700;
var elo
switch (true){
    case (Exp <=1000):
        elo = "Ferro";
        break;
    case (Exp >=1001 && Exp<=2000):
        elo = "Bronze";
        break;
    case (Exp >=2001 && Exp<=6000):
        elo = "Prata";
        break;
    case (Exp >=6001 && Exp<=7000):
        elo = "Ouro";
        break;
    case (Exp >=7001 && Exp<=8000):
        elo = "Platina";
        break;
    case (Exp >=8001 && Exp<=9000):
        elo = "Ascendente";
        break;
    case (Exp >=9001 && Exp<=10000):
        elo = "Imortal";
        break;
    case (Exp >=10001):
        elo = "Radiante";
        break;
}
console.log(`O Herói de nome ${NomeHeroi} está no nivel de ${elo}`)
