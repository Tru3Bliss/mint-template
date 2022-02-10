import React from "react";
import { Link } from "react-scroll";

const MenuItem = (props) => {
  const { menu } = props
  return (
    <li className="cursor-pointer text-2xl 2xl:text-3xl">
      <Link
        to={menu.path}
        spy={true}
        smooth={true}
        duration={500}
      >
        {menu.title}
      </Link></li>
  )
}

export default MenuItem