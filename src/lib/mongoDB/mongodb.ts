import 'dotenv/config';
import mongoose from 'mongoose';

// const DB_URI: string | undefined = process.env.DB_URI;

// if (!DB_URI) {
//     console.error('DB_URI is not defined in environment variables');
//     process.exit(1);
// }

// const DB_URI = process.env.DB_URI;

mongoose
    .connect(
        'mongodb+srv://Sergii:1234567890Xxx@cluster0.wa4ou.mongodb.net/db_handBags?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    });
