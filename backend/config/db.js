import mongoose from "mongoose"

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://greatstock:3350CSE@cluster0.orahhbu.mongodb.net/FoodCorner')).then(()=>console.log("DB Connected"))
}