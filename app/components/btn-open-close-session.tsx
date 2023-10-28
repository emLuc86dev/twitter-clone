import React from 'react'

interface Props {
  children?: React.ReactNode
  title: string
  onClick: () => void
}
const BtnOpenCloseSession = ({ title, onClick, children }: Props) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-[#24292F] border border-[rgba(255,255,255,0)] hover:border-[rgba(255,255,255,0.7)] hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-transparent mr-2 mb-2">
        {children}
        {title}
    </button>
  )
}

export default BtnOpenCloseSession
