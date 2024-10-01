import Image from 'next/image';
import Head from 'next/head';

export default function AboutPage() {
  return (
    
    <div className="p-6">
        <Head>
        <title>Products - My E-Commerce Site</title>
        <meta name="description" content="List of all products available." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <Image 
        src="/ballon.jpeg" 
        alt="About Us Image" 
        width={500} 
        height={300} 
        className="rounded mb-4"
      />
      <p>Welcome to our e-commerce site. We offer the best products for you!</p>
    </div>
  );
}
