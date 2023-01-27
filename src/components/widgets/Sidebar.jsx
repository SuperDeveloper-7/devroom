import React from "react";
import Text from "../elements/Text";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="text-white">
      <ul>
        <Text className="text-lg pl-4 mt-6 font-bold mb-12">
          DevRoom <span className="text-tertiary">App 1.0</span>
        </Text>

        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
              : "mr-2 text-sm py-3 "
          }
        >
          <li className="p-4 ">Home</li>
        </NavLink>

        <NavLink
          to="/roomOne"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
              : "mr-2 text-sm py-3 pl-4"
          }
        >
          <li className="p-4">DevRoom - 1</li>
        </NavLink>

        <NavLink
          to="/roomTwo"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
              : "mr-2 text-sm py-3 pl-4"
          }
        >
          <li className="p-4">DevRoom - 2</li>
        </NavLink>

        <NavLink
          to="/roomThree"
          className={({ isActive }) =>
            isActive
              ? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
              : "mr-2 py-3 text-sm pl-4"
          }
        >
          <li className="p-4">DevRoom - 3</li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Sidebar;
