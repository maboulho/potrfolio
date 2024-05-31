

const _home: React.FC = () => {
    return (
        <>
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
                      <img className='opacity-85' src="code.png" alt="" />
                      <img className='opacity-50' src="code.png" alt="" />
                      <img className='opacity-25' src="code.png" alt="" />
                  </div>
        </>

    )
}
export default _home