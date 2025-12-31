# Production-Oriented Admin Dashboard (Next.js)

This project is a **production-oriented admin dashboard** built using the **latest Next.js App Router**.
The focus of this project is **architecture correctness, security, and data flow**, rather than complex UI.

It demonstrates how modern Next.js applications should be built using a **server-first approach**
with clear separation between server-owned state and client-only UI state.

---

## 🎯 Project Goals

- Demonstrate modern **Next.js App Router** usage
- Apply a **server-first architecture**
- Implement **secure, cookie-based authentication**
- Use **Server Components and Server Actions correctly**
- Separate **server-owned state** from **client-only UI state**
- Provide a clean, scalable project structure

---

## 🧱 Tech Stack

- **Next.js (latest, App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Auth.js (NextAuth v5)**
- **Zustand** (client-only UI state)
- **Zod** (server-side validation)

---

## 🧠 Architectural Overview

### App Router & Route Groups

Route Groups are used to organize concerns without affecting URLs:

- `(public)` → public landing page
- `(auth)` → authentication pages
- `dashboard` → protected admin area

---

### Server-First Data Flow

All pages are **Server Components by default**.

- Data fetching happens on the server
- No client-side fetching for core data
- The server acts as the **single source of truth**

---

### Authentication & Route Protection

Authentication is implemented using **Auth.js (NextAuth v5)** with a
**cookie-based session strategy**.

- Session data is stored in **HTTP-only cookies**
- No authentication data is stored in `localStorage`
- Protected routes are enforced at two layers:
  1. **Middleware** (`/dashboard/*`)
  2. **Server Layout redirect**

#### Multi-Tab Behavior

Authentication state is shared across tabs via cookies.
Other tabs will reflect login/logout state on the next navigation or refresh,
which is expected browser behavior and does not affect security.

---

### Server Actions & Cache Revalidation

All data mutations are handled via **Server Actions**.

After a mutation, affected routes are explicitly revalidated:

```ts
revalidatePath("/dashboard/users")
```

---

### Client State Management (Zustand)

Zustand is used **only for client-only UI state**, such as:

- Sidebar visibility
- Dark / Light theme preference

UI preferences are persisted and synchronized across tabs using `localStorage`
and the `storage` event.

Zustand is **not used** for authentication or server-owned data.

---

## 📁 Project Structure

```
app/
 ├─ (public)/
 │   └─ page.tsx
 ├─ (auth)/
 │   └─ login/
 │       └─ page.tsx
 ├─ dashboard/
 │   ├─ layout.tsx          # Server auth guard
 │   ├─ dashboard-shell.tsx # Client UI shell
 │   ├─ page.tsx
 │   └─ users/
 │       ├─ page.tsx
 │       ├─ actions.ts
 │       ├─ loading.tsx
 │       └─ error.tsx
 ├─ api/
 │   └─ auth/
 │       └─ [...nextauth]/route.ts
 ├─ middleware.ts
lib/
 ├─ auth.ts
 ├─ page-title.ts
 └─ store/
 │   └─ ui-store.ts
components/
 ├─ sidebar-nav.tsx
 ├─ theme-toggle.tsx
 └─ logout-button.tsx
```

---

## 🚀 Usage (How to Use)

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Environment Variables

Create `.env.local`:

```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

---

### 3. Run the Application

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

### 4. Application Flow

1. Open the public landing page
2. Click **Login**
3. Enter any email (credentials are mocked)
4. You will be redirected to `/dashboard`
5. Navigate using the sidebar:
   - Dashboard
   - Users
6. Add and search users
7. Toggle sidebar and theme
8. Logout to return to the public page

---

## ✅ Self QA / Verification Checklist

### Authentication & Security

- [ ] `/dashboard` is not accessible without login
- [ ] Manual URL access redirects to `/`
- [ ] Authentication data is **not stored** in `localStorage`
- [ ] Session is stored in **HTTP-only cookies**
- [ ] Login redirects to `/dashboard`
- [ ] Logout clears the session

---

### Multi-Tab Behavior

- [ ] Login in tab A does **not** force redirect in tab B
- [ ] Refreshing tab B reflects login state
- [ ] Logout is reflected after refresh or navigation
- [ ] Behavior matches standard browser cookie handling

---

### Data & Server Actions

- [ ] Users list loads via Server Component
- [ ] Creating a user uses Server Actions
- [ ] UI updates after `revalidatePath`
- [ ] No client-side data fetching for users

---

### UI & Client State

- [ ] Sidebar navigation works without typing URLs
- [ ] Active page title updates based on route
- [ ] Dark mode persists across refresh
- [ ] Dark mode syncs across tabs
- [ ] Zustand is used only for UI state

---

## 📝 Notes for Reviewers

- The UI is intentionally minimal
- The focus is on **architecture and correctness**
- This project demonstrates real-world Next.js patterns
- Security decisions follow standard web best practices

---

## 👤 Author

Built as a demonstration of **modern Next.js engineering practices**,
with an emphasis on server-first architecture, security, and maintainability.