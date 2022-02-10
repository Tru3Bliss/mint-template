import React from "react"

export const SocialItem = (props) => {
  const { className, item } = props
  return (
    <div className={`${className}`}>
      <a href={item.link}>
        <img src={item.icon} alt={item.alt} />
      </a>
    </div>
  )
}