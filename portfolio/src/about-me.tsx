import { useState } from "react";
import Folder from "./Folder";
import FolderItem from "./FolderItem";

const AboutMe: React.FC = () => {
    const [activeFolder, setActiveFolder] = useState<string | null>(null);
    const [activeSubFolder, setActiveSubFolder] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<string | null>(null);
  
    const handleFolderClick = (folderName: string) => {
      setActiveFolder(folderName);
      setActiveSubFolder(null); // Reset active subfolder when a main folder is clicked
      setActiveItem(null); // Reset active item when a folder is clicked
    };
  
    const handleSubFolderClick = (subFolderName: string) => {
      setActiveSubFolder(subFolderName);
      setActiveItem(null); // Reset active item when a subfolder is clicked
    };
  
    const handleItemClick = (itemName: string) => {
      setActiveItem(itemName);
    };
  
    return (
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
              />
            </Folder>
            <Folder
              name="Education"
              isActive={activeSubFolder === 'Education'}
              onClick={() => handleSubFolderClick('Education')}
              icon2="list1.png"
              icon="folderO.png"
              icon2Open="list2.png"

            >
              <FolderItem
                name="InteR"
                isActive={activeItem === 'InteR'}
                onClick={() => handleItemClick('InteR')}
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
    );
  };
  
  export default AboutMe;
  