import React from 'react'
import SidebarList from './SidebarList'
import home from '../assets/home.svg'
import notifications from '../assets/notification.svg'
import profile from '../assets/profile.svg'
import favourite from '../assets/favorite.svg'
import message from '../assets/message.svg'
import settings from '../assets/setting.svg'
import heart from '../assets/heart-4.svg'
import logout from '../assets/logout.svg'

const sidebarData = [
    {
        icon: home,
        name: "Home",
        status: true
    },
    {
        icon: notifications,
        name: "Notifications",
        status: false
    },
    {
        icon: heart,
        name: "Shop",
        status: false
    },
    {
        icon: message,
        name: "Conversation",
        status: false
    },
    {
        icon: message,
        name: "Wallet",
        status: false
    },
    {
        icon: favourite,
        name: "Subscription",
        status: false
    },
    {
        icon: profile,
        name: "My Profile",
        status: false
    },
    {
        icon: settings,
        name: "Settings",
        status: false
    },

]

const SidebarLeft = () => {
    return (
        <div className='sidebar-container'>
            <ul>
                {
                    sidebarData?.map((item) => <SidebarList item={item} />)
                }
            </ul>
            <div className={'w-full  h-[32px] flex items-center gap-4 my-[30px] text-sm pl-[32px]  text-[#88C2BB] absolute bottom-0'}>
                <img src={logout} className='w-5 h-5' />
                <p>Log out</p>
            </div>

        </div>
    )
}

export default SidebarLeft