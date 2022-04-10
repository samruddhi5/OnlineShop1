import React, { Component } from 'react'
import axios from 'axios'
const baseURL = 'http://localhost:8080/api/product/'
class prodcutservice extends Component {
  getproduct() {
    return axios.get(baseURL )
  }
  createProduct(product){
    return axios.post(baseURL,product)
  }
  }
export default new prodcutservice()






// import httpClient from '../http-common.js';


// const getAll = () => {
//   return httpClient.get('');
// };

// const create = (data) => {
//   return httpClient.post('', data);
// };

// const get = (id) => {
//   return httpClient.get(`${id}`);
// };

// const update = (data) => {
//   return httpClient.put('', data);
// };

// const remove = (id) => {
//   return httpClient.delete(`/${id}`);
// };
// export default { getAll, create, get, update, remove };
