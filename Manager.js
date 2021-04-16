const parse = async (res) => {
  const body = await res.text()
  if(body) {
    try {
      return JSON.parse(body)
    } catch(e) {
      return {}
    }
  }  

  return {}
}

class Manager {
  #uri = ""

  constructor(uri) {
    this.#uri = uri
  }

  setKey(key, value) {
    return fetch(`${this.#uri}?${key}=${value}`, {
      method: "POST"
    }).then(parse)
  }

  getKey(key) {
    return fetch(`${this.#uri}/${key}`, {
      method: "GET"
    }).then(parse)
  }

  deleteKey(key) {
    return fetch(`${this.#uri}/${key}`, {
      method: "DELETE"
    }).then(parse)
  }

  listAll(prefix) {
    return fetch(`${this.#uri}?prefix=${prefix}`, {
      method: "POST"
    }).then(parse)
  }
}

export default Manager