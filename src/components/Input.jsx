import React from 'react'
import { useId, useState } from 'react'

const Input = ({
  label,
  type = "text",
  className = "",
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);

  const id = useId();

  return (
    <div className='mt-6'>
      <label className={`text-[#5A3CD7] bg-[#F8F8F8] text-sm font-semibold absolute transition-all duration-150 translate-x-3 cursor-text ${focused ? "-translate-y-2 text-xs" : "translate-y-1/2"}`} htmlFor={id}>
      {label}
      <span className='text-red-500'>*</span>
      </label>

      {/* input field */}
      <input 
      className='h-12 w-[90%] bg-transparent border border-gray-300 outline-none rounded-lg px-2'
      type={type}
      id={id}
      ref={ref}
      onFocus={() => setFocused(true)}
      {...props}
      />
    </div>
  )
}

export default React.forwardRef(Input)




















// import React from 'react'
// import { useId } from 'react'

// const Input = React.forwardRef(({
// 	label,
// 	type = "text",
// 	className = "",
// 	...props
// }, ref) => {
// 	const id = useId()
// 	return (
// 		<div className='w-full'>
// 			{label && (
// 				<label className='inline-block mb-1 pl-1'
// 				htmlFor={id}
// 				> {label} </label>
// 			)}
// 			<input type={type}
// 			id={id}
// 			className={`w-full px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-100 duration-150 border border-gray-300 ${className}`}
// 			{...props}
// 			ref={ref}
// 			/>
// 		</div>
// 	)
// })

// export default Input