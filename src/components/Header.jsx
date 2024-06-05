import React from 'react'
import search from '../assets/Component 32.svg'
import filter from '../assets/Component 39 (2).svg'
const Header = () => {
    return (
        <header className=' h-20  flex items-center pl-[32px] font-gilroy fixed top-0 z-10 '>
            <div className='logo w-[260px] h-20 bg-white flex items-center pl-[30px] mr-[30px] rounded-[10px]'>
                <h1 className='font-mangolian text-[#101010] text-[32px]'>LOGO</h1>
            </div>
            <div className='logo w-[620px] h-20 bg-white flex items-center mr-[30px] rounded-[10px] relative px-[30px]'>
                <img className='w-5 h-5 absolute left-[30px] ' src={search} />
                <input className='text-[#9A9A9E] text-[12px] w-[25rem] h-10 pl-6 outline-none' placeholder='Search here...' />
                <div className='filter flex items-center absolute right-[30px]'>
                    <img className='w-[26px] h-[26px] px-1' src={filter} />
                    <p className='text-[14px]'>Filter</p>
                </div>
            </div>
            <div className='logo w-[260px] h-20 bg-[#88C2BB] flex items-center justify-center rounded-[10px]'>
                <h1 className=' text-white '>Become a Seller</h1>
            </div>
        </header>
    )
}

export default Header