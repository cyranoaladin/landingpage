export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-green-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
        >
          Return Home
        </a>
      </div>
    </div>
  );
} 