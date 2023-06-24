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
import { SuggestProfile } from '../../Components/molecules/SuggestProfile';
import { SuggestFollower } from '../../Components/molecules/SuggestFollowers';

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
    <>
      <div className=" hidden sm:grid grid-cols-5 h-full">
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
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
                <FeedComponent />
              </div>
            </div>
            <div>
              <SuggestProfile />
              <div className="flex flex-row justify-between items-center my-3 me-20 ">
                <p className="text-[#A8A8A8] text-sm font-bold">
                  Suggested for you
                </p>
                <p className="text-xs">See All</p>
              </div>
              <div className="flex flex-col gap-3">
                <SuggestFollower />
                <SuggestFollower />
                <SuggestFollower />
                <SuggestFollower />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen  h-screen flex sm:hidden p-10 text-center text-2xl items-center justify-center">
        Silahkan akses di desktop kalian, sementara tidak support mobile
      </div>
    </>
  );
};
