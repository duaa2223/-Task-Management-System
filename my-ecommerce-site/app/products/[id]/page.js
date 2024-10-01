export default function ProductDetailPage({ params }) {
    const products = [
      { id: 1, name: "Product 1", price: "$10", description: "This is Product 1." },
      { id: 2, name: "Product 2", price: "$20", description: "This is Product 2." },
      { id: 3, name: "Product 3", price: "$30", description: "This is Product 3." },
    ];
  
    const product = products.find((p) => p.id === parseInt(params.id));
  
    if (!product) {
      return <h1>Product not found</h1>;
    }
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl">{product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    );
  }
  