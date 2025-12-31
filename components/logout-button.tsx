"use client"

import { signOut } from "next-auth/react"
import { broadcastAuthChange } from "@/lib/auth-sync"

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await signOut({ callbackUrl: "/login" })
        broadcastAuthChange()
      }}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  )
}

