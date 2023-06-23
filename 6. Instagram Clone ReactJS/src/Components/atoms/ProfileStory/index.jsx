import { checkLength } from '../../../utils/function';
export const ProfileStory = ({ text, imgLink }) => {
  return (
    <>
      <div className="w-fit cursor-pointer">
        <div className="w-[66px] h-[66px] mx-auto  ">
          <div className="p-[2%] rounded-full bg-gradient-to-r from-[#FFC801] via-[#E200A4] to-[#F00287] ">
            <img
              src={imgLink}
              alt="photo"
              className="rounded-full w-[66px] h-[66px] object-cover border-[2px] border-black"
            />
          </div>
        </div>
        <p className="text-center mt-1 text-xs line-clamp-1">
          {checkLength(text)}
        </p>
      </div>
    </>
  );
};
