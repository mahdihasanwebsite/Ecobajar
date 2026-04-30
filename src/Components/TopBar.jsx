import React, { useRef, useState } from 'react'
import Container from './Layuots/Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import useOutsideClick from '../Hooks/OutsiteClick';

const TopBar = () => {

  let [open, setOpen] = useState(false)
  let [opentow, setOpentow] = useState(false)
  const dropDown = useRef(null)
  const dropDowntow = useRef(null)

  useOutsideClick(dropDown, () => setOpen(false), open)
  useOutsideClick(dropDowntow, () => setOpentow(false), opentow)

  return (

    <div className='border-b border-solid border-b-gry-50 items-center font-poppins text-[#666666]  text-sm py-[12px]'>
      <Container>
        <div className='flex justify-between'>
          <div className='flex items-center  gap-[6px]'> <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
          <div className='flex gap-[20px] '>


            {/* //! DropDown */}
            {/* <div onClick={() => setOpen(!open)} className='flex items-center' ref={dropDown}>
              Eng <FaAngleDown />
              {
                open &&
                <div className='absolute top-[35px] bg-[#E6E6E6] p-[7px]'>
                  <ul>
                    <li>BG</li>
                    <li>CH</li>
                    <li>IN</li>
                    <li>IN</li>
                  </ul>
                </div>
              }
            </div> */}

              {/* Sidebar */}
            <div onClick={() => setOpen(!open)} className='flex items-center' ref={dropDown}>
              Eng <FaAngleDown />
              {
                open &&
                <div className='fixed inset-0 flex z-50'>
                 <div className='"w-[200px] h-full bg-white p-4"'>
                   <ul>
                    <li>BG</li>
                    <li>CH</li>
                    <li>IN</li>
                    <li>IN</li>
                  </ul>
                 </div>
                </div>
              }
            </div>



           <div onClick={() => setOpentow(!opentow)} className='flex items-center' ref={dropDowntow}>
              USD <FaAngleDown />
              {
                opentow &&
                <div className='absolute top-[35px] bg-[#E6E6E6] p-[7px]'>
                  <ul>
                    <li>BG</li>
                    <li>CH</li>
                    <li>IN</li>
                    <li>IN</li>
                  </ul>
                </div>
              }
            </div>
            <div className='flex items-center relative after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:top-[2px] after:left-[-12px] after:content-[""] after:absolute' >Sin In  / Sign Up </div>
          </div>
        </div>
      </Container>

    </div>


  )
}

export default TopBar