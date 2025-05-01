import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo atau Judul */}
        <div className="text-xl font-semibold text-gray-800">MyApp</div>

        {/* Menu */}
        <nav className="hidden lg:flex space-x-6">
          {["Dummy1", "Dummy2", "Dummy3", "Dummy4"].map((item) => (
            <button
              key={item}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
