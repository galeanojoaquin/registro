'use strict';
import axios from "axios";
import config from "../config"

export default class AuthServices {
  constructor() {
    this.instance = axios.create({
      baseURL: config.app.auth.uri,
    });
    this.instance.defaults.timeout = 2500;
  }

  /**
   * 
   * @param {number} legajo
   * @param {string} password
   * @returns
   */
  async attemp(legajo, password) {
    try {
      const auht = await this.instance.post(`/login`, {
        legajo,
        password,
      });
      return auht;
    } catch (error) {
      return error;
    }
  }
 
}
