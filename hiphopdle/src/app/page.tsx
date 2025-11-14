'use client';
// app/page.tsx
import PageRedirectButton from "../components/PageRedirectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-5xl font-bold mb-8 text-gray-900">Hip-Hopdle</h1>
      <p className="text-lg mb-12 py-4 text-gray-900">inspired by the original NYT Wordle, as well as the many other -dle games out there</p>
      <div className="flex gap-4">
        <PageRedirectButton targetUrl="/album" pageName="Album" />
        <PageRedirectButton targetUrl="/rapper" pageName="Rapper" />
        <PageRedirectButton targetUrl="/song" pageName="Song" />
      </div>
    </main>
  );
}

