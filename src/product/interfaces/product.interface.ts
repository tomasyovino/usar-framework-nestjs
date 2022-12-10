import { Document } from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly desc: string;
    readonly price: number;
    readonly imageURL: string;
    readonly createdAt: Date;
}