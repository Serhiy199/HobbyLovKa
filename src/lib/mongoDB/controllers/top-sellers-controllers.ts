import { TopSellersModel, TopSellersProps } from '../models/top-sellers';
import '../mongodb';

// Асинхронна функція для отримання всіх товарів
export const getAllTopSellers = async (): Promise<TopSellersProps[]> => {
    try {
        const data: TopSellersProps[] = await TopSellersModel.find();
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
