export const BASE_URL = "http://localhost:3001";

class MainApi {

  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  _checkResponse(res){
    return res.ok ? res.json() : Promise.reject(`Error: ${res.StatusText}`)
  }

  // _checkFetch(url, headers) {
  //   return fetch(url, headers).then((res) =>
  //     res.ok ? res.json() : Promise.reject(`Error: ${res.StatusText}`)
  //   )
  // }

  signup(name, email, password) {
    return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password}),
    })
    .then(this._checkResponse)
  }

  signin(name, email, password) {
    return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password})
    })
    .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
    .then(this._checkResponse)
  }

  checkToken(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
    })
    .then(this._checkResponse)
  }

  savedArticleStatusChange(id, isSaved) {
    const method = isSaved ? "DELETE" : "PUT";
    return fetch(`${this._baseUrl}/articles/${id}/saves`, {  // cards /${id}/likes
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      method: method,
    })
    .then(this._checkResponse)
  }

  deleteArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      method: "DELETE",
    })
    .then(this._checkResponse)
  }

  getArticles(){
    return fetch(`${this._baseUrl}/articles`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(this._checkResponse)
  }

}

const api = new MainApi ({
  baseUrl : "http://localhost:3001",
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  }
})

export default api;
