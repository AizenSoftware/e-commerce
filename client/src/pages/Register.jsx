import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../rtk-query/userSlice/userSlice";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [register, { isLoading, isError, isSuccess }] = useRegisterMutation();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const newUser = await register({ name, email, password });
      console.log("User is created...", newUser);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto flex justify-center items-start h-screen mt-12 ">
      <form
        onSubmit={registerHandler}
        className="flex flex-col space-y-4 justify-center items-center p-4 bg-[#fff] shadow-xl shadow-black/35 w-1/2 rounded-md h-auto "
      >
        <label className="text-xl">Name</label>
        <input
          className="p-2 rounded-md outline-none bg-transparent border-b border-indigo-500"
          placeholder="Adınızı giriniz..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-xl">E-mail</label>
        <input
          className="p-2 rounded-md outline-none bg-transparent border-b border-indigo-500"
          type="email"
          placeholder="E-mail adresinizi giriniz..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-xl mt-4">Password</label>
        <input
          className="p-2 rounded-md outline-none bg-transparent border-b border-indigo-500"
          type="password"
          placeholder="Şifrenizi giriniz..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link
          to="/login"
          className="mt-2 text-sm text-gray-500 hover:text-black duration-100"
        >
          Hesabınız varsa buradan giriş yapabilirsiniz...
        </Link>
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded-md text-white mt-6"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};

export default Register;
