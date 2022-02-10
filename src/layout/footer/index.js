import React from "react";
import { SocialItem } from "../../components/item/social-item";
import { socialLinks } from "../social";

const Footer = () => {
  return (
    <footer className="bg-app-black-100 h-36 items-center w-full flex justify-between px-12">
      <p className="text-white uppercase">ALL RIGHTS RESERVED 2022. nft-newspaper.com</p>
      <div className="flex gap-4">
        {socialLinks.map((link, idx) => (
          <SocialItem item={link} key={idx} className="w-12"/>
        ))}
      </div>
    </footer>
  )
}

export default Footer