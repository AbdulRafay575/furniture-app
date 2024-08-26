"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for app directory routing
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/api/auth', { username, password });
            localStorage.setItem('token', data.token);
            router.push('/dashboard');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="w-2/4 mx-auto p-4 flex items-center justify-center h-screen">
            <div className="bg-white w-2/4 shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl font-medium text-gray-900">Sign in Sir</h3>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Your name</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="name@company.com"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Login to your account
                    </button>
                    
                </form>
            </div>
        </div>
    );
}
