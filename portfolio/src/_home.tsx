import React from "react";

const _home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-6 items-start">
        <p className="text-white">Hi all, I am</p>
        <p className="sm:text-2xl lg:text-5xl 2xl:text-7xl text-white">Mohamed Aboulhoda</p>
        <p className="text-[#4D5BCE] md:text-2xl lg:text-2xl 2xl:text-4xl">{'>'} Front-end Developer</p>
        <p className="text-[#607B96]">// you can also see it on my Github page</p>
        <div className="flex gap-4 text-sm 2xl:text-xl">
          <p className="text-[#4D5BCE]">const</p>
          <p className="text-[#43D9AD]">githubLink</p>
          <p className="text-white">=</p>
          <p className="text-[#E99287]">“https://github.com/maboulho/”</p>
        </div>
      </div>
      <div className="justify-center gap-6  items-center flex flex-col">
        {/* For lg screens (3 images) */}
        <div className="hidden lg:flex lg:h-1/2 lg:w-[70%]  lg:gap-6 lg:flex-col lg:items-start lg:justify-center 2xl:hidden">
          <img className="opacity-25" src="code.png" alt="code" />
          <img className="opacity-85" src="code.png" alt="code" />
          <img className="opacity-25" src="code.png" alt="code" />
        </div>
        {/* For 2xl screens (5 images) */}
        <div className="hidden 2xl:flex 2xl:gap-6 2xl:flex-col 2xl:items-center">
          {/* <img className="opacity-25" src="code.png" alt="code" /> */}
          <img className="opacity-50" src="code.png" alt="code" />
          <img className="opacity-85" src="code.png" alt="code" />
          <img className="opacity-50" src="code.png" alt="code" />
          {/* <img className="opacity-25" src="code.png" alt="code" /> */}
        </div>
      </div>
    </>
  );
};

export default _home;
