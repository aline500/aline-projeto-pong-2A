//variaveis da bolinha 
let xBolinha= 250;
let yBolinha= 150;
let diametro= 15;
let raio= diametro/2
//velocidade da bolinha 
let velocidadeXBolinha=6;
let velocidadeYBolinha=6;

function setup() {
  createCanvas(500,300);
  
  
  
  
  
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha();
  verificaColisaoBorda();
  
  
  
  
    
}
function mostraBolinha(){ 
 circle(xBolinha,yBolinha,diametro);
}
 function movimentaBolinha (){
  xBolinha +=velocidadeXBolinha;
  yBolinha +=velocidadeYBolinha;
 }
  
  function verificaColisaoBorda(){
    if(xBolinha + raio >width ||xBolinha - raio <0){
   velocidadeXBolinha *= -1 
  }
  
  if (yBolinha + raio > height || yBolinha - raio <0){
   velocidadeYBolinha *=-1
    
  }
  }
  
  