export const BASE_URL = "https://api.namernews.students.nomoredomainssbs.ru/";
// // "http://localhost:3001"

class MainApi {

  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  _checkResponse(res){
    return res.ok ? res.json() : Promise.reject(`Error: ${res.StatusText}`)
  }

// async _connect(url, headers) {
//   const res = await fetch(url, headers);
//     return res.ok ? res.json() : await Promise.reject(`Error: ${res.status}`)
//  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  signup({name, email, password}) {
    console.log(name, email, password)
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password}),
    })

  }

  signin({ email, password}) {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password})
    })
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
  }

  checkToken(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
    })
  }

  saveArticle(article) {
    //console.log("article read @mainApi=> ", article);
    return this._request(`${this._baseUrl}/articles`, {
      method: "POST",
      headers: //this.headers,
      {
        ...this._headers,
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`
      }, 
      body: JSON.stringify(article),
    })
  }

  deleteArticle(id) { //id
    return this._request(`${this._baseUrl}/articles/${id}`, {  //${id}
      method: "DELETE",
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
    })
  }

  getArticles(){
    return this._request(`${this._baseUrl}/articles`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
  }

}

const api = new MainApi ({ 
   baseUrl : "https://api.namernews.students.nomoredomainssbs.ru",   // "http://localhost:3001", 
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  }
})

export default api;
