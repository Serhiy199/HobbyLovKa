import mongoose from 'mongoose';
import { productsProps, productsSchema } from '../../../app/types/types';

export const NewProductsModel =
    mongoose.models.NewProducts || mongoose.model<productsProps>('NewProducts', productsSchema); //bags -> collection name;
