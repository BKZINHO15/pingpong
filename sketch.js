//variáveis da bolinha
let xBolinha = 325;
let yBolinha = 200;
let diâmetro = 20;
let raio = diâmetro / 2;

//velocidade da bolinha
let velocidadexBolinha = 4;
let velocidadeyBolinha = 4;
let raqueteComprimento = 7;
let raqueteAltura = 70;

//variáveis da raquete
let xRaquete = 3;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 640;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente= 0;

//sons do jogo
let rauqetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(650, 400);
  trilha.loop();
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    colisãoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaRaquete();
    //colisãoRaquete();
    colisãoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    colisãoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diâmetro);
}let yRaqueteOponente = 150;
20
let velocidadeYOponente;
21
​
22
let colidiu = false;
23
​
24
//placar do jogo
25
let meusPontos = 0;
26
let pontosDoOponente= 0;
27
​
28
//sons do jogo
29
let rauqetada;
30
let ponto;
31
let trilha;
32
​
33
function preload(){
34
  trilha = loadSound("trilha.mp3");
35
  ponto = loadSound("ponto.mp3");
36
  raquetada = loadSound("raquetada.mp3");
37
}
38
​
39
function setup() {
40
  createCanvas(650, 400);
41
  trilha.loop();
42
}
43
​
44
function draw() {
45
    background(0);
46
    mostraBolinha();
47
    movimentaBolinha();
48
    colisãoBorda();
49
    mostraRaquete(xRaquete, yRaquete);
50
    movimentaRaquete();
51
    //colisãoRaquete();
52
    colisãoRaquete(xRaquete, yRaquete);
53
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
54
    movimentaRaqueteOponente();
55
    colisãoRaquete(xRaqueteOponente, yRaqueteOponente);
56
    incluiPlacar();
57
    marcaPonto();
58
}
59
​
60
function mostraBolinha(){
61
  circle(xBolinha, yBolinha, diâmetro);
62
}
63
​
64
function movimentaBolinha(){
65
  xBolinha += velocidadexBolinha;
66
  yBolinha += velocidadeyBolinha;
67
}
68
​
69
function colisãoBorda(){
70
  if (xBolinha + raio > width ||
71
    xBolinha -raio < 0)
72
  {velocidadexBolinha *= -1;
73
  }
74
  
75
  if (yBolinha +raio > height ||
76
     yBolinha - raio < 0){
77
    velocidadeyBolinha *= -1;
78
  }
79
}
80
​
81
function mostraRaquete(x, y){
82
  rect(x, y, raqueteComprimento, raqueteAltura);

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function colisãoBorda(){
  if (xBolinha + raio > width ||
    xBolinha -raio < 0)
  {velocidadexBolinha *= -1;
  }
  
  if (yBolinha +raio > height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
}
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
}
  if (keyIsDown(83)){
    yRaqueteOponente += 10;  
}
}

function colisãoRaquete(){
  if (xBolinha - raio - xRaquete + raqueteCpmprimento && yBolinha + raio > yRaquete0){velocidadexBolinha *= -1;
    raquetada.play();                                       }
}

function colisãoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){velocidadexBolinha *= -1;
    raquetada.play();
    }
}

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(130, 14, 40, 20);
  fill(255);
  text(meusPontos, 150, 30);
  fill(color(255, 140, 0));
  rect(500, 14, 40, 20);
  fill(255);
  text(pontosDoOponente, 520, 30);
    }

function marcaPonto(){
  if (xBolinha > 638){meusPontos += 1;
  ponto.play();
  }
  if (xBolinha < 11){pontosDoOponente += 1;
  ponto.play();}
}
