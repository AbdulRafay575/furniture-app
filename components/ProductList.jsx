// components/ProductList.js
export default function ProductList({ products, deleteProduct }) {
    return (
        <ul className="list-disc">
            {products.map((product) => (
                <li key={product._id} className="mb-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p>Name: {product.name}</p>
                            <p>Star: {product.star}</p>
                            <p>Category: {product.category}</p>
                            <p>Price: {product.price}</p>
                        </div>
                        <button
                            onClick={() => deleteProduct(product._id)}
                            className="bg-red-500 text-white py-1 px-2 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
