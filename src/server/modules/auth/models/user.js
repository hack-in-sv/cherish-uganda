module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    googleId: {
      type: Sequelize.STRING,
      unique: 'google_id'
    },
    email: {
      type: Sequelize.STRING,
      unique: 'email',
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true
      }
    },
    firstName: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    /* table options */
    tableName: 'auth_accounts',
    paranoid: true, // soft-delete via `deletedAt` column
    version: true // Enable optimistic locking. 
  });

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task);
  // };

  return User;
};