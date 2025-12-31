export function getPageTitle(pathname: string) {
  if (pathname === "/dashboard") return "Dashboard"
  if (pathname.startsWith("/dashboard/users")) return "Users"

  return "Dashboard"
}
