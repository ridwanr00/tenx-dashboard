export function broadcastAuthChange() {
  localStorage.setItem(
    "auth-event",
    Date.now().toString()
  )
}
