import React from 'react'
import Card from './Card'
import SidebarLeft from './SidebarLeft'
import image1 from '../assets/pexels-humphrey-muleba-2045248.png'
import logo1 from '../assets/pexels-ali-pazani-2613260.png'
import image2 from '../assets/pexels-tobias-bjørkli-2236382.png'
import logo2 from '../assets/pexels-imad-clicks-9810659.png'
import SidebarRight from './SidebarRight'

const mainData = [
    {
        userLogo: logo1,
        name: "Lara Leones",
        userId: "@thewallart",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image: image1,
        like: 9.8,
        comment: 7.6,
        share: 5.2
    },
    {
        userLogo: logo2,
        name: "Thomas J.",
        userId: "@thecustomcreater",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        image: image2,
        like: 9.4,
        comment: 7.2,
        share: 5.2
    }
]

const Main = () => {
    return (
        <section className='font-gilroy flex pl-[32px] mt-[110px] h-full relative'>
            <div className='sidebar-left w-[260px] h-[80vh] bg-white mr-[30px] rounded-[10px] sticky top-[110px]'>
                <SidebarLeft />
                <div className='w-full text-[#8D8D8D] text-[10px] flex justify-between absolute -bottom-6'>
                    <p>2022 © logo name</p>
                    <p>Developed by Saurabh Maurya</p>
                </div>
            </div>
            <div className='main-section mr-[30px] relative'>
                {
                    mainData?.map((item) => <div className='mb-[30px]'><Card {...item} /></div>)
                }
            </div>
            <div className='sidebar-right w-[260px] h-[80vh] sticky rounded-[10px] top-[110px]'>
                <SidebarRight/>
                <div className='w-full text-[#8D8D8D] text-[10px] flex justify-between absolute -bottom-6'>
                    <p>Privacy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Notice</p>
                </div>
            </div>
        </section>
    )
}

export default Main