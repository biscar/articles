import Axios from "../clients/Axios";

export default class Articles extends Axios {
  constructor(){
    super('/api/v1/articles');
  }

  getArticles(params, callback) {
    return this.get(params, callback);
  }

  createArticle(params, callback) {
    return this.post(params, callback);
  }

  updateArticle(articleId, params, callback) {
    return this.put(articleId, params, callback);
  }

  destroyArticle(articleId, callback) {
    return this.destroy(articleId, callback);
  }
}
