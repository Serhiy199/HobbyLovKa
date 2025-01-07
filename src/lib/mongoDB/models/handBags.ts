// import mongoose, { Schema, model } from 'mongoose';

// interface IUser {
//     name: string;
//     email: string;
//     password: string;
// }

// const userSchema = new Schema<IUser>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
// });

// // const User = model<IUser>('User', userSchema);

// // Використання існуючої моделі або створення нової
// export default mongoose.model<IUser>('Movie', userSchema); //users -> collection name;

// export default Movie;

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

import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
    name: string;
    email: string;
    avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb://127.0.0.1:27017/test');

    const user = new User({
        name: 'Bill',
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png',
    });
    await user.save();

    console.log(user.email); // 'bill@initech.com'
}

run().catch(err => console.log(err));
