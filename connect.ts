import Manager from "./Manager.ts"

const connect = (uri: (string | undefined)) => {
  const defaultConnection = Deno.env.get("REPLIT_DB_URL")
  const _uri = uri || defaultConnection

  if(!_uri) {
    throw new Error("please provide a replit db connection URI")
  }

  const manager = new Manager(_uri)
  return createProxy(manager)
}

const createProxy = (manager) => {
    const handle = {
      get(obj, key) {
        return key in obj 
          ? obj[key]
          : manager.getKey(key)
      }

      set(obj, key, value) {
        obj[key] = value
        return manager.setKey(key, JSON.stringify(value))
      }

      delete(obj, key) {
        delete obj[key]
        return manager.deleteKey(key)
      }
    }

    return new Proxy({}, handle)
}

export default connect