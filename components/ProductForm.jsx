// components/ProductForm.js
import { useState } from 'react';

export default function ProductForm({ addProduct }) {
    const [name, setName] = useState('');
    const [star, setStar] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, star, category, image, price });
        setName('');
        setStar('');
        setCategory('');
        setImage('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <input
                type="number"
                placeholder="Star"
                value={star}
                onChange={(e) => setStar(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                Add Product
            </button>
        </form>
    );
}
