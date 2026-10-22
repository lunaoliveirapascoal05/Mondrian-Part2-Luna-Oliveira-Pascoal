
//fade de cores
function gradientFilter() {
    let startColor = color(245, 243, 240);
    let endColor = color(208,199,202);
    for (let y= 0; y < 784; y += 1){
        let amt = map(y, 0, 784, 0, 1);
        let gradColor = lerpColor (startColor, endColor, amt);
        stroke (gradColor);
        line(0,y,width,y);
    }

}
async function setup() {
//tela
createCanvas(800,784);

//textura
push();
img = await loadImage ('textura1.jpg');
pop();

}

function draw() {
//gradiente de cores
gradientFilter();


//Retângulos
push();

// Para controlar a velocidade da mudança das cores
frameRate(10)


//rect esquerda superior
noStroke();
fill(random(255), random(255), random (255));
rect(0,0,351,324);



//rect esquerda inferior
noStroke();
fill(random(255), random(255), random (255));
rect(0,529,77,271);



//rect direita
noStroke();
fill(random(255), random(255), random (255));
rect(363,529,235,226);

pop();


//Linhas pretas
push();

noStroke();
fill(2,2,4);
rect(351,0,12,800);

noStroke();
fill(2,2,4);
rect(0,324,800,17);

noStroke();
fill(2,2,4);
rect(0,512,800,17);

noStroke();
fill(2,2,4);
rect(77,529,9,271);

noStroke();
fill(2,2,4);
rect(598,529,9,271); 

noStroke();
fill(2,2,4);
rect(363,755,235,9);

pop();

//controlo da opacidade da textura
push();
blendMode(MULTIPLY);
tint(255,100);
if (img) image(img, 0, 0, width, height); 
pop();

}


function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}


