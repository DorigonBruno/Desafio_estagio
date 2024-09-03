function contarLetrasA(texto) {
  let contadorMinuscula = 0;
  let contadorMaiuscula = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a" || texto[i] === "á" || texto[i] === "à") {
      contadorMinuscula++;
    } else if (texto[i] === "A" || texto[i] === "Á" || texto[i] === "À") {
      contadorMaiuscula++;
    }
  }

  console.log(`A letra 'a' minúscula aparece ${contadorMinuscula} vezes.`);
  console.log(`A letra 'A' maiúscula aparece ${contadorMaiuscula} vezes.`);
}

console.log(contarLetrasA("Olá mundo À á à sadas Á AAA"));
