"use client";

import { broadcastAuthChange } from "@/lib/auth-sync";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    await signIn("credentials", {
      email: formData.get("email"),
      redirect: true,
    });

    broadcastAuthChange();

    setLoading(false);
  }

  return (
    <form
      action={handleSubmit}
      className="min-h-screen flex items-center justify-center gap-2"
    >
      <input name="email" placeholder="Email" className="border p-2" />
      <button disabled={loading} className="bg-black text-white px-4 py-2">
        {loading ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}
