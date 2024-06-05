import React from 'react'
import image1 from '../assets/pexels-ekaterina-12203460.png'
import image2 from '../assets/pexels-genaro-servin-763210.png'
import image3 from '../assets/pexels-pixabay-164455.png'
import image4 from '../assets/pexels-steve-johnson-1269968.png'
import image5 from '../assets/pexels-fiona-art-5022849.png'
import logo1 from '../assets/pexels-anastasia-shuraeva-4406721.png'
import logo2 from '../assets/pexels-andrea-piacquadio-3771118.png'
import logo3 from '../assets/pexels-antoni-shkraba-4442102.png'
import logo4 from '../assets/pexels-antoni-shkraba-4442005.png'
import SuggestionCards from './SuggestionCards'



const sidebarCardData = [
    {
        userLogo:logo1,
        userId:"@thewildwithyou",
        name:"Thomas Edward",
        image:image1
    },
    {
        userLogo:logo2,
        userId:"@thewildwithyou",
        name:"Chris Doe",
        image:image2
    },
    {
        userLogo:logo3,
        userId:"@thewildwithyou",
        name:"Jessica Williams",
        image:image3
    },
    {
        userLogo:logo4,
        userId:"@thewildwithyou",
        name:"Emilie Jones",
        image:image4
    },
    {
        userLogo:logo1,
        userId:"@thewildwithyou",
        name:"Thomas Edward",
        image:image5
    }
]

const SidebarRight = () => {
  return (
    <div>
        <div className='flex gap-3'>
            <p className='text-[16px] font-medium text-[#101010]'>Artists</p>
            <p className='text-[16px] font-medium text-[#8D8D8D]'>Photographers</p>
        </div>
        <div className='suggestions-section w-full h-[70vh] overflow-y-scroll  mt-[20px]'>
            {
                sidebarCardData?.map((item)=><SuggestionCards {...item}/>)
            }
        </div>
    </div>
  )
}

export default SidebarRight