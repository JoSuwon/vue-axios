import axios from 'axios';

export default {
  install(Vue, options) {
    const { host, name } = options;
    Vue.prototype[`$${name}`] = axios.create({
      baseURL: host,
      timeout: 5000,
    });
  }
}