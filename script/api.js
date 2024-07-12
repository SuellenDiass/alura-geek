/* FUNÇÕES DE REQUISIÇÕES */
// api.js
import { API_URL } from './config.js';

/* FUNÇÃO PARA BUSCAR TODOS OS PRODUTOS */
export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Erro:', error);
        return [];
    }
};

/* FUNÇÃO PARA ADICIONAR NOVO PRODUTO */
export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('Erro ao adicionar produto');
        }
        const newProduct = await response.json();
        return newProduct;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
};

/* FUNÇÃO PARA DELETAR PRODUTO */
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro ao deletar produto');
        }
        return true;
    } catch (error) {
        console.error('Erro:', error);
        return false;
    }
};
