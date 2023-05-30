import { nanoid } from "nanoid";
import { utils } from "./utils.js";

const primerId = nanoid();
const segundoId = nanoid();

console.log(utils.concatenar(primerId, segundoId));
