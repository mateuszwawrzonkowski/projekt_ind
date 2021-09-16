import bcrypt from "bcrypt";
import models from "../db/models";
import jwt from "jsonwebtoken";

const SECRET = "secret123123123";

const generateToken = (user) =>
  jwt.sign({ userId: user.id }, SECRET, { expiresIn: "30d" });

export const register = async (
  firstName,
  lastName,
  email,
  password,
  gender,
  type
) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return models.User.create({
    firstName,
    lastName,
    email,
    passwordHash,
    gender,
    type,
  });
};

export const login = async (email, password) => {
  const user = await models.User.findOne({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    throw new Error("Wrong password");
  }

  return { token: generateToken(user), user };
};

export const getUserIdMiddleware = async (req) => {
  const token = req.headers.authorization;

  try {
    if (token) {
      const { userId } = await jwt.verify(token, SECRET);
      req.userId = userId;
    }
  } catch (err) {
    console.error(err);
  }
  req.next();
};
