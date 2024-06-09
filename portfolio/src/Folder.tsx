import React, { useState } from 'react';

interface FolderProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
  icon2?: string;
  icon2Open?:string // Optional icon prop
}

const Folder: React.FC<FolderProps> = ({ name, isActive, onClick, children, icon,icon2 ,icon2Open}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
    onClick(); 
  };

  return (
    <div className="mb-2">
      <div
        className={`cursor-pointer font-bold p-2 rounded flex items-center ${isActive ? 'text-white' : 'text-[#607B96]'}`}
        onClick={toggleFolder}
      >
        {icon2 && <img src={isOpen && icon2Open ? icon2Open : icon2} height="10" width="9" alt={`${name} icon`} className="mr-2" />}
        {icon && <img src={icon} height="15" width="15" alt={`${name}  icon`} className="mr-2 " />}
        {name}
      </div>
      {isOpen && <div className="ml-4 mt-2">{children}</div>}
    </div>
  );
};

export default Folder;
