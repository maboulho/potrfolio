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
    <div className="border-r divide-y divide-[#607B96] text-xs flex flex-col border-[#607B96] w-[21.20rem] h-full">
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
    <div className=" h-full w-full grid grid-cols-3 p-36  items-center   justify-center ">
          <div className=" gap-4 flex flex-col ">
            <div className="ml-8 flex gap-3 text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// multiplayer online game</p>
            </div>
            <div className="w-[40rem]  h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="h-48 flex flex-col">
                  <img src="code.png"  alt=""  className=" p-1  w-[41rem] h-[12.3rem]  "/>
              </div>
               <div className="justify-start gap-6 text-2xl  text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] w-44 text-xl rounded-lg text-white h-11">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-4 flex flex-col">
            <div className="ml-8 flex gap-3 text-xl">
              <p className="text-[#5565E8] "> Project 2</p>
              <p className="text-[#607B96]">// HTTP Web Server</p>
            </div>
            <div className="w-[40rem]  h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="h-48 flex flex-col">
                  <img src="nginx.webp"  alt=""  className=" p-1  w-[41rem] h-[12.3rem]  "/>
              </div>
               <div className="justify-start gap-6 text-2xl  text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] w-44 text-xl rounded-lg text-white h-11">view-project</button>
                </div>  
          </div>   
          </div>
          <div className=" gap-4 flex flex-col">
            <div className="ml-8 flex gap-3 text-xl">
              <p className="text-[#5565E8]"> Project 1</p>
              <p className="text-[#607B96]">// Cub3d (RayCasting)</p>
            </div>
            <div className="w-[40rem]  h-96 flex flex-col  items-center justify-center divide-y-[1px] divide-[#607B96] bg-[#011221] rounded-2xl border border-[#607B96]">
            <div className="h-48 flex flex-col">
                  <img src="cub3d.png"  alt=""  className=" p-1  w-[41rem] h-[12.3rem]  "/>
              </div>
               <div className="justify-start gap-6 text-2xl  text-[#607B96] p-8 w-fit  flex flex-col ">
                <p>lorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum</p>
                <button className="bg-[#1C2B3A] w-44 text-xl rounded-lg text-white h-11">view-project</button>
                </div>  
          </div>   
          </div>
            <div className="w-[40rem] h-96 rounded-2xl border border-[#607B96]"> 

            </div>
            <div className="w-[40rem] h-96 rounded-2xl border border-[#607B96]"> 

            </div>
            <div className="w-[40rem] h-96 rounded-2xl border border-[#607B96]"> 

            </div>
    </div>
    </div>
  );
};

export default Projects;
