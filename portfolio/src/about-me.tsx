import { useState } from "react";
import Folder from "./Folder";
import FolderItem from "./FolderItem";
import PersonalInfo from "./personal-info";
import Education from "./education";
import Skills from "./skills";

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
      <div className="border-r divide-y divide-[#607B96] text-xs flex flex-col border-[#607B96] lg:w-[10rem]  2xl:w-[19.25rem] h-full">
        <div className="2xl:w-[19.25rem] lg:w-[10rem]">
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
                name="Personal-info"
                isActive={activeItem === 'Personal-info'}
                onClick={() => handleItemClick('Personal-info')}
                icon="folderItem.png"
              />
            </Folder>
            <Folder
              name="Technologies-languages"
              isActive={activeSubFolder === 'Technologies-languages'}
              onClick={() => handleSubFolderClick('Technologies-languages')}
              icon2="list1.png"
              icon="folderG.png"
              icon2Open="list2.png"

            >
              <FolderItem
                name="Skills"
                isActive={activeItem === 'Skills'}
                onClick={() => handleItemClick('Skills')}
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
        <div className="2xl:w-[19.25rem] lg:w-[10rem]">
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
      {activeItem === 'Personal-info' && (
          <PersonalInfo/>
      )}
      {activeItem === '1337' && (
        <Education/>
      )}
      {activeItem === 'Skills' && (
        <Education/> 
        // <Skills/>
      )}
      </div>
    );
  };
  
  export default AboutMe;
  