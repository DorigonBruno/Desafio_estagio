function fibonacciAteNumero(numero) {
  const sequencia = [0, 1];

  while (sequencia[sequencia.length - 1] <= numero) {
    const proximo =
      sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(proximo);
  }

  const pertence = sequencia.includes(numero);

  return {
    sequencia,
    pertence,
  };
}

const numeroInformado = 13;

const resultado = fibonacciAteNumero(numeroInformado);

if (resultado.pertence) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}

console.log(
  `Sequência de Fibonacci até ${numeroInformado}:`,
  resultado.sequencia
);


