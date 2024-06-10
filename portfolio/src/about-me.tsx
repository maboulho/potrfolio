import { useState } from "react";
import Folder from "./Folder";
import FolderItem from "./FolderItem";

const AboutMe: React.FC = () => {
    const [activeFolder, setActiveFolder] = useState<string | null>(null);
    const [activeSubFolder, setActiveSubFolder] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<string | null>(null);
  
    const handleFolderClick = (folderName: string) => {
      setActiveFolder(folderName);
      setActiveSubFolder(null);
      setActiveItem(null);
    };
  
    const handleSubFolderClick = (subFolderName: string) => {
      setActiveSubFolder(subFolderName);
      setActiveItem(null);
    };
  
    const handleItemClick = (itemName: string) => {
      setActiveItem(itemName);
    };
  
    return (
      <div className="flex  h-full w-full">
      <div className="border-r divide-y divide-[#607B96] text-xs flex flex-col border-[#607B96] w-[19.25rem] h-full">
        <div className="w-[19.25rem]">
          <Folder
            name="Personal info"
            isActive={activeFolder === 'Personal info'}
            onClick={() => handleFolderClick('Personal info')}
            icon="list.png"
          >
            <Folder
              name="Bio"
              isActive={activeSubFolder === 'Bio'}
              onClick={() => handleSubFolderClick('Bio')}
              icon2="list1.png"
              icon="folderO.png"
              icon2Open="list2.png"
            >
              <FolderItem
                name="Interest"
                isActive={activeItem === 'Interest'}
                onClick={() => handleItemClick('Interest')}
                icon="folderItem.png"
              />
            </Folder>
            <Folder
              name="Interest"
              isActive={activeSubFolder === 'Interest'}
              onClick={() => handleSubFolderClick('Interest')}
              icon2="list1.png"
              icon="folderG.png"
              icon2Open="list2.png"

            >
              <FolderItem
                name="I"
                isActive={activeItem === 'I'}
                onClick={() => handleItemClick('I')}
                icon="folderItem.png"
              />
            </Folder>
            <Folder
              name="Education"
              isActive={activeSubFolder === 'Education'}
              onClick={() => handleSubFolderClick('Education')}
              icon2="list1.png"
              icon="folderB.png"
              icon2Open="list2.png"

            >
              <FolderItem
                name=" 1337 Coding School UM6P"
                isActive={activeItem === '1337'}
                onClick={() => handleItemClick('1337')}
                icon="folderItem.png"
              />
            </Folder>
          </Folder>
        </div>
        <div className="w-[19.25rem]">
          <Folder
            name="Contact me"
            isActive={activeFolder === 'Contact me'}
            onClick={() => handleFolderClick('Contact me')}
            icon="list.png"
          >
            <FolderItem
              name="Email"
              isActive={activeItem === 'Email'}
              onClick={() => handleItemClick('Email')}
              icon="mail-icon.png"
            />
            <FolderItem
              name="Phone"
              isActive={activeItem === 'Phone'}
              onClick={() => handleItemClick('Phone')}
              icon="phone-icon.png"
            />
          </Folder>
        </div>
      </div>
      <div className="h-full w-full flex divide-x  divide-[#607B96]">
        <div className="w-[90rem] flex items-center justify-center p-72 text-[#607B96]">
            <div className="gap-8  flex">
              <span className=" mr-3">1</span>
              <span className=""> * I have 5 years of еxperience in web</span>
            </div>
        </div>
        <div className="w-[2rem]  border-r border-l"></div>
        <div className="w-[103rem] flex p-16 ml-5 items-center justify-center">
          <img src="me.webp" alt="" />
        </div>
      </div>
      </div>
    );
  };
  
  export default AboutMe;
  