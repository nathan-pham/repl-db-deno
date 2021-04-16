import Manager from "./Manager.js"

const defaultConnection = Deno.env.get("REPLIT_DB_URL")

const connect = (url=defaultConnection) => {
  if(!url) {
    throw new Error("provide a connection url")
  }

  const manager = new Manager(url)
  return createProxy(manager)
}

const createProxy = (manager) => {
  const handle = {
    get(obj, key) {
      if(key === "keys") {
        return () => manager.listAll()
      }

      return key in obj && Object.keys(obj[key]).length
        ? obj[key]
        : manager.getKey(key)
    },
    deleteProperty(obj, key) {
      if(key === "keys" || !key in obj) {
        throw new Error("invalid key")
      }

      console.log(key)

      delete obj[key]
      return manager.deleteKey(key)
    },
    async set(obj, key, value) {
      if(key === "keys" || !key in obj) {
        throw new Error("invalid key")
      }

      obj[key] = value
      return manager.setKey(key, JSON.stringify(value))
    }
  }

  const proxy = new Proxy({}, handle)
  return proxy
}

export default connect