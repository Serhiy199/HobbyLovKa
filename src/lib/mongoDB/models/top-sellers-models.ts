import mongoose from 'mongoose';
import { productsProps, productsSchema } from '../../../app/types/types';

export const TopSellersModel =
    mongoose.models.TopSellers || mongoose.model<productsProps>('TopSellers', productsSchema); //bags -> collection name;
