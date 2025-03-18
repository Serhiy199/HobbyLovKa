import { ShoppingModel } from '../../../lib/mongoDB/models/shopping-models';
import { NextResponse } from 'next/server';
import { ShoppingProps } from '../../types/types';
import '../../../lib/mongoDB/mongodb';

export async function POST(req: Request) {
    try {
        const body = await req.json(); // Отримання даних з тіла запиту

        const result = await ShoppingModel.create(body);

        return NextResponse.json(
            { message: 'Item added successfully', item: result },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ message: 'Error adding item', error }, { status: 500 });
    }
}
