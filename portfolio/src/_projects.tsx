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
    <div className="border-r divide-y divide-[#607B96] text-xs flex flex-col border-[#607B96] w-[19.25rem] h-full">
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
  );
};

export default Projects;
