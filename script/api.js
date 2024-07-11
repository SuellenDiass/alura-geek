/* FUNÇÕES DE REQUISIÇÕES */
const API_URL = 'http://localhost:3000/products';

/* FUNÇÃO PARA BUSCAR TODOS OS PRODUTOS */
export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro ao buscar produtos');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};
/* FUNÇÃO PARA ADICIONAR NOVO PRODUTO */
export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        if (!response.ok) throw new Error('Erro ao adicionar produto');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
 /* FUNÇÃO PARA DELETAR PRODUTO */
export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${API_URL}/${productId}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Erro ao deletar produto');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
