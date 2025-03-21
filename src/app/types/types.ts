import mongoose from 'mongoose';

export interface orderProps {
    onId: string;
    onImages: string[];
    onTags: string[];
    onDescription: string;
    onTitle: string;
    onModel: string;
    onPrice: number;
    onRatings: number;
}

export interface ShoppingProps {
    name: string;
    phone: string;
    arrShopping: orderProps[];
}

export const orderSchema = new mongoose.Schema<orderProps>({
    onId: { type: String, required: false },
    onImages: { type: [String], required: false },
    onTags: { type: [String], required: false },
    onDescription: { type: String, required: false },
    onTitle: { type: String, required: false },
    onModel: { type: String, required: false },
    onPrice: { type: Number, required: false },
    onRatings: { type: Number, required: false },
});

export const ShoppingSchema = new mongoose.Schema<ShoppingProps>({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    arrShopping: { type: [orderSchema], required: false },
});

export interface productsProps {
    _id: string; // Унікальний ідентифікатор
    producer: string; // Виробник сумочки
    model: string; // Модель
    color: string; // Колір
    material: string; // Матеріал виготовлення
    price: number; // Ціна в гривнях
    article: string; // Артикль
    novelty: boolean; // Новий товар чи ні
    title: string; // Назва
    decorationMaterial: string; // Матеріал декору
    type: string; // тип
    handle: number; // довжина ручки
    countryOfManufacture: string; // країна виробник
    typeClasp: string; // тип застібки
    appointment: string; // призначення сумки
    filling: string; // заповнення
    subject: string; // тематика
    dimensions: {
        width: number; // Ширина в см
        height: number; // Висота в см
        depth: number; // Глибина в см
    }; // Розміри
    availability: boolean; // Чи доступна сумочка на складі
    images: string[]; // Масив посилань на зображення
    description: string; // Опис
    releaseDate: string; // Дата випуску
    ratings: {
        average: number; // Середній рейтинг
        count: number; // Кількість оцінок
    }; // Рейтинги
    tags: string[]; // Теги, наприклад ["класика", "шкіра"]
}

export const productsSchema = new mongoose.Schema<productsProps>({
    _id: { type: String, required: false },
    producer: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    material: { type: String, required: true },
    price: { type: Number, required: true },
    article: { type: String, required: true, unique: true },
    novelty: { type: Boolean, required: true },
    title: { type: String, required: true },
    decorationMaterial: { type: String, required: false },
    type: { type: String, required: true },
    handle: { type: Number, required: false },
    countryOfManufacture: { type: String, required: true },
    typeClasp: { type: String, required: false },
    appointment: { type: String, required: false },
    filling: { type: String, required: false },
    subject: { type: String, required: false },
    dimensions: {
        width: { type: Number, required: true },
        height: { type: Number, required: true },
        depth: { type: Number, required: true },
    },
    availability: { type: Boolean, required: true },
    images: { type: [String], required: false },
    description: { type: String, required: true },
    releaseDate: { type: String, required: false },
    ratings: {
        average: { type: Number, required: false },
        count: { type: Number, required: false },
    },
    tags: { type: [String], required: false },
});

export interface allProductsProps {
    data: productsProps[];
    totalPage: number;
}
