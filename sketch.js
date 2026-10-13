let r, g, b;

async function setup() {
//tela
createCanvas(800,784);


//textura
push();
img = await loadImage ('textura1.jpg');
pop();

r = random (255);
g = random (255);
b = random (255);

}


function draw() {

background(245, 243, 240);

//Retângulos
push();

//rect esquerda superior
noStroke();
fill(r, g, b);
rect(0,0,351,324);

noStroke();
fill(245, 243, 240);
rect(0,0,351,mouseY);


//rect esquerda inferior
noStroke();
fill(b, r, g);
rect(0,529,77,271);

noStroke();
fill(245, 243, 240);
rect(0,529,mouseY,271);


//rect direita
noStroke();
fill(g, b, r);
rect(363,529,235,226);

noStroke();
fill(245, 243, 240);
rect(363,529,mouseY,226);

pop();


//Linhas pretas

fill(2,2,4);
rect(351,0,12,800);

fill(2,2,4);
rect(0,324,800,17);

fill(2,2,4);
rect(0,512,800,17);

fill(2,2,4);
rect(77,529,9,271);

fill(2,2,4);
rect(598,529,9,271); 

fill(2,2,4);
rect(363,755,235,9);


push();
blendMode(MULTIPLY);
tint(255,100);
if (img) image(img, 0, 0, width, height); 
pop();


function mouseMoved() {
    redraw();
}


function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

}
