/* IMPORTAÇÃO DOS METODOS DE api.js PARA USO EM dom.js. */

/* Importa a função initializeProducts do arquivo dom.js. */
import { initializeProducts } from "./dom.js";

/* Chama initializeProducts quando o conteúdo do DOM for carregado. */
document.addEventListener('DOMContentLoaded', initializeProducts);



