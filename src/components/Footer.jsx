import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-3">
      <div className="flex items-center justify-center gap-4">
        <Link className="hover:text-white" to="/">
          About
        </Link>
        <Link className="hover:text-white" to="/">
          Contact
        </Link>
      </div>
      <p className="text-sm">Created By Dynamic Coding with Omkar</p>
    </footer>
  );
};

export default Footer;
