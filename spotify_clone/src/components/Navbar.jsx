import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";

const openNewTab = () => {
  window.open("http://127.0.0.1:5174/", "_blank");
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            <a href="/login">Login</a>
          </p>
          <button
            onClick={openNewTab}
            className="bg-green-800 text-white py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
          >
            Admin Login
          </button>
          <p className="bg-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            <a href="/login">Install App</a>
          </p>
        </div>
      </div>
      <div className="flex item-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Albums</p>
      </div>
    </>
  );
};

export default Navbar;
