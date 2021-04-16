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
        return key in obj 
          ? obj[key]
          : manager.getKey(key)
      },
      delete(obj, key) {
        delete obj[key]
        return manager.deleteKey(key)
      },
      set(obj, key, value) {
        obj[key] = value
        return manager.setKey(key, JSON.stringify(value))
      }
    }

    return new Proxy({}, handle)
}

export default connect