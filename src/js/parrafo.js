export function salto(parrafo) {
  let limit = 0;
  let newPalabra = ``;
  for (let index = 0; index < parrafo.length; index++) {
    if (limit == 18) {
      newPalabra = newPalabra + '\n';
      limit = 0;
    }else{
        newPalabra = newPalabra + parrafo[index]
        
    }
    limit = limit+1
  }
  console.log(newPalabra);
  return newPalabra;
}
