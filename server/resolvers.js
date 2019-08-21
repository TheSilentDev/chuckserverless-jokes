exports.resolvers = {
  Query: {
    joke: async (_source, { category }, { dataSources }) => {
      return dataSources.chuckNorrisAPI.getJoke(category);
    },
    categories: async (_source, _args, { dataSources }) => {
      return dataSources.chuckNorrisAPI.getCategories();
    }
  }
};
