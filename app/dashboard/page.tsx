import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Dashboard</h1>

      <p className="text-gray-600">
        Welcome to the admin dashboard.
      </p>

      <Link
        href="/dashboard/users"
        className="inline-block text-blue-600 underline"
      >
        Go to Users
      </Link>
    </div>
  )
}
