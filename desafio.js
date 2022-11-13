//Desafio nível <Fácil>;
//Este desafio apresenta apenas 3 bugs, e o <3º bug> está escondido.

//<1º bug> - Crie uma variável GLOBAL com o nome "dia" que receba o número equivalente ao dia de hoje;

//<2º bug> - Crie uma variável GLOBAL nomeada como "nome" que receba o seu nome; 

function GithubCampusBR22(){
    if(dia <= 11 && dia >= 15){
      console.log("Hoje é dia %d e você encontrou o bug!", dia);
      console.log("Parabéns, %s!", nome);
    } else if(dia < 0 || dia > 31){
      console.log("Esse dia do mês é inexistente!");
    } else {
      console.log("Infelizmente, %s, você ainda não encontrou o bug!", nome);
      console.log("Tente Novamente!")
    }
}

GithubCampusBR22();
