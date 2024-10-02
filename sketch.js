fantasia, aventura, drama

// a viagem de chihiro,LIVRE, fantasia, aventura
// paddington,LIVRE, fantasia, aventura

// a viagem de chihiro,LIVRE, fantasia, aventura
// guardiões da galáxia,12, fantasia, aventura
// as aventura de pi, 10, drama, fantasia, aventura
// depois da chuva,  10,  drama
// paddington,LIVRE, fantasia, aventura
// ladrões de bicicleta,12, drama
// o menino que descobriu o vento, 14, drama

let compoIdade;
let compoFantasia;
let compoAventura;

function setup() {
  createCanvas(600, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("sua idade:");
 compoIdade = createInput("5");
 compoFantasia =  createCheckbox("Gosta de fantasia?");
 compoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = compoIdade.value();
  let gostaDeFantasia = compoFantasia.checked();
  let gostadeaventura = compoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  
  fill(color(80,0,100));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, width / 2);
}
     
function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) { 
   if(idade >= 10) {
     if(idade >= 14) { 
       return "O menino que descobriu o vento";
     } else {
       if(idade >= 12) {
         if(gostaDeFantasia || gostaDeAventura) {
           return "Homem-aranha: no aranhaverso";
         } else{ 
        return "Ladrões de bicicleta";     
         }       
      }  else { 
         if(gostaDeFantasia) { 
         return "As aventuras de pi";
     } else { 
      return " depois da chuva";
      }
    }
   }
 } else { 
     if(gostaDeFantasia) { 
     return "A viagem de chihiro";
     } else { 
         return "O feitiço do tempo";
   } 
 }
}


