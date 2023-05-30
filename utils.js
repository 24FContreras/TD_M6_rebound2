import { config } from "./config.js";

const concatenar = (string1, string2) => {
  const resultado = string1.toString() + string2.toString();

  if (config.allowText) {
    return `La cadena resultante es: ${resultado}`;
  }

  return `El largo de la cadena es: ${resultado.length}`;
};

export const utils = { concatenar };
