import React, { useState } from "react";
import Layout from "../../layout/layout";
import DammyImage from '../../assets/images/dummy_img.png'
import IcNext from '../../assets/icons/ic_next.png'
import IcNextWhite from '../../assets/icons/ic_next_white.png'
import { blackSocialLinks, socialLinks } from "../../layout/social";
import { SocialItem } from "../../components/item/social-item";
import { faqData } from "../../util/data";
import FaqItem from "../../components/item/faq-item";
import "./home.scss"
const HomePage = (props) => {
  const [contactName, setName] = useState()
  const [contactEmail, setEmail] = useState()

  return (
    <Layout>
      <div className="flex flex-col home-container">

        <div id="whitelist" className="flex md:flex-row-reverse flex-col uppercase">
          <div className="relative w-full">
            <div className="w-32 h-32 tiny:w-44 tiny:h-44 sm:w-60 sm:h-60 xl:w-80 xl:h-80 absolute right-0 top-0">
              <div className="bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 w-full h-full"></div>
            </div>
            <div className=" justify-center items-center py-12 md:py-36 transform rotate-0 px-8 flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 text-xl justify-center items-center">
                <div className="text-center bg-white w-3/4 tiny:w-2/3 sm:w-1/2 lg:w-1/3 flex items-center justify-center z-10 p-12 xl:p-16 2xl:p-24 flex-col gap-4 shadow-2xl" >
                  <img src={DammyImage} alt="collection" className="" />
                  <p>artist</p>
                </div>
                <div className="text-center bg-white w-3/4 tiny:w-2/3 sm:w-1/2 lg:w-1/3 flex items-center justify-center z-10 p-12 xl:p-16 2xl:p-24 flex-col gap-4 shadow-2xl">
                  <img src={DammyImage} alt="collection" className="" />
                  <p>artist</p>
                </div>
              </div>
              <button className="uppercase text-xl flex px-8 py-4 bg-app-black-100 text-white  items-center gap-4">Join white list now
                <img className="w-6" src={IcNext} alt="next" /></button>
            </div>
          </div>
          <div className="flex flex-col text-white bg-app-black-100 px-4 sm:px-8 gap-2 justify-center py-20">
            <p className="text-3xl">ARTIST NAME & NFT NEWSPAPER COLLAB</p>
            <p className="text-2xl">EXCLUSIVE NFTs</p>
            <div className="h-3 w-full bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100"></div>
            <ul>
              <li>- Limited edition (Supply: 10 000 NFTs)</li>
              <li>- Each one is unique (including rarity %)</li>
            </ul>
          </div>
        </div>

        <div id="date" className="bg-app-black-100 py-24 px-4 xl:px-12 relative">
          <div className="text-white text-4xl tiny:text-6xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold  flex flex-col gap-4">
            <p className="uppercase">don't miss</p>
            <p className="uppercase">the opening</p>
            <p className="uppercase">date and time</p>
          </div>
          <div className="flex flex-col items-start md:absolute right-0 top-0 md:p-12 md:w-1/2 xl:w-1/3 gap-4 xl:gap-16 mt-8">
            <div className="flex flex-col text-white text-lg xl:text-xl gap-2 uppercase">
              <p>Official Pre-Sale (reserved for people in the White List): March 15, 2022 - 8PM (UTC+1)</p>
              <p>Price / NFT: 150 MATIC</p>
              <div className="bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 w-full h-3"></div>
              <p>Official Public Sale: March 16, 2022 - 8PM (UTC+1)</p>
              <p>Price / NFT: 170 MATIC</p>
            </div>
            <button className="uppercase text-xl flex px-8 py-4 text-white bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 items-center gap-4">Join white list now
              <img className="w-6" src={IcNextWhite} alt="next" />
            </button>
          </div>
        </div>

        <div className=" flex  font-bold">
          <div className="hidden md:flex bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 pt-12 pl-32 pr-2">
            <p className="text-white text-8xl text-right uppercase">join</p>
          </div>
          <div className="flex flex-col py-12 uppercase px-4 md:px-2">
            <div className="text-6xl tiny:text-8xl"><p className="join md:hidden text-6xl tiny:text-8xl flex">join</p>white list</div>
            <p className="mt-2 bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 text-white">(Limited number of White Listed people: last opportunities, join today)</p>
            <p>How to be in the White List ?</p>
            <ul className="mt-8">
              <li>1. Enter your email here: (box to enter email)</li>
              <li>2. You will receive an email from NFT Newspaper: you send your wallet address by replying to the</li>
            </ul>
            <p>email and you will have access to the Minting 24 hours before the public sale</p>
          </div>
        </div>

        <div id="about" className="px-4 sm:px-0 justify-center items-center sm:pl-12 py-20 bg-app-black-100 flex gap-8 sm:flex-row flex-col">
          <div className="text-center bg-white w-3/4 tiny:w-2/3 sm:w-1/2 lg:w-80 flex items-center justify-center z-10 p-12 xl:p-16 2xl:p-24 flex-col gap-4 shadow-2xl" >
            <img src={DammyImage} alt="collection" className="" />
            <p>artist</p>
          </div>
          <div className="w-full text-white flex flex-col gap-4">
            <p className="w-full text-center sm:text-left bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 py-6 font-bold text-2xl sm:text-4xl px-4">ARTIST NAME</p>
            <p className="text-2xl">ABOUT</p>
          </div>
        </div>

        <div id="follow" className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-app-black-100 py-20 flex justify-center">
            <div className="flex flex-col gap-8 w-2/3 md:w-1/2">
              <div className="flex gap-8 items-center">
                <p className="uppercase text-white">name</p>
                <input value={contactName || ""} onChange={e => setName(e.target.value)} className="outline-none p-2 w-full" />
              </div>
              <div className="flex gap-8 items-center">
                <p className="uppercase text-white">email</p>
                <input value={contactEmail || ""} onChange={e => setEmail(e.target.value)} className="outline-none p-2 w-full" />
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-2 text-white bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 uppercase">send</button>
              </div>

            </div>
          </div>

          <div className="w-full md:w-1/2 gap-8 flex flex-col md:pr-20 items-center justify-center py-12">
            <p className="text-5xl uppercase font-bold">follow us</p>
            <div className="flex gap-6 md:gap-8">
              {blackSocialLinks.map((link, idx) => (
                <SocialItem item={link} key={idx} className="w-20" />
              ))}
            </div>
          </div>
        </div>

        <div id="faq" className="flex items-center justify-center pb-12 pt-8">
          <div className="w-11/12">
            <p className="text-right uppercase text-4xl font-bold">faq</p>
            <div className="flex flex-col gap-2 mt-8">
              {faqData.map((faq, idx) => (
                <FaqItem item={faq} key={idx} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default HomePage