import connect from "./connect.js"

const db = connect()

await (db["key"] = {
  value: "value"
})

console.log(await (db["key"]))