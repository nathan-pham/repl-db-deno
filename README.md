# Replit DB Deno
wrapper around the key-value db in Replit  

## Create Database
```js
import connect from "./connect.js"
const db = connect()
```
modifying the database is similar to changing the values of an object

### Example
```js
import connect from "./connect.js"
const db = connect()

await (db["key"] = {
  "example": "value"
}) 
// = {} 

await (db["key"]) 
// => { example: "value" }

await (delete["key"]) 
// = {}

for (const key of await db.keys()) {
  console.log(keys)
}
```