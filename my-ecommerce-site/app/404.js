export default function Custom404() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
       
        <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Go back to Home
        </a>
      </div>
    );
  }
  