const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <h1>My Portfolio</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;