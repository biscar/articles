import axios from 'axios';

class ArticlesApi {
  url = '/api/v1/articles';

  constructor() {
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  }

  index(params) {
    const request = axios.get(this.url, {params: params});
    return this.handleRequest(request);
  }

  destroy(articleId) {
    const request = axios.delete(`${this.url}/${articleId}`);
    return this.handleRequest(request);
  }

  update(articleId, params) {
    const request = axios.put(`${this.url}/${articleId}`, params);
    return this.handleRequest(request);
  }

  create(params) {
    const request = axios.post(this.url, params);
    return this.handleRequest(request);
  }

  handleRequest(request) {
    return request
      .then(response => response.data)
      .catch(this.errorHandler);
  }

  errorHandler(error) {
    console.log(error.response.statusText);
    alert(error.response.statusText);
  }
}

export default ArticlesApi;
