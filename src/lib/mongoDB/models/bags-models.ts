import mongoose from 'mongoose';
import { productsProps, productsSchema } from '../../../app/types/types';

export const BagModel = mongoose.models.Bag || mongoose.model<productsProps>('Bag', productsSchema); //bags -> collection name;
