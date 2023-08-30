import { Summary } from '../../Components/molecules/Summary';

export const Home = () => {
  return (
    <section className="max-h-screen overflow-hidden bg-primaryTPlay text-white ">
      <div className="h-screen">
        <div className="h-[60vh] grid grid-cols-2 ">
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-1 p-5">
              <div className="flex items-center  relative bg-secondaryTPlay  roundedPortofolio ">
                <h1 className="text-4xl p-5 font-bold">
                  Bringing Your Ideas <br /> To Life Through <br /> UI Design
                </h1>
                <button className="absolute bg-_3rdColor py-3 px-6 bottom-5 right-5 roundedPortofolio">
                  Hire Me 👋
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 p-5 gap-3">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
