import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import apiRoute, { apiProtected } from './src/routes/api.js';
import AuthMiddleware from './src/middlewares/AuthMiddleware.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://yiyido7251:xUyPHi6CxNqC9TXr@cluster0.ln52oae.mongodb.net/todo_app_verified`);
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED: ", error);
        process.exit(1);
    }
}

const PORT = 3000;
const app = express();

const localURL = "http://localhost:5173"
const vercelURL = "https://auth-app-client-black.vercel.app"

const URL = vercelURL;  // Change to localURL if you are running the server locally

const corsOption = {
    origin: URL,
    methods: ['POST', 'GET'],
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);

// Connect the database 
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => console.error(err));