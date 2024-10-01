import Head from 'next/head';
export default function HomePage() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
         <Head>
        <title>Products - My E-Commerce Site</title>
        <meta name="description" content="List of all products available." />
      </Head>
        <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Website</h1>
        <p className="mb-6 text-lg">Explore the best products and deals here!</p>
        {/* <nav>
          <ul className="space-x-4">
            <li className="inline-block">
              <a href="/products" className="text-blue-500 underline">Products</a>
            </li>
            <li className="inline-block">
              <a href="/about" className="text-blue-500 underline">About Us</a>
            </li>
          </ul>
        </nav> */}
      </div>
    );
  }
  