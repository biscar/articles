import axios from 'axios';
import RemoveArticleChannel from "../channels/RemoveArticleChannel";

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

  errorHandler(error) {
    alert(error.response);
  }
}

export default ArticleApi;