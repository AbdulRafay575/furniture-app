"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '@/components/ProductList';
import ProductForm from '@/components/ProductForm';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            return;
        }

        axios
            .get('/api/products', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => setProducts(res.data.data))
            .catch(() => router.push('/login'));

        // Logout function
        const handleLogout = () => {
            localStorage.removeItem('token');
            router.push('/login');
        };

        // Add event listener for `beforeunload`
        window.addEventListener('beforeunload', handleLogout);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('beforeunload', handleLogout);
        };
    }, [router]);

    const addProduct = async (newProduct) => {
        const token = localStorage.getItem('token');
        const { data } = await axios.post('/api/products', newProduct, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setProducts([...products, data.data]);
    };

    const deleteProduct = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`/api/products?id=${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(products.filter((product) => product._id !== id));
    };

    return (
        <div className="container mx-auto p-8">
            {/* Large Fancy Welcome Title */}
            <div className="text-center mb-12">
                <h1 className="text-6xl font-bold text-gray-800">
                    Welcome to Your Backend Dashboard
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Manage your products with ease and style
                </p>
            </div>

            {/* Enhanced Form for Adding Products */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Add a New Product</h2>
                <ProductForm addProduct={addProduct} />
            </div>

            {/* Display Product Cards */}
            <div>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Your Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={product.image || 'https://via.placeholder.com/300'}
                                alt={product.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                                <p className="text-gray-600 mb-2">Category: {product.category}</p>
                                <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        onClick={() => deleteProduct(product._id)}
                                        className="text-red-500 hover:text-red-700 font-semibold"
                                    >
                                        Delete
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
