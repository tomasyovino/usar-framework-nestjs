import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: String,
    desc: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});