const parse = async (res, keys) => {
  const body = await res.text()

  try {
    return keys
      ? body.split('\n').filter(v => v.length) || []
      : JSON.parse(body)
  } catch(e) {
    return {}
  }
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

  listAll(prefix='') {
    return fetch(`${this.#uri}?prefix=${prefix}`, {
      method: "GET"
    }).then((res) => parse(res, true))
  }
}

export default Manager