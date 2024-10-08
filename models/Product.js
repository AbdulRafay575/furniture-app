// models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    star: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true }
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
