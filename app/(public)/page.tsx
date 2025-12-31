import Link from "next/link"

export default function PublicHomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">
        Production-Oriented Admin Dashboard
      </h1>

      <p className="text-gray-600 text-center max-w-md">
        This is a demo admin dashboard built with modern
        Next.js architecture, focusing on server-first
        data flow and maintainability.
      </p>

      <Link
        href="/login"
        className="inline-block bg-black text-white px-6 py-3 rounded"
      >
        Login to Dashboard
      </Link>
    </main>
  )
}
