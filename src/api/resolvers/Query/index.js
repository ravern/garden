const Query = {
  test: async (_obj, _args, { db }) => {
    await db.getUserByEmailOrUsername("john@example.com");
  },
};

export default Query;
