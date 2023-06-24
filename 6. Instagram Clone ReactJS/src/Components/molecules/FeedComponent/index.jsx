import { AiOutlineHeart } from 'react-icons/ai';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { TbMessageCircle } from 'react-icons/tb';
import { RxBookmark } from 'react-icons/rx';
import { useState } from 'react';
import { GrEmoji } from 'react-icons/gr';

export const FeedComponent = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [data, setData] = useState({
    comment: '',
  });
  const handleChange = (e) => {
    setData({ comment: e.target.value });
    console.log(data);
  };
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
      <div className="text-[12px] leading-normal">
        <p className="leading-normal font-bold mb-1">21,000 likes</p>
        <p className={`p-0 leading-normal ${isExpand ? null : 'line-clamp-3'}`}>
          <span className="font-semibold cursor-pointer">
            garudarevolution.ina
          </span>{' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod
          exercitationem enim sint perferendis quasi eligendi earum maxime
          corrupti? Suscipit quae dolorem nemo excepturi voluptas harum
          inventore aut, sunt unde obcaecati rem. Nihil eligendi eius vero,
          soluta voluptas maxime magnam sed.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi
          reprehenderit temporibus minus obcaecati iste tempore quia nisi quam
          voluptate dolores architecto vero unde laboriosam, accusamus eveniet
          dolor rerum! Expedita veniam molestias obcaecati. Ipsam provident sint
          ipsum ex minima corrupti dolor ipsa eius. Similique ipsa porro nobis
          odit necessitatibus obcaecati.
        </p>
        <button
          onClick={() => {
            setIsExpand(!isExpand);
          }}
          className="text-[#A8A8A8] leading-normal  "
        >
          more
        </button>
        <a href="#" className="block my-1">
          See Translation
        </a>
        <a href="#" className="text-[#A8A8A8] text-[13px]">
          View all 478 comments
        </a>
        <div className="flex flex-row items-center">
          <input
            placeholder="Add a comment...."
            type="text"
            onChange={handleChange}
            className="w-full text-white bg-transparent outline-none border-none py-2 text-sm"
          />
          <div className="flex gap-3 items-center">
            <button
              className={`text-blue-500 font-bold ${
                data.comment.length > 0 ? null : 'hidden'
              }`}
            >
              Post
            </button>
            <GrEmoji />
          </div>
        </div>
      </div>
    </div>
  );
};
