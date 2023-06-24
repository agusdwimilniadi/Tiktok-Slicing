export const SuggestFollower = () => {
  return (
    <div>
      <div className=" me-20  flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 leading-normal items-center">
          <div className="w-fit cursor-pointer">
            <div className="w-[42px] h-[42px] mx-auto  ">
              <div className="p-[2%] rounded-full bg-gradient-to-r from-[#FFC801] via-[#E200A4] to-[#F00287] ">
                <img
                  src={
                    'https://media.licdn.com/dms/image/C5603AQHigUmAthz7rw/profile-displayphoto-shrink_800_800/0/1634629297320?e=2147483647&v=beta&t=97A_8zkPEPdTAUbTqR1y0yxi4i0qf96x892l_UQ8r6w'
                  }
                  alt="photo"
                  className="rounded-full w-[42px] h-[42px] object-cover border-[2px] border-black"
                />
              </div>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-bold text-[12px]">agudwimilniadi</p>
            <p className="text-[#A8A8A8] text-[12px] font-semibold">AgusDM</p>
          </div>
        </div>
        <div>
          <button className="text-blue-500 font-semibold">Follow</button>
        </div>
      </div>
    </div>
  );
};
