/* Importa a função fetchProducts do arquivo api.js. */
import { fetchProducts } from "./api.js";

/* Declara uma variável localProducts para armazenar os produtos localmente. */
let localProducts = [];
 
/* Define e exporta a função initializeProducts que carrega os produtos da API e chama renderProducts. */
export const initializeProducts = async () => {
    localProducts = await fetchProducts();
    renderProducts();
};
/* Define a função createCard para criar o elemento DOM de um card de produto. */
const createCard = (product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.dataset.productId = product.id;

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.classList.add('imagem__produto');

    const productInfo = document.createElement('div');
    productInfo.classList.add('card_container--info');

    const productName = document.createElement('p');
    productName.textContent = product.name;

    const productValue = document.createElement('div');
    productValue.classList.add('card-container__value');

    const productPrice = document.createElement('p');
     productPrice.textContent = `R$ ${product.price}`
     /* productPrice.textContent = `Preço: R$${product.value ? product.value.toFixed(2) : 'N/A'}`; */


    const deleteButton = document.createElement('img');
    deleteButton.src = 'images/icone-excluir2.png';
    deleteButton.alt = 'Excluir';
    deleteButton.classList.add('icone__exlusao');
    deleteButton.addEventListener('click', () => handleDeleteProduct(product.id));

    productValue.append(productPrice, deleteButton);
    productInfo.append(productName, productValue);
    productCard.append(productImage, productInfo);

    return productCard;
};
/* Define a função renderProducts para renderizar os produtos da lista localProducts. */
const renderProducts = () => {
    const productsContainer = document.querySelector('.container__produtos');
    productsContainer.innerHTML = '';

    localProducts.forEach(product => {
        const productCard = createCard(product);
        productsContainer.appendChild(productCard);
    });
};
/* Define a função handleAddProduct para adicionar um novo produto à lista local. */
const handleAddProduct = (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#nome');
    const valueInput = document.querySelector('#valor');
    const imageInput = document.querySelector('#imagem');
    const errorMessage = document.querySelector('.mensagem-erro');

    const newProduct = {
        id: Date.now(),
        name: nameInput.value,
        value: parseFloat(valueInput.value), // converter o valor para número
        image: imageInput.value // Obtém o valor do campo de URL da imagem
    };

    localProducts.push(newProduct);
    renderProducts();

    nameInput.value = '';
    valueInput.value = '';
    imageInput.value = '';
};
/*  Define a função handleDeleteProduct para excluir um produto da lista local. */
const handleDeleteProduct = (productId) => {
    localProducts = localProducts.filter(product => product.id !== productId);
    renderProducts();
};
/* Adiciona um ouvinte de evento para o formulário, chamando handleAddProduct ao enviar. */
document.querySelector('.item__formulario').addEventListener('submit', handleAddProduct);

 
