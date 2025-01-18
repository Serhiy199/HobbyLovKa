import { NewProductsModel, NewProductsProps } from '../models/new-products-models';
import '../mongodb';

// Асинхронна функція для отримання всіх товарів
export const getAllNewProducts = async (): Promise<NewProductsProps[]> => {
    try {
        const data: NewProductsProps[] = await NewProductsModel.find();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching handbags:', error.message);
            throw new Error(`Error fetching handbags: ${error.message}`);
        } else {
            console.error('Unexpected error:', error);
            throw new Error('Unexpected error occurred while fetching products.');
        } // посилає помилку для обробки в місці виклику
    }
};
