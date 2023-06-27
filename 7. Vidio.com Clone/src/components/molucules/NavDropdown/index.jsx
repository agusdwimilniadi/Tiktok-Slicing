import { useState } from 'react';
import { NAV_ITEM_DROPDOWN_NAVBAR } from '../../../utils/constant';
import { NavItemDropdown } from '../../atom/NavItemDropdown';

export const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="text-sm font-medium  items-center gap-1">
      <button
        // onClick={() => {
        //   setIsOpen(!isOpen);
        // }}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        type="button"
        className=""
      >
        Lainnya
      </button>
      <div
        className={`fixed ${
          isOpen ? null : 'hidden'
        }  top-[68px] left-[41vw] rotate-45  h-5 shadow w-5 bg-white`}
      ></div>
      <div
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        className={`fixed ${
          isOpen ? null : 'hidden'
        }  top-[75px] left-[40vw] shadow rounded-2xl bg-white text-black p-2`}
      >
        {NAV_ITEM_DROPDOWN_NAVBAR.map((item, index) => {
          return <NavItemDropdown key={index} label={item.label} />;
        })}
      </div>
    </li>
  );
};
