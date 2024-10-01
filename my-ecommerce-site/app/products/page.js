const products = [
  { id: 1, name: "Product 1", price: "$10" },
  { id: 2, name: "Product 2", price: "$20" },
  { id: 3, name: "Product 3", price: "$30" },
];
import Head from 'next/head';

export default function ProductsPage() {
  return (
    <div className="p-6">
      <Head>
        <title>Products - My E-Commerce Site</title>
        <meta name="description" content="List of all products available." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl">{product.name}</h2>
            <p>{product.price}</p>
            <a href={`/products/${product.id}`}>
              <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">
                View Details
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

  