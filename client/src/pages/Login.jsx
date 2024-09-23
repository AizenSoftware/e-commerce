import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../rtk-query/userSlice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError, error }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login({ email, password }).unwrap();
      console.log("giriş başarılı", user);
      localStorage.setItem("token", user.token);
      navigate("/");
    } catch (err) {
      console.error("Login Failed...", err);
      toast(error.data.error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-start h-screen ">
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center p-4 bg-gray-50 shadow-xl shadow-black/35 w-1/2 rounded-md h-1/2 mt-12"
      >
        <label className="text-xl">E-mail</label>
        <input
          className="p-2 rounded-md outline-none bg-transparent border-b border-indigo-500"
          type="email"
          placeholder="E-mail adresinizi giriniz..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-xl mt-4">Şifre</label>
        <input
          className="p-2 rounded-md outline-none bg-transparent border-b border-indigo-500"
          type="password"
          placeholder="Şifrenizi giriniz..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          to="/register"
          className="mt-2 text-sm text-gray-500 hover:text-black duration-100"
        >
          Hesabınız yok mu? Kayıt olmak için tıklayınız...
        </Link>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 p-2 rounded-md text-white mt-6 w-1/3"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {isError && (
          <>
            <ToastContainer />
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
