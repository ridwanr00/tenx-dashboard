import { use } from "react"
import { getUsers, createUser } from "./action"

type Props = {
  searchParams: Promise<{
    q?: string
  }>
}

export default function UsersPage({ searchParams }: Props) {
  const params = use(searchParams)
  const query = params.q

  const users = use(getUsers(query))

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Users</h1>

      <form action={createUser} className="flex gap-2">
        <input
          name="name"
          placeholder="User name"
          className="border p-2"
        />
        <button className="bg-black text-white px-4">
          Add
        </button>
      </form>

      <form className="flex gap-2">
        <input
          name="q"
          defaultValue={query}
          placeholder="Search user"
          className="border p-2"
        />
        <button className="border px-4">
          Search
        </button>
      </form>

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="bg-white p-3 rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
