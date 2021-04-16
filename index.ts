import Manager from "./Manager.ts"

const uri = Deno.env.get("REPLIT_DB_URL")

const manager = new Manager(uri!)

console.log(uri)

// awamanager.setKey("test", "value")
const body = (await manager.getKey("test"))
console.log(body)
console.log(await body.text())