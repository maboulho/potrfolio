import { useState } from "react";
import Folder from "./Folder";
import FolderItem from "./FolderItem";

const Projects: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleFolderClick = (folderName: string) => {
    setActiveFolder(folderName);
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const toggleCheckbox = (itemName: string) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [itemName]: !prevState[itemName]
    }));
  };

  const handleDivClick = (itemName: string) => {
    toggleCheckbox(itemName);
    handleItemClick(itemName);
  };

  return (
    <div className="flex w-full h-full">
    <div className="border-r divide-y divide-[#607B96] text-xs flex flex-col border-[#607B96] lg:w-[10rem]  2xl:w-[19.25rem] h-full">
      <Folder
        name="Projects"
        isActive={activeFolder === 'Personal info'}
        onClick={() => handleFolderClick('Personal info')}
        icon="list.png"
      >
        <div className="flex  items-center cursor-pointer" onClick={() => handleDivClick('React')}>
          <input
            type="checkbox"
            checked={checkedItems['React'] || false}
            onChange={() => toggleCheckbox('React')}
            className="peer relative h-5 w-5 mb-[1.7px] cursor-pointer appearance-none rounded-md border border-[#607B96] justify-center checked:bg-[#607B96] checked:border-[#607B96] after:content-[''] after:absolute after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:bg-no-repeat after:bg-center after:bg-contain checked:after:scale-75 checked:after:content-['✔'] checked:after:text-white checked:after:text-2xl"
          />
          <FolderItem
            name="React"
            isActive={activeItem === 'React'}
            icon="react.png" onClick={function (): void {
              throw new Error("Function not implemented.");
            } }          />
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => handleDivClick('Html')}>
          <input
            type="checkbox"
            checked={checkedItems['Html'] || false}
            onChange={() => toggleCheckbox('Html')}
            className="peer relative h-5 w-5 mb-[1.7px] cursor-pointer appearance-none rounded-md border border-[#607B96] justify-center checked:bg-[#607B96] checked:border-[#607B96] after:content-[''] after:absolute after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:bg-no-repeat after:bg-center after:bg-contain checked:after:scale-75 checked:after:content-['✔'] checked:after:text-white checked:after:text-2xl"
          />
          <FolderItem
            name="Html"
            isActive={activeItem === 'Html'}
            icon="html.png" onClick={function (): void {
              throw new Error("Function not implemented.");
            } }          />
        </div>
        <div className="flex items-center cursor-pointer" onClick={() => handleDivClick('CSS')}>
          <input
            type="checkbox"
            checked={checkedItems['CSS'] || false}
            onChange={() => toggleCheckbox('CSS')}
            className="peer relative h-5 w-5 mb-[1.7px] cursor-pointer appearance-none rounded-md border border-[#607B96] justify-center checked:bg-[#607B96] checked:border-[#607B96] after:content-[''] after:absolute after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:bg-no-repeat after:bg-center after:bg-contain checked:after:scale-75 checked:after:content-['✔'] checked:after:text-white checked:after:text-2xl"
          />
          <FolderItem
            name="CSS"
            isActive={activeItem === 'CSS'}
            icon="css.png" onClick={function (): void {
              throw new Error("Function not implemented.");
            } }          />
        </div>
      </Folder>
    </div>
    <div className=" h-full w-full grid 2xl:grid-cols-3 lg:grid-cols-2 2xl:ml-48 2xl:p-48 lg:ml-10 lg:p-20 lg:pl-44  gap-y-12 gap-x-8 items-center overflow-y-auto justify-center absolute no-scrollbar ">
          <div className=" gap-5 flex flex-col  ">
            <div className="ml-8 flex gap-3 lg:text-md 2xl:text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// multiplayer online game</p>
            </div> 
            <div className=" 2xl:w-[40rem] lg:w-[25rem] lg:h-[15rem]  2xl:h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="2xl:h-1/2 lg:h-1/2 lg:w-full flex 2xl:w-full pt-1">
                  <img src="PingPong.jpg"  alt=""  className=" !object-cover rounded-t-2xl w-full h-full "/>
              </div>
               <div className="justify-start 2xl:gap-6 lg:gap-3 2xl:text-2xl lg:text-xs lg:h-[10rem] 2xl:h-1/2 text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] 2xl:w-44 lg:w-40  text-xl rounded-lg text-white lg:h-11 2xl:h-[11rem ">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-4 flex flex-col">
            <div className="ml-8 flex gap-3 lg:text-md 2xl:text-xl">
              <p className="text-[#5565E8] "> Project 2</p>
              <p className="text-[#607B96]">// HTTP Web Server</p>
            </div>
            <div className=" 2xl:w-[40rem] lg:w-[25rem] lg:h-[15rem]  2xl:h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="2xl:h-1/2 lg:h-1/2 lg:w-full flex 2xl:w-full pt-1">
                  <img src="nginx.webp"  alt=""  className=" !object-cover rounded-t-2xl w-full h-full  "/>
              </div>
               <div className="justify-start 2xl:gap-6 lg:gap-3 2xl:text-2xl lg:text-xs lg:h-[8rem] 2xl:h-1/2 text-[#607B96] p-8 w-fit  flex flex-col">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] 2xl:w-44 lg:w-40 lg:mb-12 text-xl rounded-lg text-white lg:h-11 2xl:h-16">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-4 flex flex-col">
            <div className="ml-8 flex gap-3 lg:text-md 2xl:text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// Cub3d (RayCasting)</p>
            </div>
            <div className="2xl:w-[40rem] lg:w-[25rem] lg:h-[15rem]  2xl:h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="2xl:h-1/2 lg:h-1/2 lg:w-full flex 2xl:w-full pt-1">
                  <img src="cub3d.png"  alt=""  className=" !object-cover rounded-t-2xl w-full h-full "/>
              </div>
               <div className="justify-start 2xl:gap-6 lg:gap-3 2xl:text-2xl lg:text-xs lg:h-[8rem] 2xl:h-1/2 text-[#607B96] p-8 w-fit  flex flex-col">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] 2xl:w-44 lg:w-40 lg:mb-12 text-xl rounded-lg text-white lg:h-11 2xl:h-16">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-5 flex flex-col  ">
            <div className="ml-8 flex gap-3 lg:text-md 2xl:text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// multiplayer online game</p>
            </div> 
            <div className=" 2xl:w-[40rem] lg:w-[25rem] lg:h-[15rem]  2xl:h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="2xl:h-1/2 lg:h-1/2 lg:w-full flex 2xl:w-full pt-1">
                  <img src="PingPong.jpg"  alt=""  className=" !object-cover rounded-t-2xl w-full h-full "/>
              </div>
               <div className="justify-start 2xl:gap-6 lg:gap-3 2xl:text-2xl lg:text-xs lg:h-[8rem] 2xl:h-1/2 text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] 2xl:w-44 lg:w-40 lg:mb-12 text-xl rounded-lg text-white lg:h-11 2xl:h-16">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-5 flex flex-col  ">
            <div className="ml-8 flex gap-3 lg:text-md 2xl:text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// multiplayer online game</p>
            </div> 
            <div className=" 2xl:w-[40rem] lg:w-[25rem] lg:h-[15rem]  2xl:h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="2xl:h-1/2 lg:h-1/2 lg:w-full flex 2xl:w-full pt-1">
                  <img src="PingPong.jpg"  alt=""  className=" !object-cover rounded-t-2xl w-full h-full "/>
              </div>
               <div className="justify-start 2xl:gap-6 lg:gap-3 2xl:text-2xl lg:text-xs lg:h-[8rem] 2xl:h-1/2 text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] 2xl:w-44 lg:w-40 lg:mb-12 text-xl rounded-lg text-white lg:h-11 2xl:h-16">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-5 flex flex-col  ">
            <div className="ml-8 flex gap-3 lg:text-md 2xl:text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// multiplayer online game</p>
            </div> 
            <div className=" 2xl:w-[40rem] lg:w-[25rem] lg:h-[15rem]  2xl:h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="2xl:h-1/2 lg:h-1/2 lg:w-full flex 2xl:w-full pt-1">
                  <img src="PingPong.jpg"  alt=""  className=" !object-cover rounded-t-2xl w-full h-full "/>
              </div>
               <div className="justify-start 2xl:gap-6 lg:gap-3 2xl:text-2xl lg:text-xs lg:h-[8rem] 2xl:h-1/2 text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] 2xl:w-44 lg:w-40 lg:mb-12 text-xl rounded-lg text-white lg:h-11 2xl:h-16">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-5 flex flex-col  ">
            <div className="ml-8 flex gap-3 lg:text-md 2xl:text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// multiplayer online game</p>
            </div> 
            <div className=" 2xl:w-[40rem] lg:w-[25rem] lg:h-[15rem]  2xl:h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="2xl:h-1/2 lg:h-1/2 lg:w-full flex 2xl:w-full pt-1">
                  <img src="PingPong.jpg"  alt=""  className=" !object-cover rounded-t-2xl w-full h-full "/>
              </div>
               <div className="justify-start 2xl:gap-6 lg:gap-3 2xl:text-2xl lg:text-xs lg:h-[8rem] 2xl:h-1/2 text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] 2xl:w-44 lg:w-40 lg:mb-12 text-xl rounded-lg text-white lg:h-11 2xl:h-16">view-project</button>
                </div>  
          </div>   
          </div>
            
    </div>
    </div>
  );
};

export default Projects;