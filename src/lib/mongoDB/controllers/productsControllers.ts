import { HandBagModel, HandBagProps } from '../models/handBags';
import '../mongodb';

export interface allProductsProps {
    data: HandBagProps[];
    totalPage: number;
}

// Асинхронна функція для отримання всіх товарів
export const getAllProducts = async (page: number): Promise<allProductsProps> => {
    try {
        const pageSize: number = 4; // сторінка з кількістю карток товарів, яка показує першу сторінку
        const pageNumber: number = page || 1; // параметри пошуку або номер сторінки

        const count: number = await HandBagModel.find().countDocuments();

        const data: HandBagProps[] = await HandBagModel.find()
            .limit(pageSize)
            .skip((pageNumber - 1) * pageSize);

        const totalPage: number = Math.ceil(count / pageSize); // це загальна кількість сторінок товару

        return { data, totalPage } as { data: HandBagProps[]; totalPage: number };
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

// Асинхронна функція для отримання одного товару
export const getOneProduct = async (id: string): Promise<HandBagProps> => {
    try {
        const productById: HandBagProps | null = await HandBagModel.findById(id);

        if (!productById) {
            throw new Error();
        }
        return productById;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching product by ID:', error.message);
            throw new Error(`Error fetching product: ${error.message}`);
        }
        // Якщо помилка не є об'єктом Error
        console.error('Unexpected error:', error);
        throw new Error('Unexpected error occurred while fetching product.'); // Посилає помилку для обробки в місці виклику
    }
};

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
