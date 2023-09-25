import client from "./client"

export function getSomeThing() {
  return client.get("/some-thing")
}

export default {
  getSomeThing,
}
