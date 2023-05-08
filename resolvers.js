const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      //orchedstrace 1 st backend\.. get res.
      // 2nd back.. reg.
      //...
      return dataSources.locationsAPI.getLocation(id);
    },
  },
};

module.exports = resolvers;
