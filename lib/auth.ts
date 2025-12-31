import Credentials from "next-auth/providers/credentials"

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
      },
      async authorize(credentials) {
        if (!credentials?.email) return null

        return {
          id: "1",
          email: credentials.email as string,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url === baseUrl || url === `${baseUrl}/login`) {
        return `${baseUrl}/dashboard`
      }
      return url
    },
  },
}
