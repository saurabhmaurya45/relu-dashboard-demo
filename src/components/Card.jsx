import React from 'react'
import heart from '../assets/heart.svg'
import heart2 from '../assets/heart 2.svg'
import sharelogo from '../assets/share.svg'
import commentlogo from '../assets/comment.svg'
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({userLogo, name, userId,description, image,like,comment,share}) => {
  return (
    <div className='card w-[620px] rounded-[10px] h-[600px] bg-white pt-[1px]  '>
      <div className='main-content px-[30px]'>
        <div className='header my-[30px] flex items-center relative gap-3'>
            <img src={userLogo} className='w-[48px] h-[48px] rounded-[10px]'/>
            <div className='content '>
              <h3 className='text-[#101010] text-xl font-semibold'>{name}</h3>
              <p className='text-[#8D8D8D] text-sm' >{userId}</p>
            </div>
            <div className='absolute right-1 font-lg'>
              <BsThreeDotsVertical/>
            </div>
        </div>
        <p className='text-sm my-[30px]'>{description}<span className='text-sm text-[#FF5E8A]'>Read More</span> </p>
        <div className='image w-[560px] h-[306px] relative'>
          <img src={heart} className='absolute top-5 right-5 w-[22px] h-[22px] ' />
          <img src={image} className='w-[560px] h-[306px] rounded-[10px]' />
        </div>
      </div>
      <hr className='border-[2px #F3F3F3] bg-[#F3F3F3] text[#F3F3F3] mt-[30px] w-full' />
      <div className='socials flex items-center w-full p-[30px]  gap-5 '>
        <div className='likes text-[#101010] flex items-center gap-3'>
          <img src={heart2} className=' w-[24px] h-[22px]' />
          <p className='text-[20px] font-medium'>{like}k</p>
        </div>
        <div className='comment text-[#101010] flex items-center gap-3'>
          <img src={commentlogo} className=' w-[24px] h-[22px]' />
          <p className='text-[20px] font-medium'>{comment}k</p>
        </div>
        <div className='share text-[#101010] flex items-center gap-3'>
          <img src={sharelogo} className=' w-[24px] h-[22px]' />
          <p className='text-[20px] font-medium'>{share}k</p>
        </div>
      </div>
    </div>
  )
}

export default Card