'use client';
import mongoose from 'mongoose';
import { ShoppingProps, ShoppingSchema } from '../../../app/types/types';

export const ShoppingModel =
    mongoose.models.Shopping || mongoose.model<ShoppingProps>('Shopping', ShoppingSchema);
