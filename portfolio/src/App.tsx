
import { FaGithub } from 'react-icons/fa6';
import { FaTwitter } from "react-icons/fa";

import './App.css'
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import _home from './_home';
import AboutMe from './about-me';
import Projects from './_projects';
import Contact from './contact-me';

function App() {
  
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabName:number) => {
    setActiveTab(tabName);
  }
  console.log(activeTab)
  return (
    <>
      <div className='bg-black h-screen flex justify-center items-center '>
          <div className='bg-[#011627] rounded-lg border-[#607B96] justify-between flex flex-col border h-[85%] w-[90%]'>
              <div className='flex justify-between text-[#607B96] h-12 items-center border-b-[1px] border-[#607B96] '>
                <div className='flex gap-28 divide-x h-12 divide-[#607B96] items-center justify-center '>
                  <div className='ml-5'>
                    Mohamed-Aboulhoda
                </div>
                <div className='flex justify-betweeen   h-12  items-center m-5'>
                <div className={`flex  h-12 w-24 divide-[#607B96]  items-center cursor-pointer ${activeTab == 1 ? 'border-b-2 border-[#FEA55F] text-white' : ''}`} onClick={() => handleTabClick(1)}>
                    <p className='ml-5'>_hello</p>
                  </div>
                  <div className={`flex  h-12 w-28 border-l border-[#607B96] items-center cursor-pointer ${activeTab == 2 ? 'border-b-2 border-b-[#FEA55F] text-white' : ''}`} onClick={() => handleTabClick(2)}>
                      <p className='ml-5'>_about-me</p>
                    </div>
                  <div className={`flex  h-12 w-24 border-l border-[#607B96]  items-center cursor-pointer ${activeTab == 3 ? 'border-b-2 border-b-[#FEA55F] text-white' : ''}`} onClick={() => handleTabClick(3)}>
                        <p className='ml-5'>_projects</p>
                    </div>
                      <div className='flex border-l border-[#607B96] h-12   items-center'></div>
                </div>
                </div>
                <div className={`border-[#607B96] border-l  h-12 flex items-center cursor-pointer ${activeTab == 4 ? 'border-b-2 border-b-[#FEA55F] text-white' : ''}`} onClick={() => handleTabClick(4)}>
                    <p className='mr-9 ml-5'>_contact-me</p>  
                  </div>
              </div>
              <div  className={activeTab === 1 ?'flex  font-Fira_code h-[71%] gap-16  justify-center w-full  ' : 'hidden'}>
                  <_home />
              </div>
              <div  className={activeTab === 2 ?'flex  font-Fira_code h-[100%] gap-16  ' : 'hidden'}>
                  <AboutMe />
              </div>
              <div  className={activeTab === 3 ?'flex  font-Fira_code h-[100%] gap-16  relative ' : 'hidden'}>
                  <Projects />
              </div>
              <div  className={activeTab === 4 ?'flex  font-Fira_code h-[100%] gap-16  ' : 'hidden'}>
                  <Contact />
              </div>
              <div className='flex justify-between text-[#607B96] h-12 items-center border-t-[1px] border-[#607B96] '>
                <div className='flex  divide-x h-12 divide-[#607B96] items-center '>
                  <div className='ml-5'>
                  find me in:
                </div>
                <div className='flex gap-10 divide-x-[1px] h-12 divide-[#607B96]  items-center m-5'>
                  <div className='flex divide-x-[1px] h-12 divide-[#607B96] items-center '>
                  <FaLinkedin className='ml-5 h-10' />
                  </div>
                  <div className='flex divide-x-[1px] h-12 divide-[#607B96] items-center '>
                  <FaTwitter className='ml-5 h-16' />

                  </div>
                  <div className='flex divide-x-[1px] h-12 divide-[#607B96] border-[#607B96] items-center'></div>
                </div>
                </div>
                <div className='border-[#607B96] border-l-[1px] h-12 flex items-center mr-9'>
                  <p className='ml-5'>@maboulho</p>
                  <FaGithub className='ml-5' />
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default App


