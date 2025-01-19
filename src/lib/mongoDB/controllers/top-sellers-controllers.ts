import { TopSellersModel, TopSellersProps } from '../models/top-sellers-models';
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
            console.error('Database Error:', error);
            throw new Error('Failed to fetch the latest invoices.');
        } // посилає помилку для обробки в місці виклику
    }
};
