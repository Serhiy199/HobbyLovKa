import 'dotenv/config';
import mongoose from 'mongoose';

const DB_URI: string | undefined = process.env.DB_URI;
// const DB_URI_SHOPPING: string | undefined = process.env.DB_URI_SHOPPING;

if (!DB_URI) {
    console.error('DB_URI is not defined in environment variables');
    process.exit(1);
}

// if (!DB_URI_SHOPPING) {
//     console.error('DB_URI is not defined in environment variables');
//     process.exit(1);
// }

export default mongoose
    .connect(DB_URI)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    });

// mongoose
//     .connect(DB_URI_SHOPPING)
//     .then(() => {
//         console.log('Database connection successful');
//     })
//     .catch((err: Error) => {
//         console.log(err);
//         process.exit(1);
//     });
