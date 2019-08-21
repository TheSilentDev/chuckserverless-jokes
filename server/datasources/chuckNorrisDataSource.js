const { RESTDataSource } = require("apollo-datasource-rest");

class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/";
  }

  async getCategories() {
    return await this.get("jokes/categories");
  }

  async getJokeByCategory(category) {
    return await this.get(`jokes/random?category=${category}`);
  }
}

module.exports = ChuckNorrisAPI;
