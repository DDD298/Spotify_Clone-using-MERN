import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddSong from "./pages/AddSong";
import AddAlbums from "./pages/AddAlbums";
import ListSong from "./pages/ListSong";
import ListAlbum from "./pages/ListAlbum";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/Navbar";
import { useEffect, useState } from "react";
import Login from "./components/Login";

export const url = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Sidebar />
          <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FF7]">
            <NavBar setToken={setToken} />
            <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
              <Routes>
                <Route path="/add-song" element={<AddSong token={token} />} />
                <Route
                  path="/add-album"
                  element={<AddAlbums token={token} />}
                />
                <Route path="/list-song" element={<ListSong token={token} />} />
                <Route
                  path="/list-album"
                  element={<ListAlbum token={token} />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
