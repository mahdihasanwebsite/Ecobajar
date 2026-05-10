import React from 'react'
import Container from './Layuots/Container'
import FooterLogo from '../assets/Footer.webp'
import CloseFooterLogo from '../assets/CloseFooterLogo.webp'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-black'>
        <Container>
        <div className='text-white flex justify-between py-[60px]'>

        <div>
            <img src={FooterLogo} alt="Footer Logo" />
            <p className='max-w-[300px] my-[16px] font-poppins font-medium text-[14px] text-[#808080]'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <div>
                <Link to='tel:219 555-0114' className='mr-[16px] font-poppins font-medium text-[15px] py-[8px] border-b border-primary'>(219) 555-0114</Link>
                <span className='text-[#808080]'>or</span>
                 <Link to='mailto:Proxy@gmail.com' className='ml-[16px] py-[8px]  border-b border-primary font-poppins font-medium text-[15px]'>Proxy@gmail.com</Link>
            </div>
        </div>
        <div>
            <h5 className='font-poppins font-medium text-[16px] pb-[20px] '>My Account</h5>

            <ul className='font-poppins font-normal text-[14px] flex flex-col gap-[12px] text-[#999999] '>
                <li className='hover:text-white'> My Account</li>
                <li className='hover:text-white'>Order History</li>
                <li className='hover:text-white'>Shoping Cart</li>
                <li className='hover:text-white'> Wishlist</li>
            </ul>
            
        </div>

        <div>
            <h5 className='font-poppins font-medium text-[16px] pb-[20px] '>Helps</h5>
           
            <ul className='font-poppins font-normal text-[14px] flex flex-col gap-[12px] text-[#999999] '>

                <li className='hover:text-white'> Contact </li>
                <li className='hover:text-white'> Faqs </li>
                <li className='hover:text-white'>Terms & Condition</li>
                <li className='hover:text-white'> Privacy Policy </li>
            </ul>
            
        </div>

        <div>
            <h5 className='font-poppins font-medium text-[16px] pb-[20px] '>Proxy</h5>
           
            <ul className='font-poppins font-normal text-[14px] flex flex-col gap-[12px] text-[#999999]'>

                <li className='hover:text-white'>About</li>
                <li className='hover:text-white'>Shop</li>
                <li className='hover:text-white'> Product</li>
                <li className='hover:text-white'>Track Order</li>

            </ul>
            
        </div>

        <div>
            <h5 className='font-poppins font-medium text-[16px] pb-[20px] '>Categories</h5>
           
             <ul className='font-poppins font-normal text-[14px] flex flex-col gap-[12px] text-[#999999] '>

                <li className='hover:text-white'>Fruit & Vegetables</li>
                <li className='hover:text-white'>Meat & Fish</li>
                <li className='hover:text-white'> Bread & Bakery</li>
                <li className='hover:text-white'> Beauty & Health</li>

            </ul>
            
        </div>
       

        </div>

        <div className='text-white flex justify-between items-center text-white border-t border-[#808080] py-[30px]'>
            <div className='font-poppins font-normal text-[14px] text-[#808080]'> Ecobazar eCommerce © 2021. All Rights Reserved</div>

           <div> <img src={CloseFooterLogo} alt="CloseFooterLogo" /></div>
        </div>


        </Container>
    </div>
  )
}

export default Footer