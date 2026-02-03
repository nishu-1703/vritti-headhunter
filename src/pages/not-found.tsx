export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors">
          Go Home
        </a>
      </div>
    </div>
  );
}
