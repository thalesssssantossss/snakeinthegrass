let cobraTamanho = 35;
let posicaoX = 400 - cobraTamanho / 2;
let posicaoY = 250 - cobraTamanho / 2;
let direcao = 'direita';
let comidaX;
let comidaY;
let larguraTela = 800;
let alturaTela = 500;
let cobraX = [];
let cobraY = [];
let pontos = 3;
let frameRateJogo = 5;
 
// configuração
function setup() {
  createCanvas(larguraTela, alturaTela);
  AtualizarPosicaoComida();
  for(let i=0; i < pontos; i++){
    cobraX.push(posicaoX - i * cobraTamanho);
    cobraY.push(posicaoY);
  }
}


// desenhar
function draw() {
  frameRate(frameRateJogo);
  background(220);
  if (EncostouBordaTela()){
    noLoop();
  }
  desenharCobra();
  desenharComida(comidaX,comidaY,20);
  movimentarCobra();
  mudarDirecao();
}

// movimentação da cobra
function movimentarCobra() {
  /*if (direcao == 'esquerda') {
    posicaoX -= 5;
  } else if (direcao == 'direita') {
    x += 5;
  } else if (direcao == 'cima') {
    posicaoY -= 5;
  } else if (direcao == 'baixo') {
    posicaoY += 5;
  }*/
 
  cabecaX = cobraX[0];
  cabecaY = cobraY[0];
 
  if (direcao == 'direita') {
    cabecaX = cabecaX + cobraTamanho;
  }                                                                  

  cobraX.unshift(cabecaX);
  cobraY.unshift(cabecaY);

  // remove último valor da lista
  cobraX.pop();
  cobraY.pop();
}

// mudança de direção com as setas
function mudarDirecao() {
  if (keyIsDown(LEFT_ARROW)) {
    direcao = 'esquerda';
  } else if (keyIsDown(RIGHT_ARROW)) {
    direcao = 'direita';
  } else if (keyIsDown(UP_ARROW)) {
    direcao = 'cima';
  } else if (keyIsDown(DOWN_ARROW)) {
    direcao = 'baixo';
  } else if (keyIsDown(ENTER)) {
    direcao = 'parar';
  }
}

function AtualizarPosicaoComida(){
  comidaX=floor(random(0,780));
  comidaY=floor(random(0,480));
}

function desenharComida(){
  const tamanho = 10;
  fill(255, 255, 0);
  rect(comidaX,comidaY, tamanho, tamanho);

}

function EncostouBordaTela(){
  if (posicaoX < 0 || posicaoX > larguraTela - cobraTamanho || posicaoY < 0 || posicaoY > alturaTela - cobraTamanho) {
    return true;
  }

  return false;
}

function desenharCobra() {
  for (let i=0; i < cobraX.length; i++){
    rect(cobraX[i], cobraY[i], cobraTamanho, cobraTamanho);
  }
}