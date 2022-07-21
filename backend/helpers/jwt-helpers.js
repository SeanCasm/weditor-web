const jwt = require("jsonwebtoken");

const createJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(
      payload,
      process.env.SECRETKEY,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Token cannot be created");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  createJWT,
};
