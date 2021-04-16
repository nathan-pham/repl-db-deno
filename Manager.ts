const parse = (body) => body.json()

class Manager {
  #uri: string

  constructor(uri: string) {
    this.#uri = uri
  }

  setKey(key: string, value: string) {
    return fetch(`${this.#uri}?${key}=${value}`, {
      method: "POST"
    }).then(parse)
  }

  getKey(key: string) {
    return fetch(`${this.#uri}/${key}`, {
      method: "GET"
    }).then(parse)
  }

  deleteKey(key: string) {
    return fetch(`${this.#uri}/${key}`, {
      method: "DELETE"
    }).then(parse)
  }

  listAll(prefix: string) {
    return fetch(`${this.#uri}?prefix=${prefix}`, {
      method: "POST"
    }).then(parse)
  }
}

export default Manager