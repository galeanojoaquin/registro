'use strict';
import axios from "axios";
import config from "../config";

export class BaseService {
  /**
   * 
   * @param {string} token
   */
  constructor(token) {
    // Set config defaults when creating the instance
    this.instance = axios.create({
      baseURL: config.app.api,
    });

    // Alter defaults after instance has been created
    this.instance.defaults.headers.common['Authorization'] = `${token}`;

    // Override timeout default for the library
    // Now all requests using this instance will wait 2.5 seconds before timing out
    this.instance.defaults.timeout = 2500;

    this.instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  }
}
