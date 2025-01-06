import { Schema, model, models } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Використання існуючої моделі або створення нової
const Movie = models.User || model<IUser>('Movie', UserSchema); //users -> collection name;

export default Movie;

// import mongoose from 'mongoose';

// const handBagsSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, 'Set name for contact'],
//         },
//         email: {
//             type: String,
//         },
//         password: {
//             type: String,
//         },
//         // phone: {
//         //     type: String,
//         // },
//         // favorite: {
//         //     type: Boolean,
//         //     default: false,
//         // },
//     },
//     { versionKey: false }
// );

// export default mongoose.model('User', handBagsSchema); //users -> collection name;
