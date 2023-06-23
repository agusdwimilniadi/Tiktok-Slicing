import { SidebarItem } from '../../Components/atoms/SidebarItem';
import { GoHome } from 'react-icons/go';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { CiSquareMore } from 'react-icons/ci';
import { ProfileStory } from '../../Components/atoms/ProfileStory';
import { DATA_USER_IG } from '../../utils/constant';
import { FeedComponent } from '../../Components/molecules/FeedComponent';

export const Home = () => {
  const dataSidebar = [
    {
      icons: <GoHome size={30} />,
      label: 'Home',
      isActive: true,
    },
    {
      icons: <AiOutlineSearch size={30} />,
      label: 'Search',
      isActive: false,
    },
    {
      icons: <MdOutlineExplore size={30} />,
      label: 'Explore',
      isActive: false,
    },
    {
      icons: <HiOutlineVideoCamera size={30} />,
      label: 'Reels',
      isActive: false,
    },
    {
      icons: <BiMessageRoundedAdd size={30} />,
      label: 'Messages',
      isActive: false,
    },
    {
      icons: <AiOutlineHeart size={30} />,
      label: 'Notification',
      isActive: false,
    },
    {
      icons: <AiOutlinePlusSquare size={30} />,
      label: 'Create',
      isActive: false,
    },
  ];
  return (
    <div className="grid grid-cols-5 h-full">
      <div className="py-10 px-5 relative border-r-[0.05px] border-gray-50/30">
        <div className="w-full mb-10">
          <img
            src="https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png"
            alt="logo-instagram"
            className="w-[40%]"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <div>
            {dataSidebar.map((item, index) => {
              return (
                <SidebarItem
                  key={index}
                  isActive={item.isActive}
                  label={item.label}
                  icons={item.icons}
                />
              );
            })}
          </div>
          <div className="absolute bottom-5 w-[80%]">
            <SidebarItem icons={<CiSquareMore size={30} />} label={'More'} />
          </div>
        </div>
      </div>
      <div className="col-span-4 overflow-y-scroll">
        <div className="grid grid-cols-3 h-[200vh]">
          <div className="col-span-2 text-2xl py-10 px-16 ">
            <div className="w-full overflow-x-scroll">
              <div className="flex flex-row gap-3">
                {DATA_USER_IG.map((item, index) => {
                  return (
                    <ProfileStory
                      key={index}
                      text={item.username}
                      imgLink={item.imgLink}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <FeedComponent />
            </div>
          </div>
          <div>Profile Kita</div>
        </div>
      </div>
    </div>
  );
};
