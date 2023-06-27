import { NavItem } from '../../atom/NavItem';
import { NavDropdown } from '../NavDropdown';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RxCrossCircled } from 'react-icons/rx';

import { AiOutlineSearch, AiTwotoneBell } from 'react-icons/ai';
import { useState } from 'react';

export const Navbar = () => {
  const [data, setData] = useState({
    search: '',
  });
  const handleChange = (e) => {
    setData({ search: e.target.value });
  };
  return (
    <div className="grid grid-cols-2 bg-black text-white min-h-14 px-5 py-2">
      <div className="flex flex-row gap-4 items-center">
        <img
          src="https://thumbor.prod.vidiocdn.com/oPo79YwhPffo4lfkK3_2z2a9j3E=/filters:quality(70)/vidio-media-production/uploads/image/source/83/5a1711.png"
          alt="logo-vidio"
          className="h-[40px]"
        />
        <ul className="flex flex-row gap-5">
          <NavItem label={'Live'} isLive />
          <NavItem label={'Home'} />
          <NavItem label={'Sports'} />
          <NavItem label={'Series'} />
          <NavItem label={'Movies'} />
          <NavItem label={'TV Show'} />
          <NavDropdown />
        </ul>
      </div>
      <div className="flex gap-5 items-center  justify-end">
        <div className="relative">
          <input
            className="text-white placeholder:text-sm rounded bg-white/20 w-[330px] py-1 px-3 outline-none"
            type="text"
            name="search"
            value={data.search}
            onChange={handleChange}
            placeholder="Cari di Vidio"
            id="search"
          />
          <div className="absolute right-10 top-2">
            {data.search.length > 0 ? (
              <RxCrossCircled
                className="cursor-pointer"
                onClick={() => {
                  setData({ search: '' });
                }}
              />
            ) : null}
          </div>
          <button className="absolute right-3 top-2">
            <AiOutlineSearch />
          </button>
        </div>
        <div>
          <AiTwotoneBell size={23} />
        </div>
        <div>
          <button className="bg-red-500  text-white px-4 py-2 rounded text-xs font-bold">
            Langganan
          </button>
        </div>
        <div>
          <button className="bg-white text-black px-4 py-2 rounded text-xs font-bold">
            Masuk
          </button>
        </div>
        <div>
          <FiMoreHorizontal size={30} />
        </div>
      </div>
    </div>
  );
};
