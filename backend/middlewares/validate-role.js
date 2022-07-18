const { request, response } = require('express');

const validateRole = (req=request,res=response,next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Trying to verificate the role without check the token before'
        });
    }

    const { role, username } = req.user;
    if (role !== "ADMIN") {
      return res.status(401).json({
        msg: `User: ${username} isn't an administrator`,
      });
    }

    next();
}

module.exports = {
    validateRole
}