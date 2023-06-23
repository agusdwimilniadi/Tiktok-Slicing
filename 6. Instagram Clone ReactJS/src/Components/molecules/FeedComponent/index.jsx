import { AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { TbMessageCircle } from 'react-icons/tb';
import { RxBookmark } from 'react-icons/rx';

export const FeedComponent = () => {
  return (
    <div className="mt-5 mx-20">
      <div className="flex flex-row justify-between items-center py-3">
        <div className="flex flex-row gap-3 items-center">
          <img
            src="https://pbs.twimg.com/profile_images/880354762973077504/lNFNzc7e_400x400.jpg"
            alt="img-ig"
            className="w-[32px] h-[32px] rounded-full object-cover"
          />
          <p className="text-sm">
            garudarevolution.ina ·{' '}
            <span className="text-sm text-[#A7A7A7]">16 m</span>
          </p>
        </div>
        <div>
          <FiMoreHorizontal />
        </div>
      </div>
      <div>
        <img
          src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/ig-content-plan-62a816d2d6610-sej.png"
          alt="img"
          className="w-full h-[585px] rounded object-cover"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-3 my-4">
          <a href="#">
            <AiOutlineHeart size={24} />
          </a>
          <a href="#">
            <TbMessageCircle size={24} className="-rotate-90" />
          </a>
          <a href="#">
            <FiSend size={24} className="rotate-12" />
          </a>
        </div>
        <div className="my-4">
          <a href="#">
            <RxBookmark />
          </a>
        </div>
      </div>
      <div>
        <p className="text-[12px] font-bold">21,000 likes</p>
      </div>
    </div>
  );
};
