import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
    <div className="h-full w-full flex divide-x  divide-[#607B96]">
        <div className="2xl:w-[90rem] lg:w-full flex items-center flex-col justify-center lg:mr-5 lg:p-1 2xl:p-32  text-left text-[#607B96]">
          <div className="text-left lg:text-xs   2xl:text-xl flex flex-col gap-5 ">
              <span className="">1 &nbsp; &nbsp; &nbsp;    /**</span>
              <span className="">2 &nbsp; &nbsp; &nbsp;* Mohamed Aboulhoda, 25-year-old Moroccan software engineer</span>
              <span className="">3 &nbsp; &nbsp; &nbsp;* Student at 1337 Coding School | University Mohammed VI Polytechnic (UM6P)</span>
              <span className="">4 &nbsp; &nbsp; &nbsp;* Proven track record in developing and designing web applications</span>
              <span className="">5 &nbsp; &nbsp; &nbsp;* an analytical mindset and excels at solving complex problems</span>
              <span className="">6 &nbsp; &nbsp; &nbsp;* Dedicated to delivering high-quality, efficient, and maintainable code </span>
              <span className="">7 &nbsp; &nbsp; &nbsp;*  experience in creating seamless user experiences and backend systems</span>
              <span className="">8 &nbsp; &nbsp; &nbsp;* Committed to meeting demanding development objectives and tight schedules</span>
              <span className="">9 &nbsp; &nbsp; &nbsp;* Adept at driving projects from concept to completion with precision</span>
              <span className="">10 &nbsp; &nbsp;  /**</span>
          </div>
        </div>
        <div className="2xl:w-[2rem] lg:w-[1rem]  border-r border-l"></div>
        <div className="2xl:w-[103rem] lg:w-[50%] flex 2xl:p-16  2xl:ml-5 items-center justify-center">
          <img src="me.webp" alt="" className="2xl:w-[70%] lg:w-[95%]"/>
        </div>
      </div>
  );
};

export default PersonalInfo;
