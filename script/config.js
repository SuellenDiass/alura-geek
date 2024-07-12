 // config.js
const API_URL_LOCAL = 'http://localhost:3000/products';
const API_URL_REMOTE = 'https://my-json-server.typicode.com/SuellenDiass/alura-geek-api/products';

// Escolha a URL da API com base no ambiente
export const API_URL = window.location.hostname === 'localhost' ? API_URL_LOCAL : API_URL_REMOTE;
