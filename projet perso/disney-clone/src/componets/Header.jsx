import React from 'react'
import logo from './../assets/image/logo.png'
import { HiHome,
    HiStar,
    HiPlayCircle,
    HiTv,
    HiMagnifyingGlass
 } from "react-icons/hi2";

import { HiPlus,HiDotsVertical } from "react-icons/hi";
import Headeritems from './HeaderItems';
import profil from './../assets/image/profil.jpg'

function Header() {
    const menu=[{
        name:"HOME",
        icon:HiHome
    },{
        name:"SEARCH",
        icon:HiMagnifyingGlass

    },{
        name:"WATCH LIST",
        icon:HiPlus
    },{
        name:"ORIGINALS",
        icon:HiStar

    },{
        name:"MOVIES",
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]
  return (
    <div className='flex items-center gap-8 justify-between md:justify-between'>
        <div className='flex'>

      <img src={logo} className='w-[80px] md:[115px] object-cover'/>
      {
          menu.map((items)=>(
              <Headeritems name={items.name} Icon={items.icon} />
            ))
        }
        </div>
        <img src={profil} alt="" srcset="" className='w-12 h-12 rounded-full '/>
    </div>
  )
}

export default Header
