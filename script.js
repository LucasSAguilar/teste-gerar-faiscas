const numberOfPixels = 150;
const bodyElement = document.querySelector("body");

function createPixel() {
  const pixel = document.createElement("div");
  pixel.className = "pixel";

  // Gera propriedades aleatórias
  const top = Math.floor(Math.random() * 200); 
  const left = Math.floor(Math.random() * -10); 
  const delay = Math.random() * 5; 

  // Aplica as propriedades
  pixel.style.top = `${top}%`;
  pixel.style.left = `${left}%`;
  pixel.style.animationDelay = `${delay}s`; 

  bodyElement.appendChild(pixel);

  setTimeout(() => {
    pixel.remove();
  }, 21000); 
}

setInterval(createPixel, 100); // Cria um novo pixel a cada 100ms