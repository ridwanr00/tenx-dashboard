"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"

type User = {
  id: number
  name: string
}

const USERS: User[] = [
  { id: 1, name: "Eka" },
  { id: 2, name: "Eki" },
]

const schema = z.object({
  name: z.string().min(1),
})

export async function getUsers(query?: string) {
  if (!query) return USERS

  return USERS.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  )
}

export async function createUser(formData: FormData) {
  const parsed = schema.safeParse({
    name: formData.get("name"),
  })

  if (!parsed.success) {
    throw new Error("Invalid input")
  }

  USERS.push({
    id: Date.now(),
    name: parsed.data.name,
  })

  revalidatePath("/dashboard/users")
}
