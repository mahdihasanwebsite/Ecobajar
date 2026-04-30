import React from 'react'
import Container from './Layuots/Container'
import logo from '../assets/Logo.webp'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <Container>
        <div className='flex justify-between py-[27px]'>
        <div> 
        <img src={logo} alt="" />    
         </div>
        <div>
        <input  className='py-[12px] pl-[44px] w-[498px] border border-[#808080] placeholder:text-[#808080] placeholder:font-poppins placeholder:text-sm'  type="text" placeholder='Search'  />
        <IoSearchOutline className='relative top-[-31px] left-[18px]'/>

        </div>
        <div>g</div>
        </div>
    </Container>
  )
}

export default SearchBar