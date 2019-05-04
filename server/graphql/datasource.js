import { RESTDataSource } from 'apollo-datasource-rest';

export class ShopsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:5000/shops';
  }

  async getAllShops() {
    return this.get('/');
  }

  async getAShop(id) {
    const result = await this.get('/', {
      id
    });

    return result[0];
  }
};