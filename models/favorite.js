'use strict';
module.exports = function(sequelize, DataTypes) {
  var favorite = sequelize.define('favorite', {
    imdbId: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.favorite.hasMany(models.post);
        models.favorite.belongsToMany(models.tag, {through: "favoritesTags"});
        // models.favorite.hasMany(models.tags);
                // associations can be defined here
      }
    }
  });
  return favorite;
};