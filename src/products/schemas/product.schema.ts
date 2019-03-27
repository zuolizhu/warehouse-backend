import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    prodcutName: String,
    description: String,
    quantity: Number
});