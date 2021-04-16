import Manager from "./db.ts"

interface Document {
  version: number
  content: string
}

class Database {
  #uri: string
  manager: Manager

  connect(uri: (string | undefined)) {
    const defaultConnection = Deno.env.get("REPLIT_DB_URL")
    
    if(!uri && !defaultConnection) {
      throw new Error("please provide a replit db connection URI")
    }

    this.#uri = uri || defaultConnection
    this.manager = new Manager(this.#uri)
  }

  collection(name: string) {
    return createCollection(name, this.manager)
  }
}

const createCollection = (name, manager) => {
  const handle = {
    get(obj, key) {
      return obj.hasOwnProperty(key)
        ? obj[key]
        : manager.getKey(key)
    }
  } 

  return new Proxy({}, handle)
}

const connect = async (uri = defaultConn) => {
  if(!uri) {
    throw new Error("please provide a replit db connection string")
  }

  const manager = new Manager(uri)
  
  const store = {}
  const handle = {
    async get(obj, key) {
      const exists = obj.hasOwnProperty(key)

      const body = await manager.getKey(key)
      // const body = await fetch(`${uri}/${key}`)
        // .then(res => res.text())

      if(exists) {

      }
    }
  }

  return new Proxy(store, handle)
}

export default connect

/*

  get: function (target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },


const client = await connect(uri)

const db = client.collection("repl-db")

 */