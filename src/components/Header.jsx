import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../utils/navigation";

const Header = () => {
  return (
    <header className="h-16 bg-black bg-opacity-50 z-40 w-full fixed top-0">
      <div className="container mx-auto px-4 flex items-center h-full">
        <Link to={"/"}>
          <img width={120} src={logo} alt="logo" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5 ">
          {navigation.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  key={item.label + "header" + index}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2">
            <input
              type="text"
              className="bg-transparent outline-none px-4 py-1 border-none hidden lg:block"
              placeholder="search here..."
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>
          <div className="h-8 w-8 rounded-full cursor-pointer overflow-hidden active:scale-75 transition-all">
            <img src={userIcon} alt={userIcon} className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
