import axios from 'axios';

class ArticleApi {
  url = '/api/v1/article';

  constructor() {
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
  }

  destroy(articleId) {
    return axios.delete(`${this.url}/${articleId}`)
      .then(response => response.data)
      .catch(this.errorHandler);
  }

  update(articleId, params) {
    return axios.put(`${this.url}/${articleId}`, params)
      .then(response => response.data)
      .catch(this.errorHandler);
  }

  create(params) {
    return axios.post(this.url, params)
      .then(response => response.data)
      .catch(this.errorHandler);
  }

  errorHandler(error) {
    alert(error.response);
  }
}

export default ArticleApi;