import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../utils/navigation";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden bg-black bg-opacity-70 h-14 fixed bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((item, index) => {
          return (
            <NavLink
              key={item.label + "mobile_menu" + index}
              to={item.href}
              className={({ isActive }) =>
                `flex flex-col items-center h-full justify-center px-3 ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{item.icon}</div>
              <p className="text-sm">{item.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
