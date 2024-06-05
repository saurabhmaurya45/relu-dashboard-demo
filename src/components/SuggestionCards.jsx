import React from 'react'
import background from '../assets/background.svg'
const SuggestionCards = ({ userLogo, userId, name, image }) => {
    return (
        <div className='w-[244px] h-[126px] rounded-[10px] relative mb-[30px]'>
            <img src={image} className='w-[244px] h-[126px] rounded-[10px]' />
            <div className={'description absolute bottom-0 pb-3 pl-3  left-0 text-white w-[232px]  flex items-center gap-3 '}>
                <img src={userLogo} className='w-[48px] h-[48px] rounded-[10px]' />
                <div className="absolute bottom-12 left-12 w-3 h-3 border-2 rounded-full bg-[#0EC297]"></div>
                <div className='content '>
                    <h3 className='font-medium'>{name}</h3>
                    <p className='text-xs' >{userId}</p>
                </div>
            </div>
        </div>
    )
}

export default SuggestionCards