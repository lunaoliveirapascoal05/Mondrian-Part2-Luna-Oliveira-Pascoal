let r, g, b;

function setup() {
//tela
createCanvas(800,784);
background(245, 243, 240);

r = random (255);
g = random (255);
b = random (255);

}


function draw() {
//Retângulos
push();

//rect esquerda superior
fill(r, g, b);
rect(0,0,351,324);

fill(245, 243, 240);
rect(0,0,351,mouseY);


//rect esquerda inferior
fill(b, r, g);
rect(0,529,77,271);

fill(245, 243, 240);
rect(0,529,mouseY,271);


//rect direita
fill(g, b, r);
rect(363,529,235,226);

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

noStroke();
strokeWeight(0);
}
