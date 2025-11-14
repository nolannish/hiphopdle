'use client';
// app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-5xl font-bold mb-8 text-gray-900">Welcome to My Next.js Page</h1>

      <div className="flex gap-4">
        <button 
          onClick={() => {
            window.location.href = "/album"
          }}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white text-lg hover:bg-blue-700 transition"
        >
          Album
        </button>

        <button 
          onClick={() => {
            window.location.href = "/rapper"
          }}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white text-lg hover:bg-blue-700 transition"
        >
          Rapper
        </button>
      </div>
    </main>
  );
}

