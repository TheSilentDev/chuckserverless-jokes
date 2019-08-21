const { RESTDataSource } = require("apollo-datasource-rest");

export default class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/";
  }

  async getCategories() {
    return this.get("jokes/categories");
  }

  async getJoke(category) {
    const data = await this.get(`jokes/random?category=${category}`);
    return data.results;
  }
}
