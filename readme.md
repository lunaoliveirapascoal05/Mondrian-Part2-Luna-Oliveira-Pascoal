# Explicação da produção da Parte 2 da Composição nºIII de Piet Mondrian 

Para a parte 2 tínhamos que desestabilizar a composição de Piet Mondrian, com um elemento generativo usando o random()

Escolhi trabalhar com as cores, que inicialmente apenas mudavam de RGB aleatóriamente cada vez que se dava refresh á página, porém, quis mudar e colocar as cores a piscar para dar mais movimento.

Usei o random() nas cores ou seja, coloquei em fez de fill(cores certas), fill( random (255),random (255),random (255)) que sorteia um número random de 0 a 255, e faz com que cada um dos retângulos pisque com cores sorteadas aleatóriamente, o que faz com que as combinações de cores sejam infinitas.

Usei também o frameRate() para controlar a velocidade do piscar das cores para não ficar tão difícil de observar.

-Referências
random():
https://p5js.org/reference/p5/random/ 

frameRate():
https://www.youtube.com/watch?v=B-N-isc31Z0&t=152s
https://p5js.org/reference/p5/frameRate/


