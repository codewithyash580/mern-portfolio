const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Name / Branding */}
        <h2 className="text-xl font-semibold">Yash Chauhan</h2>
        <p className="text-gray-400">Full Stack Developer</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-blue-400">GitHub</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Yash Chauhan. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;