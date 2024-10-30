const NavBar = ({ setToken }) => {
  return (
    <div className="navbar w-full border-b-2 border-gray-800 px-5 sm:px-12 py-4 text-lg flex items-center justify-between">
      <p>Admin panel</p>
      <button
        onClick={() => setToken("")}
        className="bg-green-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default NavBar;
