'use strict';
module.exports = function(sequelize, DataTypes) {
  var tag = sequelize.define('tag', {
    tagId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.tag.belongsToMany(models.favorite, {through: "favoritesTags"});
        // associations can be defined here
      }
    }
  });
  return tag;
};