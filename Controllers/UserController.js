import UserModel from "../Models/UserModel.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password });
    if (user) {
      res.status(200).json({
        user: user,
        message: "Đăng nhập thành công",
      });
    } else {
      res.status(404).json("người dùng không tồn tại");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const register = async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const user = await newUser.save();
    res.status(201).json({
      user: user,
      message: "Đăng ký thành công",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const UserController = {
  login,
  register,
  getAllUser,
};
