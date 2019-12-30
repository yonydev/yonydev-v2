import React from "react"
import { Link } from "gatsby"
import { slide as Hamburger } from "react-burger-menu"
import { Menu, X } from "react-feather"
import { styles } from "./styles";

const SideMenu = () => {
  const innerWidth = window.innerWidth < 768 ? "100%" : 350
  return (
    <Hamburger
      styles={styles}
      width={innerWidth}
      customBurgerIcon={<Menu size={32} className="text-surface-500"/>}
      customCrossIcon={<X size={32} className="text-white" />}
      burgerButtonClassName={"text-secondary-500"}>
      <div className="text-white">
        <Link to="/" className="w-full mb-5 text-center hover:text-terciary-300" activeClassName="text-terciary-700">Home</Link>
        <Link to="#" className="w-full mb-5 text-center hover:text-terciary-300" activeClassName="text-terciary-700">About</Link>
        <Link to="#" className="w-full mb-5 text-center hover:text-terciary-300" activeClassName="text-terciary-700">Blog</Link>
        <Link to="#" className="w-full mb-5 text-center hover:text-terciary-300" activeClassName="text-terciary-700">Contact</Link>
      </div>
    </Hamburger>
  );
}

export default SideMenu;
