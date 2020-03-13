import axios from 'axios';

export default class Axios {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get(params, callback) {
    const request = axios.get(this.endpoint, {
      params: params
    });

    return this.handleRequest(request, callback);
  }

  post(params, callback) {
    const request = axios.post(this.endpoint, params);

    return this.handleRequest(request, callback);
  }

  put(id, params, callback) {
    const request = axios.put(`${this.endpoint}/${id}`, params);

    return this.handleRequest(request, callback);
  }

  destroy(id, callback) {
    const request = axios.delete(`${this.endpoint}/${id}`);

    return this.handleRequest(request, callback);
  }

  handleRequest(request, callback) {
    return request
      .then((response) => {
        callback(response.data.data);
      })
      .catch((error) => {
        this.errorHandler(error)
      });
  }

  errorHandler(error) {
    const message = error.response.data.error;

    console.log(message);
    alert(message);
  }
}
