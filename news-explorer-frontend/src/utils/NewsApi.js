class NewsApi {
  constructor({ url, apiKey }) {
    this.url = url;
    this.apiKey = apiKey;
    this.time = new Date();
  }

  // async _connect(url) {
  //   const res = await fetch(url);
  //   res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  // }

  _getLastWeek() {
    return new Date(
      this.time.getFullYear(),
      this.time.getMonth(),
      this.time.getDate() - 7
    );
  }

  getNews(keyword){
    const getLastWeek = this._getLastWeek();  // from=${getLastWeek} //
    return fetch(`${this.url}?q=${keyword}&apiKey=${this.apiKey}&from=${getLastWeek}&to=${this.time}&pageSize=100`)
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      })
  }
}

const newsApi = new NewsApi ({
  url : "https://nomoreparties.co/news/v2/everything",
  apiKey: '64c063130e9f44cf9a9dffaf5e24dafe', // //c1e440ce21524f2d95ce3e6f011f1eb6
});

export default newsApi;