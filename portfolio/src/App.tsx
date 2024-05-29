
import { FaGithub } from 'react-icons/fa6';
import './App.css'
import { FaLinkedin } from "react-icons/fa";

function App() {
  

  return (
    <>
      <div className='bg-black h-screen flex justify-center items-center'>
          <div className='bg-[#011627] rounded-lg border-[#607B96] justify-between flex flex-col border h-[85%] w-[90%]'>
              <div className='flex justify-between text-[#607B96] h-12 items-center border-b-[1px] border-[#607B96] '>
                <div className='flex gap-28 divide-x h-12 divide-[#607B96] items-center '>
                  <div className='ml-5'>
                    Mohamed-Aboulhoda
                </div>
                <div className='flex gap-10 divide-x-[1px] h-12 divide-[#607B96]  items-center m-5'>
                  <div className='flex divide-x-[1px] h-12 divide-[#607B96] items-center '>
                    <p className='ml-5'>_hello</p>
                  </div>
                  <div className='flex divide-x-[1px] h-12 divide-[#607B96] items-center '>
                    <p className='ml-5'>
                    _about-me
                    </p>
                  </div>
                  <div className='flex divide-x-[1px] h-12 divide-[#607B96] border-[#607B96] items-center '>
                  <p className='ml-5 '>_projects</p>
                  </div>
                  <div className='flex divide-x-[1px] h-12 divide-[#607B96] border-[#607B96] items-center'></div>
                </div>
                </div>
                <div className='border-[#607B96] border-l-[1px] h-12 flex items-center mr-9'>
                <p className='ml-5'>
                    _contact-me
                    </p> 
                </div>
              </div>
              <div className='flex  font-Fira_code h-[90%] gap-16  justify-center '>
                  <div className='flex flex-col justify-center gap-6    items-start'>
                      <p className=' text-white '>Hi all, I am</p>
                      <p className=' text-7xl text-white'>Mohamed Aboulhoda</p>
                      <p className='text-[#4D5BCE] text-4xl'> {'>'} Front-end Developer</p>
                      <p className='text-[#607B96]'>// you can also see it on my Github page</p>
                      <div className='flex gap-4'>
                        <p className='text-[#4D5BCE]'>const </p>
                        <p className='text-[#43D9AD]'> githubLink </p>
                        <p className=' text-white'> = </p>
                        <p className='text-[#E99287]'> “https://github.com/example/url”</p>
                      </div>
                  </div>
                  <div className=' justify-center gap-6  items-center flex flex-col  '>
                      <img className='opacity-25' src="code.png" alt="" />
                      <img className='opacity-50' src="code.png" alt="" />
                      <img className='opacity-100' src="code.png" alt="" />
                      <img className='opacity-50' src="code.png" alt="" />
                      <img className='opacity-25' src="code.png" alt="" />
                  
                  </div>
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
                  <FaGithub className='ml-5 h-16' />
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
