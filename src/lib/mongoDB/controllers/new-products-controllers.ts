import { NewProductsModel } from '../models/new-products-models';
import { productsProps } from '../../../app/types/types';
import '../mongodb';

// Асинхронна функція для отримання всіх товарів
export const getAllNewProducts = async (): Promise<productsProps[]> => {
    try {
        const data: productsProps[] = await NewProductsModel.find();
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

export const getOneNewProducts = async (id: string): Promise<productsProps> => {
    try {
        const productById: productsProps | null = await NewProductsModel.findById(id);

        if (!productById) {
            throw new Error();
        }
        return productById;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching product by ID:', error.message);
            throw new Error(`Error fetching product: ${error.message}`);
        }
        // Якщо помилка не є об'єктом Error
        console.error('Unexpected error:', error);
        throw new Error('Unexpected error occurred while fetching product.'); // Посилає помилку для обробки в місці виклику
    }
};
