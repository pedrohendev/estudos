function celsiusParaFahrenheit(celsius) {
  const converter = celsius * 1.8 + 32;
  return converter;
}

const converter = celsiusParaFahrenheit(28);
console.log(converter);
