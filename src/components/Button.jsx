import React from 'react'

const Button = ({
	children,
	type = "button",
	className = "",
	...props
}) => {
  return (
	<button 
	type={type}
	className={`py-3 px-4 rounded-lg cursor-pointer ${className}`}
	{...props}
	>{children}</button>
  )
}

export default Button