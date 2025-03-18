import { ShoppingModel } from '../models/shopping-models';
import { ShoppingProps } from '../../../app/types/types';
import '../mongodb';

// Асинхронна функція для отримання всіх товарів
export const createShopping = async (data: ShoppingProps[]): Promise<ShoppingProps[]> => {
    try {
        const result = await ShoppingModel.create(data);
        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error creating shopping items:', error.message);
            throw new Error(`Error creating shopping items: ${error.message}`);
        } else {
            console.error('Unexpected error:', error);
            throw new Error('Unexpected error occurred while fetching products.');
        } // посилає помилку для обробки в місці виклику
    }
};
