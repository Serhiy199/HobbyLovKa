import { ShoppingModel } from '../../../lib/mongoDB/models/shopping-models';
import { ShoppingProps } from '../../types/types';
import '../mongodb';

export async function GET(data: ShoppingProps[]): Promise<ShoppingProps[]> {
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
}
