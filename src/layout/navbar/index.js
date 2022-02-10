import { faBars, faWindowClose, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Logo from '../../assets/images/logo.png'
import MenuItem from "../../components/item/menu-item";
import { MenuList } from "./menu";


const NavBar = () => {

  const [expand, setExpand] = useState(false)
  return (
    <div className="px-4 sm:px-8 h-20 xl:h-36 bg-app-black-100 justify-between w-full flex items-center gap-8">
      <img src={Logo} alt="logo" className="w-20 xl:w-48 h-auto" />
      <ul className="text-white uppercase justify-around w-full px-4 xl:px-32 lg:flex hidden">
        {MenuList.map((menu, idx) => (
          <MenuItem key={idx} menu={menu} />
        ))}
      </ul>
      <button className="lg:hidden" onClick={() => setExpand(!expand)}>
        <FontAwesomeIcon icon={faBars} className="text-white" size="lg"/>
      </button>
      <div className={`flex flex-col transform tarnsform ${expand ? "tarnsform translate-x-0 " : "translate-x-full"} duration-200 absolute right-0 bg-app-black-100 bg-opacity-95 w-full tiny:max-w-30 z-50 top-0 `}>
        <div className="flex justify-end h-20 px-4 sm:px-8">
          <button>
            <FontAwesomeIcon icon={faXmark} className="text-white" onClick={()=>setExpand(false)} size="lg"/>
          </button>
        </div>
        <ul className="text-white uppercase w-full px-8 xl:px-32 relative h-screen gap-4 flex flex-col">
          {MenuList.map((menu, idx) => (
            <MenuItem key={idx} menu={menu} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar