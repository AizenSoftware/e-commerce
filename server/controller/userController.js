import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { ...req.body, password: hashedPassword },
    });
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({
      message: "Kullanıcı başarıyla oluşturuldu...",
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: `Bir hata meydana geldi :${error.message}`,
    });
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    users,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "Login successful...",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log(error);
  }
};
const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful..." });
};
export { getUsers, createUser, loginUser, logoutUser };
