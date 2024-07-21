import { myphoto } from '../Constant/Index';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[70%]  bg-black text-white flex flex-col items-start justify-center md:p-11">
      <h1 className="text-2xl md:text-4xl mb-4 md:mb-6 font-bold text-green-600">
  Hi, I'm Tarun Kale
</h1>
<p className="text-lg md:text-3xl mb-4 md:mb-6 text-green-500">
  Frontend Developer
</p>
<p className="text-lg md:text-3xl mb-4 md:mb-6 text-green-500">
  JavaScript and React.js Specialist
</p>
<p className="text-lg md:text-3xl mb-4 md:mb-6 text-green-500">
  UI Designer
</p>
      </div>
      <div className="w-[100%] sm:w-[30%] sm:bg-green-500  bg-black flex items-center justify-center">
        {/* Image Container */}
        <div className="absolute inset-y-0 left-[50%] md:left-[69%] transform -translate-x-1/2 flex items-center justify-center">
          <img
            src={myphoto}
            alt="Your Image"
            className="w-[100%] h-auto border-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;