import HandBags from '../models/handBags';
// import { isValidObjectId } from 'mongoose';

import { Document, model, Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

// Типізація властивостей каталогу
export interface CatalogProps {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
}

// Інтерфейс для документа Mongoose
// export interface CatalogDocument extends CatalogProps, Document {}

// Асинхронна функція для отримання всіх сумок
export const getAllHandBags = async (): Promise<CatalogProps[]> => {
    try {
        const handbags = await HandBags.find().lean(); // Використання `lean` для повернення звичайних об'єктів
        return handbags as CatalogProps[];
    } catch (error) {
        console.error('Error fetching handbags:', error);
        throw error; // Прокидування помилки для обробки в місці виклику
    }
};

// export const getOneContact = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         if (!isValidObjectId(id)) {
//             throw HttpError(400, `${id} is not valid id`);
//         }
//         const contactById = await Contact.findById(id);
//         if (!contactById) {
//             throw HttpError(404);
//         }
//         res.json(contactById);
//     } catch (error) {
//         next(error);
//     }
// };

// export const deleteContact = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         if (!isValidObjectId(id)) {
//             throw HttpError(400, `${id} is not valid id`);
//         }
//         const removeContact = await Contact.findByIdAndDelete(id);
//         if (!removeContact) {
//             throw HttpError(404);
//         }

//         res.status(200).json(removeContact);
//     } catch (error) {
//         next(error);
//     }
// };

// export const createContact = async (req, res, next) => {
//     try {
//         const { error } = createContactSchema.validate(req.body);
//         if (error) {
//             throw HttpError(400, error.message);
//         }
//         const newAddContact = await Contact.create(req.body);
//         res.status(201).json(newAddContact);
//     } catch (error) {
//         next(error);
//     }
// };

// export const updateContact = async (req, res, next) => {
//     try {
//         const { error } = updateContactSchema.validate(req.body);

//         if (error) {
//             throw HttpError(400, error.message);
//         }

//         const { id } = req.params;

//         if (!isValidObjectId(id)) {
//             throw HttpError(400, `${id} is not valid id`);
//         }

//         const newUpdateContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });

//         if (!newUpdateContact) {
//             throw HttpError(404);
//         }

//         res.status(200).json(newUpdateContact);
//     } catch (error) {
//         next(error);
//     }
// };

// export const updateStatusContact = async (req, res, next) => {
//     try {
//         const { error } = newUpdateStatusSchema.validate(req.body);

//         if (error) {
//             throw HttpError(400, error.message);
//         }

//         const { contactId } = req.params;

//         if (!isValidObjectId(contactId)) {
//             throw HttpError(400, `${contactId} is not valid id`);
//         }

//         const newUpdateStatus = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

//         if (!newUpdateStatus) {
//             throw HttpError(404);
//         }

//         res.status(200).json(newUpdateStatus);
//     } catch (error) {
//         next(error);
//     }
// }
