'use client';

export default function PageRedirectButton({ targetUrl, pageName }: {
  targetUrl: string;
  pageName: string;
}) {
  return (
    <button
      onClick={() => {
        window.location.href = targetUrl
      }}
      className="px-6 py-3 rounded-xl bg-blue-600 text-white text-lg hover:bg-blue-700 transition"
    >
      {pageName}
    </button>
  )
}