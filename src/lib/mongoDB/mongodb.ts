import 'dotenv/config';
import mongoose from 'mongoose';

const DB_URI: string | undefined = process.env.DB_URI;

if (!DB_URI) {
    console.error('DB_URI is not defined in environment variables');
    process.exit(1);
}

// const DB_URI = process.env.DB_URI;

mongoose
    .connect(DB_URI, {
        serverSelectionTimeoutMS: 50000, // Збільшуємо тайм-аут на 50 секунд
    })
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    });
