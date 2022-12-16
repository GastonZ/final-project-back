const User = require("../models/Users");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("../middlewares/accountVerificationEmail");
const {
  userSignedUpResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
  userSignedOutResponse,
} = require("../config/responses");
const jwt = require("jsonwebtoken");

const controller = {
  register: async (req, res, next) => {
    let { name, lastName, email, user, password } = req.body;
    let role = "user";
    let photo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg";
    let banner = "https://cdn.wallpapersafari.com/13/5/tcfibJ.jpg"
    let verified = false;
    let testimony = " ";
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10);

    try {
      await User.create({
        name,
        lastName,
        photo,
        banner,
        email,
        testimony,
        user,
        password,
        role,
        verified,
        logged,
        code,
      });
      await accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  verify: async (req, res, next) => {
    const { code } = req.params;
    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        
          res.status(302).json({
            response: code,
            success: true,
            message: "User verified",
          });
        return res.redirect("http://localhost:3000/");
        }
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  entry: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    console.log(user);
    try {
      const checkPassword = bcryptjs.compareSync(password, user.password);
      if (checkPassword) {
        const userDB = await User.findOneAndUpdate(
          { _id: user.id },
          { logged: true },
          { new: true }
        );
        const token = jwt.sign(
          {
            id: userDB._id,
            name: userDB.name,
            banner: userDB.banner,
            testimony: userDB.testimony,
            photo: userDB.photo,
            logged: userDB.logged,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 * 365 }
        );
        console.log(token);
        let userToken = {
          name : user.name,
          email: user.email,
          testimony: user.testimony,
          banner: user.banner,
          role: user.role,
          lastName: user.lastName,
          logged: user.logged,
          photo: user.photo,
          id: user._id,
        };
        console.log(userToken + 'console log 102');
        return res.status(200).json({
          response: { token, userToken },
          success: true,
          message: "Welcome " + user.name + " !",
        });
      }
      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  loginWithToken: async (req, res, next) => {
    let { user } = req;
    console.log(user);
    try {
      return res.json({
        response: {
          user: {
            id: user.id,
            name: user.name,
            role: user.role,
            testimony: user.testimony,
            photo: user.photo,
            banner: user.banner,
            logged: user.logged,
          },
        },
        succes: true,
        message: "Welcome " + user.name + " !",
      });
    } catch (error) {
      next(error);
    }
  },
  unlogin: async (req, res, next) => {
    try {
      const { id } = req.user;
      await User.findOneAndUpdate({ _id: id }, { logged: false });
      return userSignedOutResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  readUserData: async (req, res, next) => {
    let { id } = req.params;
    try {
      let userid = await User.findById(id);
      if (userid) {
        res.status(200).json({
          response: userid,
          success: true,
          message: "user data find",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "user not found",
        });
      }
    } catch (err) {
      next(err);
    }
  },
  updateUserData: async (req, res, next) => {
    let { id } = req.params;
    try {
      let user = await User.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      user
        ? res.status(200).json({
            response: user,
            success: true,
            message: "Your profile was update succesfully.",
          })
        : res.status(404).json({
            success: false,
            message: "Profile not found.",
          });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = controller;