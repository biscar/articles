import axios from 'axios';

class ArticlesApi {
  url = '/api/v1/articles';

  constructor() {
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  }

  index(params) {
    return this.handleRequest(axios.get(this.url, {params: params}));
  }

  destroy(articleId) {
    return this.handleRequest(axios.delete(`${this.url}/${articleId}`));
  }

  update(articleId, params) {
    return this.handleRequest(axios.put(`${this.url}/${articleId}`, params));
  }

  create(params) {
    return this.handleRequest(axios.post(this.url, params));
  }

  handleRequest(request) {
    return request
      .then(response => response.data)
      .catch(this.errorHandler);
  }

  errorHandler(error) {
    alert(error.response);
  }
}

export default ArticlesApi;
