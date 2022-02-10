import React from "react";
import Accordion from "../accordion";

const FaqItem = (props) => {
  const {className, item} = props

  return(
    <Accordion summary={
      <div className="relative flex gap-1 sm:gap-8 sm:items-center flex-col sm:flex-row cursor-pointer">
        <div className="bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 w-28 md:w-40 py-2 text-center text-white text-lg md:text-xl font-bold">Question</div>
        <p className="px-8 sm:px-0 py-2 text-lg tiny:text-xl md:text-2xl capitalize font-bold">{item.question}</p>
      </div>
    } className="" subClassname="border">
      <div className="relative flex border gap-8 flex-col w-full mt-8 pb-6">
        <div className="bg-gradient-to-r from-app-blue-100 via-app-pink-100 to-app-yellow-100 w-28 md:w-40 py-2 text-center text-white text-lg md:text-xl font-bold">Answer</div>
        <p className="text-lg tiny:text-xl md:text-2xl capitalize font-bold px-8">{item.answer}</p>
      </div>
    </Accordion>
  )
}

export default FaqItem