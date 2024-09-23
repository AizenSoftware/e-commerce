import MainLayout from "./components/MainLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartModal from "./components/CartModal";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <MainLayout>
        <CartModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
