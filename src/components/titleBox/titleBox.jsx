import React from 'react'

function TitleBox({title,className}) {
  return (
    <div className="main">
        <p className={`${className}  bg-[#0c192d] f py-3 text-center rounded-3xl text-white  w-40 font-unbounded `}>
        {title}
      </p>
    </div>
  )
}

export default TitleBox