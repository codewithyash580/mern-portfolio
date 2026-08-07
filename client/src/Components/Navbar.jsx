function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white flex justify-between items-center px-6 py-4 z-50">
      <h1 className="text-2xl font-bold">Yash</h1>

      <div className="space-x-6">
        <a href="#home" className="hover:text-cyan-400">
          Home
        </a>

        <a href="#projects" className="hover:text-cyan-400">
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;