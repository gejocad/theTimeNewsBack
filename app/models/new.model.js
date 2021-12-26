module.exports = (sequelize, Sequelize) => {
  const New = sequelize.define("new", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return New;
};
