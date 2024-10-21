import mongoose from "mongoose";

async function dbConnect(): Promise<void> {
    if (mongoose.connection.readyState >= 1) {
        // If the connection is already established or connecting (1: connected, 2: connecting)
        console.log("Database is already connected.");
        return;
    }
    
    try {
        await mongoose.connect(process.env.DATABASE_URL as string);
        console.log("Database is connected...");
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;