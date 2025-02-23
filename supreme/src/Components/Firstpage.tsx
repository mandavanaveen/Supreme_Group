import React from 'react';

const Firstpage: React.FC = () => {
  return (
    <div className="relative h-[925px] text-white bg-[#00000099] bg-opacity-60 flex justify-center items-center px-4 md:px-0">
      <div className="w-full max-w-[761px] h-auto flex flex-col text-center">
        <p className="text-lg md:text-[22px] font-normal">Performance in motion</p>
        <h2 className="flex flex-col justify-center">
          <span className="font-semibold text-3xl md:text-5xl">Soft Trims and NVH Solutions</span>
          <span className="font-light text-2xl md:text-4xl">for seamless rides</span>
        </h2>
      </div>
    </div>
  );
};

export default Firstpage;
