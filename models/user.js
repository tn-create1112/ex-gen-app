'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "名前は必ず入力してください。"
        }
      }
    },
    pass: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "パスワードは必ず入力ください。"
        }
      }
    },
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "メールアドレスを入力ください。"
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: { msg: "整数を入力ください。"},
        min: {
          args: [0],
          msg: "ゼロ以上の値が必要です。"
        }
      }
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Board);
  };
  return User;
};

